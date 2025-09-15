<style>




/* --- Адаптация фильтров для мобильных устройств --- */
@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: stretch !important;
    padding: 15px 10px !important;
  }

  .filter-container > div {
    /* Применяется ко всем непосредственным дочерним div'ам контейнера фильтров */
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 15px !important;
    margin-bottom: 10px !important;
    border-bottom: 1px solid #eee; /* Визуальное разделение секций */
  }

  .filter-container > div:last-child {
     /* Убираем border у последнего элемента */
     border-bottom: none;
     padding-bottom: 0 !important;
     margin-bottom: 0 !important;
  }

  /* Группы чекбоксов комнат */
  .e-checkboxes-group {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px; /* Расстояние между чекбоксами */
    justify-content: center; /* Центрируем на мобильных */
  }

  .e-checkbox-btn {
    margin-bottom: 0; /* Убираем нижний margin у отдельных кнопок */
    flex: 1 1 auto; /* Позволяем кнопкам расти и сжиматься */
    min-width: calc(50% - 4px); /* Минимум две колонки */
  }

  .e-checkbox-btn label {
    /* Адаптируем лейблы чекбоксов */
    width: 100%; /* Растягиваем на всю ширину родителя */
    text-align: center; /* Центрируем текст */
    font-size: 0.8rem; /* Уменьшаем шрифт, если нужно */
    padding: 6px 4px; /* Корректируем отступы */
  }

  /* Секции слайдеров */
  .mr-20.pr-10.pb-8,
  .pb-8.mr-10 {
    padding-right: 0 !important;
    margin-right: 0 !important;
  }

  /* Контейнеры слайдеров */
  .mr-20.pr-10.pb-8 > div:not(.text-body-2),
  .pb-8.mr-10 > div:not(.text-body-2) {
    /* Применяется к div'у, содержащему слайдер и значения (исключаем заголовок) */
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  /* Слайдеры */
  .filter-slider {
    width: 100%; /* Слайдеры растягиваются на всю ширину */
    flex: 1; /* Занимают всё доступное пространство */
  }

  /* Значения слайдеров */
  #price-min-value, #price-max-value, #area-min-value, #area-max-value {
    font-size: 0.85rem; /* Немного уменьшаем шрифт */
    /* Можно добавить background или border для лучшей видимости */
    /* padding: 2px 5px;
    background-color: #f0f0f0;
    border-radius: 3px; */
  }

  /* Кнопка "очистить" */
  .filter-clear-link {
    align-self: center !important; /* Центрируем кнопку */
    margin-bottom: 0 !important;
    padding: 8px 15px; /* Делаем кнопку больше для удобства нажатия */
    border: 1px solid #d32f2f; /* Добавляем рамку */
    border-radius: 4px; /* Скругляем углы */
    text-align: center;
    /* Можно изменить фон */
    /* background-color: #fff; */
  }
}

/* --- Ещё более компактный вид для очень маленьких экранов --- */
@media (max-width: 480px) {
  .filter-container {
    padding: 12px 8px !important;
  }

  .e-checkboxes-group {
    gap: 6px;
  }

  .e-checkbox-btn {
    min-width: 100%; /* Одна колонка на очень маленьком экране */
  }

  .e-checkbox-btn label {
    font-size: 0.75rem;
    padding: 5px 3px;
  }

  .red-color-domOtel {
    font-size: 0.9rem; /* Уменьшаем заголовки фильтров */
  }

  #price-min-value, #price-max-value, #area-min-value, #area-max-value {
    font-size: 0.8rem;
  }
}




/* --- Стили для визуального выделения выбранных чекбоксов --- */
/* Базовые стили для лейблов чекбоксов, чтобы их можно было стилизовать */
.e-checkbox-btn label {
    display: inline-block; /* Или block, если нужно */
    padding: 5px 10px; /* Добавим немного отступов */
    border: 1px solid #ccc; /* Рамка по умолчанию */
    border-radius: 4px; /* Скругленные углы */
    background-color: #fff; /* Белый фон по умолчанию */
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s; /* Плавный переход */
    user-select: none; /* Предотвращаем выделение текста при двойном клике */
}

/* Стили для выбранного состояния */
.e-checkbox-btn label.checkbox-label--selected,
/* Или используем инлайновые стили, установленные JS */
/* Пример с использованием класса: */
/*
.e-checkbox-btn input[type="checkbox"]:checked + label {
    background-color: #e3f2fd;
    border-color: #1976d2;
}
*/
/* Но так как мы используем JS для установки стилей, класс может быть избыточным для базового состояния,
   но полезен для добавления других эффектов, если нужно */

