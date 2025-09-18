<!-- counting_available_flats -->
<script>
  // --- Отдельный скрипт для обработки данных и обновления карточек ---
  document.addEventListener('DOMContentLoaded', async function () {
    //console.log("--- Запуск автономного скрипта обработки данных и карточек ---");

    // --- 1. Получение данных и создание сводки ---
    let aggregatedData = {}; // Объект для хранения сводки
    try {
      //console.log("1. Отправка запроса к API...");
      const response = await fetch('https://do72.4dev.app/do72api/hs/restapi_v1/estate_object?filter_type=building&id=f463c2f0-426a-11ee-a5c6-ac1f6b476fd3&additional_info=true&status=true');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      //console.log("2. Данные успешно получены. Ответ API содержит поле 'data' с массивом:", Array.isArray(jsonData.data));

      // --- Исправлено: Используем jsonData.data ---
      const dataArray = jsonData.data; // Извлекаем массив из свойства 'data'

      // --- 2. Создание агрегированной сводки ---
      //console.log("3. Создание агрегированной сводки...");
      if (Array.isArray(dataArray)) { // Проверяем, что jsonData.data - это массив
        //console.log(`   Обрабатываем ${dataArray.length} записей...`);
        dataArray.forEach((item, index) => {
          // Извлекаем площадь и статус
          const area = item.area;
          // Используем поле status из JSON напрямую
          const status = item.status;

          if (area !== undefined && status !== undefined) {
            // Создаем составной ключ для сводки
            // Округляем площадь до 2 знаков после запятой для группировки
            const roundedArea = parseFloat(area).toFixed(2);
            const key = `${roundedArea}|${status}`;

            // Увеличиваем счетчик для этой комбинации
            if (aggregatedData[key]) {
              aggregatedData[key]++;
            } else {
              aggregatedData[key] = 1;
            }
          } else {
            console.warn(`   Пропущен элемент #${index} с отсутствующими area или status:`, { area: item.area, status: item.status });
          }
        });
      } else {
        console.error("Полученные данные по ключу 'data' не являются массивом:", dataArray);
        console.log("Тип jsonData.", typeof jsonData.data);
      }

      // --- 3. Вывод сводки в консоль ---
      //console.log("4. Формирование и вывод сводки в консоль...");
      //console.log("--- Агрегированная сводка (площадь|статус -> количество) ---");
      // Сортируем ключи для более читаемого вывода
      const sortedKeys = Object.keys(aggregatedData).sort();
      sortedKeys.forEach(key => {
        const [area, status] = key.split('|');
        //console.log(`   Площадь: ${area}м², Статус: "${status}", Количество: ${aggregatedData[key]}`);
      });
      //console.log("--- Конец сводки ---");

      // --- 5. Планировка вызова обновления карточек через 3 секунды ---
      //console.log("5. Планировка обновления карточек через 3 секунды после парсинга данных...");
      setTimeout(() => {
        //console.log("6. Вызов функции обновления карточек после задержки...");
        updateLayoutCards();
      }, 1000); // Задержка 3000 миллисекунд = 3 секунды

    } catch (error) {
      console.error('Ошибка в скрипте: Ошибка при получении или обработке данных:', error);
      // Даже в случае ошибки парсинга данных, все равно планируем обновление карточек,
      // на случай, если они существуют и нужно просто очистить "Этажи"
      console.log("5. Планировка обновления карточек (в случае ошибки) через 3 секунды...");
      setTimeout(() => {
        console.log("6. Вызов функции обновления карточек после задержки (в случае ошибки)...");
        updateLayoutCards();
      }, 1000);
    }

    // --- 4. Функция обновления карточек ---
    function updateLayoutCards() { // Сделана именованной функцией
      //console.log("7. Начало обновления карточек планировок...");

      // --- Используем ваш способ поиска контейнера ---
      let cardsContainer = document.getElementsByClassName('flats-block__gallery')[0].firstElementChild // Уровень 1
        .firstElementChild // Уровень 2
        .firstElementChild // Уровень 3
        .firstElementChild // Уровень 4
        .firstElementChild; // Уровень 5;

      // --- 2. Найти все карточки внутри контейнера ---
      const allCards = cardsContainer.querySelectorAll('.flat-block-card');
      //console.log(`8. Найдено карточек: ${allCards.length}`);

      if (allCards.length === 0) {
        console.warn('   Карточки .flat-block-card не найдены.');
        console.log("--- Завершение функции обновления карточек ---");
        return; // Нечего фильтровать
      }

      //console.log("9. Итерация по карточкам:");
      allCards.forEach((card, index) => {
        //console.log(`   Карточка ${index + 1}:`, card);
        try {
          // --- Найти площадь для этой карточки ---
          // Ищем в dataset, предполагая, что предыдущий скрипт сохранил её там
          let areaStr = card.dataset.area;

          // Если в dataset нет, пытаемся найти в HTML (например, в блоке с информацией о площади)
          if (!areaStr) {
            // console.log("   Площадь не найдена в dataset, ищу в HTML...");
            const areaInfoContainer = card.querySelector('.flat-block-card__info-title')?.closest('.flat-block-card__info');
            if (areaInfoContainer) {
              const areaTitle = areaInfoContainer.querySelector('.flat-block-card__info-title');
              if (areaTitle && areaTitle.textContent.trim() === 'Площадь') {
                const areaValueElement = areaInfoContainer.querySelector('.flat-block-card__info-value');
                if (areaValueElement) {
                  const areaTextMatch = areaValueElement.textContent.trim().match(/([\d,]+)\s*м²/);
                  if (areaTextMatch) {
                    areaStr = areaTextMatch[1].replace(',', '.');
                    // console.log(`   Площадь извлечена из HTML: ${areaStr}`);
                  }
                }
              }
            }
          }

          if (!areaStr) {
            console.warn("   У карточки планировки не удалось определить площадь:", card);
            return; // Пропускаем эту карточку
          }

          const area = parseFloat(areaStr);
          if (isNaN(area)) {
            console.warn("   Не удалось преобразовать площадь в число для карточки:", areaStr, card);
            return; // Пропускаем эту карточку
          }

          // --- Найти элемент с "Этажи" ---
          // Исправленный способ поиска
          let floorsTitleElement = null;
          let floorsValueElement = null;
          
          // Ищем все блоки с информацией
          const infoBlocks = card.querySelectorAll('.flat-block-card__info');
          for (let block of infoBlocks) {
            const titleEl = block.querySelector('.flat-block-card__info-title');
            if (titleEl && titleEl.textContent.trim() === 'Этажи') {
              floorsTitleElement = titleEl;
              floorsValueElement = block.querySelector('.flat-block-card__info-value');
              break; // Нашли нужный блок, выходим из цикла
            }
          }

          if (floorsTitleElement) {
            // --- Заменить "Этажи" на "Доступно" ---
            floorsTitleElement.textContent = 'Доступно';
            //console.log(`   Текст 'Этажи' заменен на 'Доступно' в карточке с площадью ${area}м²`);

            // --- Найти количество в сводке ---
            // Ищем по статусу "Свободна", как указано
            // Также округляем площадь из карточки для поиска
            const roundedCardArea = area.toFixed(2);
            const lookupStatus = 'Свободна';
            const lookupKey = `${roundedCardArea}|${lookupStatus}`;
            const countAvailable = aggregatedData[lookupKey] || 0; // aggregatedData доступна из внешней области видимости

            // --- Обновить значение ---
            if (floorsValueElement) {
              if (countAvailable > 0) {
                floorsValueElement.textContent = `${countAvailable} шт.`;
                //console.log(`   Обновлено значение 'Доступно' для площади ${area}м²: ${countAvailable} шт.`);
              } else {
                floorsValueElement.textContent = '0 шт.';
                console.warn(`   Для площади ${area}м² в сводке не найдено квартир со статусом '${lookupStatus}'. Установлено значение 0 шт.`);
              }
            } else {
              console.warn("   Элемент со значением 'Этажи' не найден в карточке с площадью:", area, card);
            }

          } else {
            console.warn("   Элемент с заголовком 'Этажи' не найден в карточке планировки с площадью:", area, card);
            // Это сообщение может быть слишком частым
          }
        } catch (e) {
          console.error("Ошибка при обновлении карточки планировки:", e, card);
        }
      });
      //console.log("10. Завершение итерации по карточкам.");
      //console.log("--- Завершение функции обновления карточек ---");
    };

    //console.log("--- Завершение основного асинхронного обработчика DOMContentLoaded ---");
  });
</script>