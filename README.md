1. Устанавливаем Create React App (в текущей папке, которая открыта в VSCode) npx create-react-app .

2. Создаём оптимизированный продакшн-билд npm run build

3. В package.json добавляем после 3ей строки "private" св-во "homepage" (перед "dependencies") со
   своими значениями ("homepage": "https://corund1976.github.io/goit-react-hw-07-phonebook",)
   "homepage": "https://myusername.github.io/my-app"

4. Добавляем 2 новых скрипта в package.json "scripts": { "predeploy": "npm run build", "deploy":
   "gh-pages -d build",

5. Добавляем пакет gh-pages для автоматического деплоя приложения npm install --save gh-pages или
   yarn add gh-pages

6. Копируем исходник (папку src) и Запускаем деплой npm run deploy

7. Устанавливаем React Redux для связи React с Redux npm i react-redux или yarn add react-redux

8. Устанавливаем Redux Toolkit (ранее назывался "Redux Starter Kit") npm install @reduxjs/toolkit
   или yarn add @reduxjs/toolkit

9. Устанавливаем axios npm i axios

10. Устанавливаем json-server npm i json-server

11. Добавляем 1 новый скрипт с настройками сервера в package.json "scripts": { "api-server":
    "json-server --port 4040 --delay 300 --watch db.json"

12. Запускаем json-сервер в отдельном окне терминала npm run api-server

13. В браузере переходим по ссылке для просмотра базы данных: http://localhost:4040/contacts

14. Запускаем проект локально npm start или yarn start