/* Убедимся, что сам чекбокс не мешает стилям */
.e-checkbox-btn input[type="checkbox"] {
    /* Можно скрыть стандартный чекбокс и стилизовать только label, если нужно полностью кастомный вид */
    /* margin-right: 5px; */ /* Если чекбокс виден */
}


/* --- 1. Цвет ползунков --- */
/* Для Webkit (Chrome, Safari) */
.filter-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; /* Примерный размер */
  height: 16px;
  border-radius: 50%;
  background-color: #727272; /* Новый цвет */
  cursor: pointer;
  border: 1px solid #ccc; /* Опционально, для лучшей видимости */
}

/* Для Firefox */
.filter-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #727272; /* Новый цвет */
  cursor: pointer;
  border: 1px solid #ccc; /* Опционально */
}

/* Стиль трека слайдера (опционально) */
.filter-slider::-webkit-slider-runnable-track {
  background: #ddd;
  height: 4px;
  border-radius: 2px;
}
.filter-slider::-moz-range-track {
  background: #ddd;
  height: 4px;
  border-radius: 2px;
}

/* --- 2. Cursor pointer --- */
/* Для чекбоксов и их лейблов */
.e-checkbox-btn input[type="checkbox"],
.e-checkbox-btn label {
  cursor: pointer;
}

/* Для слайдеров */
.filter-slider {
  cursor: pointer;
}

/* Для кнопки "очистить" */
.filter-clear-link {
  cursor: pointer;
}

/* Для всего контейнера фильтров (опционально) */
.filter-container {
    cursor: default; /* Или оставьте как есть */
}


