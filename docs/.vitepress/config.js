const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story'}]

module.exports = {
    lang: 'ru-RU',
    title: 'Alt Linux container guide',
    description: 'Описание сайта.',
    logo: '/logo.png',
    themeConfig: {
        // параметры темы
        nav: [
            {text: 'Home', link: '/'},
            { text: 'About', link: '/about/'},
            { text: 'Contact', link: '/contact/'}
        ],
        sidebar: {
            '/about/': ourStorySidebar,
        },
    },
}