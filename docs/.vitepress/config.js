module.exports = {
    base:'/alt-container-guide/',
    publicDir: 'public',
    lang: 'ru-RU',
    title: 'Alt Linux',
    head: [
        ['link', 
            { 
                rel: 'icon',
                type: 'image/x-icon',
                href: '/alt-container-guide/favicon.ico' 
            }
        ]
    ],
    themeConfig: {
        sidebar: [
            { text: 'Вступление', link: '/intro/'},
            { 
                text: 'Основы работы с Podman',
                base: '/topics/topic-', 
                items: [
                    {text: 'Упражнение 1', link: '1'},
                    {text: 'Упражнение 2', link: '2'},
                    {text: 'Упражнение 3', link: '3'},
                    {text: 'Упражнение 4', link: '4'}
                ]
            },
        ],
        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
          },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        skipToContentLabel: 'Перейти к содержимому'
    }
}