</style>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    //console.log("DOM fully loaded and parsed");

    // 1. Найти контейнер для вставки фильтров
    let cardsContainer = document.getElementsByClassName('flats-block__gallery')[0].firstElementChild // Уровень 1
    .firstElementChild // Уровень 2
    .firstElementChild // Уровень 3
    .firstElementChild // Уровень 4
    .firstElementChild; // Уровень 5;
	

    if (!cardsContainer) {
        // Попробуем альтернативный способ найти контейнер, если предыдущий не сработал
        //console.log("Контейнер .flats-block__gallery не найден. Ищем альтернативы...");
        // Ищем внутри аккордеона, где находятся карточки
        const accordionContent = document.querySelector('.accordion__content');
        if (accordionContent) {
            // Ищем первый подходящий контейнер внутри аккордеона
            cardsContainer = accordionContent.querySelector('[data-items]') || accordionContent.querySelector('.j-animation__row');
        }
    }
    
    // Если все еще не нашли, ищем по более общему селектору
    if (!cardsContainer) {
        console.log("Альтернативные контейнеры не найдены. Ищем по data-items...");
        cardsContainer = document.querySelector('[data-items]');
    }
    
    if (!cardsContainer) {
        console.error('Контейнер с карточками не найден. Проверьте селекторы.');
        return;
    }
    //console.log("Контейнер найден:", cardsContainer);

    // 2. Найти все карточки внутри контейнера
    const allCards = cardsContainer.querySelectorAll('.flat-block-card');
    //console.log(`Найдено карточек: ${allCards.length}`);

    if (allCards.length === 0) {
        console.warn('Карточки .flat-block-card не найдены.');
        return; // Нечего фильтровать
    }

    // 3. Собрать данные для фильтров
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let minArea = Infinity;
    let maxArea = -Infinity;
    const roomCounts = new Set();

    allCards.forEach(card => {
        // --- Извлечение количества комнат ---
        let rooms = null;
        const titleElement = card.querySelector('.flat-block-card__title');
        if (titleElement) {
            const titleText = titleElement.textContent.trim().toLowerCase();
            //console.log("Текст заголовка:", titleText);
            // Определяем количество комнат
            if (titleText.includes('студия')) {
                rooms = 1;
            } else {
                // Ищем число в начале названия, например "3-комнатная"
                let roomMatch = titleText.match(/^(\d)/); // Число в начале
                if (!roomMatch) {
                    // Ищем "N-комнатная"
                    roomMatch = titleText.match(/(\d)\s*[-\s]*комнат/i);
                }
                 if (!roomMatch) {
                    // Ищем "N к"
                    roomMatch = titleText.match(/(\d)\s*к/i);
                }
                if (roomMatch) {
                    rooms = parseInt(roomMatch[1], 10);
                }
            }
        }

        if (rooms !== null && !isNaN(rooms)) {
            roomCounts.add(rooms);
            card.dataset.rooms = rooms; // Сохраняем в dataset
        } else {
            console.warn('Количество комнат не определено для карточки:', card.querySelector('.flat-block-card__title')?.textContent || 'Без названия');
            card.dataset.rooms = 'undefined'; // Или пропустить эту карточку
            roomCounts.add('undefined');
        }







               // --- Извлечение площади ---
        let area = null;
        let areaElement = null;

        // Найдем все контейнеры с информацией в текущей карточке
        const infoContainers = card.querySelectorAll('.flat-block-card__info');
        // Пройдемся по ним и найдем тот, у которого заголовок "Площадь"
        for (let i = 0; i < infoContainers.length; i++) {
            const titleElement = infoContainers[i].querySelector('.flat-block-card__info-title');
            if (titleElement && titleElement.textContent.trim() === 'Площадь') {
                areaElement = infoContainers[i].querySelector('.flat-block-card__info-value');
                break; // Нашли нужный блок, выходим из цикла
            }
        }

        if (areaElement) {
            //console.log("Найден элемент с площадью:", areaElement);
            const areaText = areaElement.textContent.trim();
            // Извлекаем число из строки вида "69,5 м²"
            const areaMatch = areaText.match(/([\d,]+)\s*м²/);
            if (areaMatch) {
                area = parseFloat(areaMatch[1].replace(',', '.'));
                //console.log("Извлечена площадь:", area);
            } else {
                console.warn("Не удалось извлечь числовое значение площади из текста:", areaText);
            }
        } else {
            console.warn("Элемент с площадью .flat-block-card__info-value для поля 'Площадь' не найден в карточке");
        }

        if (area !== null && !isNaN(area)) {
            minArea = Math.min(minArea, area);
            maxArea = Math.max(maxArea, area);
            card.dataset.area = area; // Сохраняем в dataset
        } else {
            console.warn('Площадь не найдена или некорректна в карточке:', card.querySelector('.flat-block-card__title')?.textContent || 'Без названия');
            // card.dataset.area = '0'; // Или пропустить
        }

        // --- Извлечение цены ---
        let price = null;
        let priceElement = null;

        // Снова пройдемся по контейнерам с информацией, но теперь ищем "Цена"
        for (let i = 0; i < infoContainers.length; i++) { // infoContainers уже найден выше
            const titleElement = infoContainers[i].querySelector('.flat-block-card__info-title');
            if (titleElement && titleElement.textContent.trim() === 'Цена') {
                priceElement = infoContainers[i].querySelector('.flat-block-card__info-value');
                break; // Нашли нужный блок, выходим из цикла
            }
        }

        if (priceElement) {
            //console.log("Найден элемент с ценой:", priceElement);
            // Получаем все дочерние div элементы внутри .flat-block-card__info-value > div
            // Структура: .flat-block-card__info-value > div > [div с зачеркнутой ценой, div со скидочной ценой]
            const directChildrenDiv = priceElement.querySelector(':scope > div'); // Прямой потомок div
            let priceText = '';

            if (directChildrenDiv) {
                const nestedDivs = directChildrenDiv.querySelectorAll(':scope > div'); // Прямые потомки второго уровня

                if (nestedDivs.length >= 2) {
                    // Берем текст из второго div'а (индекс 1) - это скидочная цена
                    priceText = nestedDivs[1].textContent.trim();
                    //console.log("Найдена скидочная цена (2-й div):", priceText);
                } else if (nestedDivs.length === 1) {
                    // Если есть только один div, берем текст из него
                    priceText = nestedDivs[0].textContent.trim();
                    //console.log("Найдена единственная цена (1-й div):", priceText);
                } else {
                    // Если вложенных div'ов нет, берем текст из directChildrenDiv
                    priceText = directChildrenDiv.textContent.trim();
                    //console.log("Найдена цена напрямую из directChildrenDiv:", priceText);
                }
            } else {
                // Если нет прямого потомка div, берем текст напрямую из .flat-block-card__info-value
                priceText = priceElement.textContent.trim();
                //console.log("Найдена цена напрямую из .flat-block-card__info-value:", priceText);
            }

            // Извлекаем число из строки вида "6 260 540 ₽"
            const priceMatch = priceText.match(/([\d\s]+)₽/);
            if (priceMatch) {
                price = parseInt(priceMatch[1].replace(/\s/g, ''), 10);
                //console.log("Извлечена цена:", price);
            } else {
                console.warn("Не удалось извлечь числовое значение цены из текста:", priceText);
            }
        } else {
            console.warn("Элемент с ценой .flat-block-card__info-value для поля 'Цена' не найден в карточке");
        }

        if (price !== null && !isNaN(price)) {
            minPrice = Math.min(minPrice, price);
            maxPrice = Math.max(maxPrice, price);
            card.dataset.price = price; // Сохраняем в dataset
        } else {
            console.warn('Цена не найдена или некорректна в карточке:', card.querySelector('.flat-block-card__title')?.textContent || 'Без названия');
            // card.dataset.price = '0'; // Или пропустить
        }
		
		
		
		
		
		
		
		
		
		
		
		
    });

    // Убедимся, что диапазоны корректны
    if (minPrice === Infinity) minPrice = 0;
    if (maxPrice === -Infinity) maxPrice = 10000000;
    if (minArea === Infinity) minArea = 0;
    if (maxArea === -Infinity) maxArea = 200;

    console.log("Извлеченные данные для фильтров:", { minPrice, maxPrice, minArea, maxArea, roomCounts: Array.from(roomCounts).filter(r => r !== 'undefined').sort((a, b) => a - b) });

    
	
	
	
	
	
	    // --- Создание HTML для чекбоксов комнат ---
    // Предполагая, что uniqueRooms уже определен как массив чисел, например, [1, 2, 3, 4]
    let roomCheckboxesHTML = '';
    const uniqueRooms = Array.from(roomCounts).filter(r => r !== 'undefined' && typeof r === 'number').sort((a, b) => a - b);
    
    uniqueRooms.forEach((room, index) => {
        const displayRoom = room >= 4 ? `${room}+` : `${room}`;
        const labelEnding = room >= 4 ? ' и более' : (room == 1 ? 'ная' : 'ные');
        // Добавляем атрибут checked к первому чекбоксу
        //const checkedAttr = (index === 0) ? ' checked' : '';
        const checkedAttr = '';
        roomCheckboxesHTML += `
            <div data-v-629e44ba="" class="e-checkbox-btn">
                <input data-v-629e44ba="" type="checkbox" name="rooms" id="type${room}" value="${room}"${checkedAttr}>
                <label data-v-629e44ba="" for="type${room}">${displayRoom}-комнат${labelEnding}</label>
            </div>
        `;
    });

    // Обновленный filterHTML с классами для стилизации
    const filterHTML = `
      <div data-v-629e44ba="" class="d-flex align-center flex-wrap align-center-inner filter-container" style="justify-content: center; width: 100%; padding: 22px; background-color: #f9f9f9; border-bottom: 1px solid #eee; box-sizing: border-box;">
        <div data-v-629e44ba="" class="ml-10">
          <div data-v-629e44ba="" class="text-body-2 has-opacity-65 mb-2 red-color-domOtel">Кол-во комнат</div>
          <div data-v-629e44ba="" class="e-checkboxes-group py-2">
            ${roomCheckboxesHTML}
          </div>
        </div>

        <div data-v-629e44ba="" class="mr-20 pr-10 pb-8">
          <div data-v-629e44ba="" class="text-body-2 has-opacity-65 red-color-domOtel">Стоимость, ₽</div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <!-- Добавлен класс filter-slider -->
            <input type="range" id="price-slider-min" min="${minPrice}" max="${maxPrice}" value="${minPrice}" style="flex: 1;" class="filter-slider">
            <span id="price-min-value">${minPrice.toLocaleString('ru-RU')}</span>
            <span>-</span>
            <!-- Добавлен класс filter-slider -->
            <input type="range" id="price-slider-max" min="${minPrice}" max="${maxPrice}" value="${maxPrice}" style="flex: 1;" class="filter-slider">
            <span id="price-max-value">${maxPrice.toLocaleString('ru-RU')}</span>
          </div>
        </div>

        <div data-v-629e44ba="" class="pb-8 mr-10">
          <div data-v-629e44ba="" class="text-body-2 has-opacity-65 red-color-domOtel">Площадь, м²</div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <!-- Добавлен класс filter-slider -->
            <input type="range" id="area-slider-min" min="${Math.floor(minArea)}" max="${Math.ceil(maxArea)}" value="${Math.floor(minArea)}" style="flex: 1;" class="filter-slider">
            <span id="area-min-value">${Math.floor(minArea)}</span>
            <span>-</span>
            <!-- Добавлен класс filter-slider -->
            <input type="range" id="area-slider-max" min="${Math.floor(minArea)}" max="${Math.ceil(maxArea)}" value="${Math.ceil(maxArea)}" style="flex: 1;" class="filter-slider">
            <span id="area-max-value">${Math.ceil(maxArea)}</span>
          </div>
        </div>

        <!-- Добавлен класс filter-clear-link -->
        <a data-v-629e44ba="" href="#" id="clear-filters" class="text-body-2 red-color-domOtel filter-clear-link" style="align-self: flex-end; margin-bottom: 8px; white-space: nowrap;">очистить</a>
      </div>
    `;
	
	
	
	
	
	
	
	

 // 5. Найти элемент, ПОСЛЕ которого нужно вставить фильтры
