# Тестовое задание **React Developer (Next.js)**

Для запуска проекта вам необходимо склонировать проект и ввести в терминале:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

Что было сделано:
- визуал по фигме [https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/тестовое?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1](https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1)
- должен быть адаптирован под мобильные устройства и планшеты
- наполнение контентом отзывов из html обернутого в json
- наполнение контентом товары по апи
    - показывать первую страницу сразу
- при нажатии на кнопку "купить", она должна меняться на кнопки + и - и поле для ввода кол-ва товара, значение поля должно быть 1, кнопки должны добавлять отбавлять товар, так же должна быть возможность вписать в поле для ввода любое кол-во.
- при изменении кол-ва какого-либо из товаров должна меняться информация в корзине (та что над полем с телефоном)
- маска в поле для телефона
- при нажатии кнопки "заказать" идет проверка того что телефон полностью введен
    - если всё хорошо - отправлять запрос на сервер
- после отправки запроса и получения ответа от сервера отобразить попап что всё успешно
