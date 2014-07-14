jquery.custom.placeholder
=========================
Плагин добавляет поддержку placeholder в старый браузерах и возможность визуального оформления в современных.

Применение
=========================
<div class="field">
    <input type="text" name="name" value="" plasholder="Введите ваше имя" />
</div>

Добавление поддержки placeholder в старых браузерах: $(selector).customPlaceholder();
Возможность визуального оформления в современных браузерах: $(selector).customPlaceholder(true);

По умолчанию стили наследуются от input этого же родителя. Для задания стилей, отличных от наследуемых элементу добавляется класс "custom_placeholder".