const targetElement = document.querySelector('.flats-block__content');

if (targetElement) {
  // 6. Вставить фильтры ПОСЛЕ элемента .flats-block__content
  targetElement.insertAdjacentHTML('afterend', filterHTML);
  //console.log("Фильтры вставлены после .flats-block__content");
} else {
  console.error('Элемент .flats-block__content не найден. Фильтры не вставлены.');
  // Альтернатива: вставить в начало cardsContainer, если основной элемент не найден
  // cardsContainer.insertAdjacentHTML('afterbegin', filterHTML);
  // console.log("Фильтры вставлены в начало cardsContainer как запасной вариант");
  return; // Прерываем выполнение, если нет места для вставки
}


// 7. Найти вставленный контейнер фильтров
// Так как мы вставили *после* .flats-block__content, фильтры теперь являются следующим соседом (nextElementSibling)
let filterContainer = null;
if (targetElement && targetElement.nextElementSibling && targetElement.nextElementSibling.classList.contains('d-flex')) {
    filterContainer = targetElement.nextElementSibling;
} else {
    // Альтернативный поиск, если предыдущий не сработал
    filterContainer = document.querySelector('.d-flex.align-center.flex-wrap'); // Или другой уникальный селектор из вашего filterHTML
}

// Или, если filterHTML обернут в один корневой div, можно искать его напрямую:
// filterContainer = document.querySelector('[data-v-629e44ba].d-flex.align-center-inner');

