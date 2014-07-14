jquery.custom.placeholder
=========================
Плагин добавляет поддержку [placeholder](http://htmlbook.ru/html/input/placeholder) в старый браузерах и возможность визуального оформления в современных.

Demo
-----------
Посмотреть jquery.custom.placeholder в действии можно на сайте [Lavita](http://lavita2.intensa-dev.ru/contacts/).

Применение
-----------
Добавление поддержки placeholder в старых браузерах:

    $(selector).customPlaceholder();


Возможность визуального оформления в современных браузерах:

    $(selector).customPlaceholder(true);


По умолчанию стили наследуются от input этого же родителя. Для задания стилей, отличных от наследуемых элементу добавляется класс `custom_placeholder`.
