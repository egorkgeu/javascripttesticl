import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'
import image from './assets/image.png'

export const model = [
    new TitleBlock('IT is beautiful', {
        tag: 'h1',
        styles:{
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#FFF',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles:{
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles:{
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
        'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus'
    ],{
        styles:{
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#FFF',
            'font-weight': 'bold'
        }
    }),
    new TextBlock('Данный сайт написан на чистом JavaScpript, главное его преимущество состоит в том, что повторяюище блоки можно легко вставить в сайт при помощи шаблнов, которые мы создали, пример справа. Вы сами можете попробовать поэксперементрировать: пишете какой-нибудь текст, а в поле стили пишете их в синтасисе css(Например, color: red;)', {
        styles:{
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
]