if (!filterContainer) {
    console.error("Вставленный контейнер фильтров не найден");
    return;
}
//console.log("Контейнер фильтров найден:", filterContainer);

    const roomCheckboxes = filterContainer.querySelectorAll('input[name="rooms"]');
    const priceSliderMin = filterContainer.querySelector('#price-slider-min');
    const priceSliderMax = filterContainer.querySelector('#price-slider-max');
    const priceMinValue = filterContainer.querySelector('#price-min-value');
    const priceMaxValue = filterContainer.querySelector('#price-max-value');
    const areaSliderMin = filterContainer.querySelector('#area-slider-min');
    const areaSliderMax = filterContainer.querySelector('#area-slider-max');
    const areaMinValue = filterContainer.querySelector('#area-min-value');
    const areaMaxValue = filterContainer.querySelector('#area-max-value');
    const clearButton = filterContainer.querySelector('#clear-filters');

    // --- Функция для открытия аккордеона ---
    function openAccordion() {
        // Найти кнопку аккордеона "Показать все планировки" / "Скрыть все планировки"
        const accordionButton = document.querySelector('.accordion__title.button.j-accordion-title');
        if (accordionButton) {
            // Проверим, содержит ли кнопка текст "Показать все планировки"
            const buttonText = accordionButton.textContent.trim();
            if (buttonText.includes("Показать все")) {
                //console.log("Открываем аккордеон 'Показать все планировки'");
                accordionButton.click(); // Эмулируем клик
            } else {
                //console.log("Аккордеон уже открыт");
            }
        } else {
            console.warn("Кнопка аккордеона '.accordion__title.button.j-accordion-title' не найдена");
            // Попробуем альтернативный селектор
            const altAccordionButton = document.querySelector('.accordion__header.j-accordion-header');
            if (altAccordionButton) {
                altAccordionButton.click();
                //console.log("Клик выполнен по альтернативному заголовку аккордеона");
            } else {
                console.warn("Альтернативный заголовок аккордеона также не найден");
            }
        }
    }

    // --- Логика фильтрации ---
    let currentFilters = {
      rooms: [],
      price: { min: minPrice, max: maxPrice },
      area: { min: Math.floor(minArea), max: Math.ceil(maxArea) }
    };

    function applyFilters() {
      //console.log("Применение фильтров:", currentFilters);
      
      // --- Добавлено: Открытие аккордеона при применении фильтров ---
      openAccordion();
      
      const cards = cardsContainer.querySelectorAll('.flat-block-card');

      cards.forEach(card => {
        const cardRoomsStr = card.dataset.rooms;
        const cardPriceStr = card.dataset.price;
        const cardAreaStr = card.dataset.area;

        // Если данные не были извлечены, пропускаем фильтрацию для этой карточки
        if (cardRoomsStr === undefined || cardPriceStr === undefined || cardAreaStr === undefined) {
             card.style.display = ''; // Показываем, если данные не полные
             // Убираем любые стили анимации/прозрачности, которые могут быть
             card.style.opacity = '';
             card.style.transform = '';
             card.style.transition = '';
             return;
        }


			 card.style.opacity = '';
             card.style.transform = '';
             card.style.transition = '';
			 
			 
        const cardRooms = parseInt(cardRoomsStr, 10);
        const cardPrice = parseFloat(cardPriceStr);
        const cardArea = parseFloat(cardAreaStr);

        let show = true;

        // Фильтр по комнатам
        if (currentFilters.rooms.length > 0) {
            let roomMatch = false;
            for (let filterRoom of currentFilters.rooms) {
                const filterRoomInt = parseInt(filterRoom, 10);
                if (cardRooms === filterRoomInt) {
                    roomMatch = true;
                    break;
                }
                if (filterRoomInt === 4 && cardRooms >= 4) {
                     roomMatch = true;
                     break;
                }
            }
            if (!roomMatch) {
                 show = false;
            }
        }

        // Фильтр по цене
        if (!isNaN(cardPrice) && (cardPrice < currentFilters.price.min || cardPrice > currentFilters.price.max)) {
            show = false;
        }

        // Фильтр по площади
        if (!isNaN(cardArea) && (cardArea < currentFilters.area.min || cardArea > currentFilters.area.max)) {
            show = false;
        }

        // --- Изменено: Простое скрытие/показ без анимации ---
        // Вместо изменения opacity или transform, просто меняем display
        if (show) {
            card.style.display = ''; // Показываем (возвращаем к дефолтному display из CSS)
            // card.style.display = 'block'; // Или 'flex', если это требуется вашим стилям
        } else {
            card.style.display = 'none'; // Скрываем
        }
        
        // Убираем любые стили анимации/прозрачности, которые могут быть у карточки
        // Это важно, если карточки изначально имеют какие-то стили анимации
        card.style.opacity = '';
        card.style.transform = '';
        card.style.transition = '';
        // Если вы используете классы для анимации, их тоже нужно убрать
        // card.classList.remove('some-animation-class');
        
      });



      //saveFiltersToStorage();   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	  
	  
 // --- Добавлено: Пересчет высоты аккордеона после фильтрации ---
      // Найдем контейнер аккордеона, высоту которого нужно пересчитать
      // Ищем по классам, которые вы предоставили
      const accordionContentWrapper = document.querySelector('.accordion__content-wrapper.j-accordion-content-outer');

      if (accordionContentWrapper) {
        console.log("Найден контейнер аккордеона для пересчета высоты:", accordionContentWrapper);

        // Даем браузеру немного времени, чтобы применить изменения display
        // и пересчитать layout. requestAnimationFrame может быть лучше setTimeout(0)
        requestAnimationFrame(() => {
          try {
            // Найдем непосредственное содержимое аккордеона, высоту которого нужно измерить
            const accordionContent = accordionContentWrapper.querySelector('.accordion__content.j-accordion-content');
            if (accordionContent) {
              // Сбросим предыдущую фиксированную высоту, чтобы содержимое "распахнулось"
              accordionContentWrapper.style.height = 'auto';
              // Измеряем натуральную высоту содержимого
              const newHeight = accordionContent.offsetHeight;
              console.log("Новая рассчитанная высота содержимого аккордеона:", newHeight, "px");

              // Устанавливаем новую высоту
              accordionContentWrapper.style.height = newHeight + 'px';
            } else {
              console.warn("Содержимое аккордеона (.accordion__content.j-accordion-content) не найдено для измерения высоты.");
            }
          } catch (error) {
            console.error("Ошибка при пересчете высоты аккордеона:", error);
            // В случае ошибки, можно попробовать установить height: auto
            // accordionContentWrapper.style.height = 'auto';
          }
        });
      } else {
        console.warn("Контейнер аккордеона (.accordion__content-wrapper.j-accordion-content-outer) не найден для пересчета высоты.");
      }
 // --- Конец пересчета высоты ---
	  
	  
    }

    function saveFiltersToStorage() {
      try {
        localStorage.setItem('myPageFilters', JSON.stringify(currentFilters));
        //console.log("Фильтры сохранены в localStorage");
      } catch (e) {
        console.error('Ошибка при сохранении фильтров в localStorage:', e);
      }
    }

    function loadFiltersFromStorage() {
       try {
        const savedFilters = localStorage.getItem('myPageFilters');
        if (savedFilters) {
          const parsedFilters = JSON.parse(savedFilters);
          //console.log("Фильтры загружены из localStorage:", parsedFilters);
          currentFilters = parsedFilters;

          // Обновить UI фильтров
          roomCheckboxes.forEach(cb => {
            const cbValue = parseInt(cb.value, 10);
            // Проверяем, входит ли значение чекбокса в массив фильтров
            let isChecked = currentFilters.rooms.includes(cb.value);
            // Для "4+" также проверяем
            if (!isChecked && cbValue === 4) {
                 isChecked = currentFilters.rooms.some(r => parseInt(r, 10) >= 4);
            }
            cb.checked = isChecked;
          });

          if (priceSliderMin) priceSliderMin.value = currentFilters.price.min;
          if (priceSliderMax) priceSliderMax.value = currentFilters.price.max;
          if (priceMinValue) priceMinValue.textContent = currentFilters.price.min.toLocaleString('ru-RU');
          if (priceMaxValue) priceMaxValue.textContent = currentFilters.price.max.toLocaleString('ru-RU');

          if (areaSliderMin) areaSliderMin.value = currentFilters.area.min;
          if (areaSliderMax) areaSliderMax.value = currentFilters.area.max;
          if (areaMinValue) areaMinValue.textContent = currentFilters.area.min;
          if (areaMaxValue) areaMaxValue.textContent = currentFilters.area.max;

          applyFilters(); // Применяем загруженные фильтры, что также откроет аккордеон
        } else {
            console.log("Сохраненные фильтры не найдены");
            // Применяем фильтры по умолчанию (все показаны)
            applyFilters();
        }
      } catch (e) {
        console.error('Ошибка при загрузке фильтров из localStorage:', e);
        applyFilters(); // Применяем фильтры по умолчанию при ошибке
      }
    }

    // --- Назначение обработчиков событий ---

     const updateCheckboxVisualState = (cb) => {
              const label = cb.nextElementSibling; // Предполагаем, что label идет сразу после input
              if (label && label.tagName === 'LABEL') {
                  if (cb.checked) {
                      // Добавляем класс или меняем стиль для выбранного состояния
                      label.classList.add('checkbox-label--selected');
                      label.style.backgroundColor = '#e3f2fd'; // Светло-голубой фон
                      label.style.borderColor = '#1976d2'; // Синяя рамка
                      // Можно также изменить цвет текста
                      // label.style.color = '#1976d2';
                  } else {
                      // Убираем класс или возвращаем стиль для не выбранного состояния
                      label.classList.remove('checkbox-label--selected');
                      label.style.backgroundColor = ''; // Возвращаем к дефолтному
                      label.style.borderColor = ''; // Возвращаем к дефолтному
                      // label.style.color = '';
                  }
              }
          };


    if (roomCheckboxes.length > 0) {
        roomCheckboxes.forEach(checkbox => {
          // Добавим функцию для обновления визуального состояния
      
          // Обновляем визуальное состояние для уже отмеченных чекбоксов (например, первого)
          updateCheckboxVisualState(checkbox);

          checkbox.addEventListener('change', function () {
            console.log(`Чекбокс комнат ${this.value} ${this.checked ? 'включен' : 'выключен'}`);
            const roomValue = this.value;
            const roomValueInt = parseInt(roomValue, 10);

            if (this.checked) {
                if (roomValueInt === 4) {
                    currentFilters.rooms = currentFilters.rooms.filter(r => parseInt(r, 10) < 4);
                    if (!currentFilters.rooms.includes('4')) {
                         currentFilters.rooms.push('4');
                    }
                } else {
                     if (!currentFilters.rooms.includes(roomValue)) {
                        currentFilters.rooms.push(roomValue);
                     }
                }
            } else {
                 currentFilters.rooms = currentFilters.rooms.filter(r => r !== roomValue);
            }
            console.log("Текущие фильтры комнат:", currentFilters.rooms);
            
            // --- Обновляем визуальное состояние для ВСЕХ чекбоксов комнат ---
            // Это нужно для корректного отображения, если логика фильтрации влияет на другие чекбоксы
            roomCheckboxes.forEach(cb => updateCheckboxVisualState(cb));
            
            applyFilters();
          });
        });
    } else {
        console.warn("Чекбоксы комнат не найдены в DOM");
    }

    if (priceSliderMin && priceSliderMax) {
        const updatePriceUI = () => {
             if (priceMinValue) priceMinValue.textContent = parseInt(priceSliderMin.value, 10).toLocaleString('ru-RU');
             if (priceMaxValue) priceMaxValue.textContent = parseInt(priceSliderMax.value, 10).toLocaleString('ru-RU');
        };

        priceSliderMin.addEventListener('input', function() {
            let value = parseInt(this.value, 10);
            const maxVal = parseInt(priceSliderMax.value, 10);
            if (value > maxVal) {
                this.value = maxVal;
                value = maxVal;
            }
            currentFilters.price.min = value;
            updatePriceUI();
        });
        priceSliderMin.addEventListener('change', applyFilters);

        priceSliderMax.addEventListener('input', function() {
            let value = parseInt(this.value, 10);
            const minVal = parseInt(priceSliderMin.value, 10);
            if (value < minVal) {
                this.value = minVal;
                value = minVal;
            }
            currentFilters.price.max = value;
            updatePriceUI();
        });
        priceSliderMax.addEventListener('change', applyFilters);
    } else {
        console.warn("Слайдеры цены не найдены в DOM");
    }

    if (areaSliderMin && areaSliderMax) {
         const updateAreaUI = () => {
             if (areaMinValue) areaMinValue.textContent = parseInt(areaSliderMin.value, 10);
             if (areaMaxValue) areaMaxValue.textContent = parseInt(areaSliderMax.value, 10);
        };

        areaSliderMin.addEventListener('input', function() {
            let value = parseInt(this.value, 10);
            const maxVal = parseInt(areaSliderMax.value, 10);
            if (value > maxVal) {
                this.value = maxVal;
                value = maxVal;
            }
            currentFilters.area.min = value;
            updateAreaUI();
        });
        areaSliderMin.addEventListener('change', applyFilters);

        areaSliderMax.addEventListener('input', function() {
             let value = parseInt(this.value, 10);
            const minVal = parseInt(areaSliderMin.value, 10);
            if (value < minVal) {
                this.value = minVal;
                value = minVal;
            }
            currentFilters.area.max = value;
            updateAreaUI();
        });
        areaSliderMax.addEventListener('change', applyFilters);
    } else {
        console.warn("Слайдеры площади не найдены в DOM");
    }

   
   
   if (clearButton) {
    clearButton.addEventListener('click', function (e) {
      e.preventDefault();
      console.log("Очистка фильтров");

      // Сброс к значениям по умолчанию (диапазоны от анализа карточек)
      currentFilters = {
        rooms: [],
        price: { min: minPrice, max: maxPrice },
        area: { min: Math.floor(minArea), max: Math.ceil(maxArea) }
      };

      // --- Сброс чекбоксов ---
      if (roomCheckboxes.length > 0) {
          roomCheckboxes.forEach(cb => {
              cb.checked = false;
              // --- Добавлено: Обновление визуального состояния ---
              // Используем ту же функцию, что и в обработчике change
              updateCheckboxVisualState(cb);
              // Или можно напрямую:
              // const label = cb.nextElementSibling;
              // if (label && label.tagName === 'LABEL') {
              //     label.classList.remove('checkbox-label--selected');
              //     label.style.backgroundColor = '';
              //     label.style.borderColor = '';
              // }
          });
      }
      // --- Конец сброса чекбоксов ---

      if (priceSliderMin) priceSliderMin.value = currentFilters.price.min;
      if (priceSliderMax) priceSliderMax.value = currentFilters.price.max;
      if (priceMinValue) priceMinValue.textContent = currentFilters.price.min.toLocaleString('ru-RU');
      if (priceMaxValue) priceMaxValue.textContent = currentFilters.price.max.toLocaleString('ru-RU');
      if (areaSliderMin) areaSliderMin.value = currentFilters.area.min;
      if (areaSliderMax) areaSliderMax.value = currentFilters.area.max;
      if (areaMinValue) areaMinValue.textContent = currentFilters.area.min;
      if (areaMaxValue) areaMaxValue.textContent = currentFilters.area.max;

      applyFilters();
    });
} else {
    console.warn("Кнопка 'Очистить' не найдена в DOM");
}



    // --- Инициализация ---
    loadFiltersFromStorage();
    //console.log("Инициализация фильтров завершена");

  }); // Конец DOMContentLoaded
