# alt-container-guide

Руководство по сборке и запуску контейнеров для дистрибутивов Альт

## Установка VitePress

1. Инициализируйте новый проект npm
```bash
npm init
```

2. Установите VitePress
```bash
npm install vitepress --save-dev
```

3. Добавьте скрипт запуска в package.json

```bash
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
    }
```

4. Создайте папку docs в корне вашего проекта. Это будет основная папка для вашей документации.

5. Внутри папки docs создайте файл index.md. Это будет главная страница вашей документации.

6. Запуск для проверки, что работает

```bash
npm run docs:dev
```