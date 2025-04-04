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
                href: '/favicon/favicon.ico' 
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
                    {text: 'Упражнение 3', link: '3'}
                ]
            },
        ],
        outline: { label: 'Содержание страницы' },
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
          },
    }
}