</script>

<style>
/* Убедимся, что стили фильтров применяются */
.d-flex {
  display: flex !important;
}
.align-center {
  align-items: center !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.ml-10 {
  margin-left: 10px !important;
}
.mr-20 {
  margin-right: 20px !important;
}
.pr-10 {
  padding-right: 10px !important;
}
.pb-8 {
  padding-bottom: 8px !important;
}
.mr-10 {
  margin-right: 10px !important;
}
.py-2 {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}
.mb-2 {
  margin-bottom: 2px !important;
}
.text-body-2 {
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
}
.has-opacity-65 {
  opacity: 0.65 !important;
}
.red-color-domOtel {
  color: #d32f2f !important; /* Пример цвета, замените на ваш */
}
.e-checkboxes-group {
  display: flex;
  flex-direction: column;
}
.e-checkbox-btn {
  margin-bottom: 5px;
}
.e-checkbox-btn input[type="checkbox"] {
  margin-right: 5px;
}
.align-center-inner {
    align-items: flex-start; /* Выравнивание по верхнему краю внутри флекс-контейнера */
}
/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
    align-items: stretch !important;
  }
  .ml-10, .mr-20, .pr-10, .pb-8, .mr-10 {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 16px !important;
  }
  .e-checkboxes-group {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
  .e-checkbox-btn {
    margin-bottom: 0;
    flex: 1 1 auto;
  }
}
</style>