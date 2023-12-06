const imagesPath = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', ]

const imagesContainer = document.querySelector('.container_images');

function imagesRandom () {
    for (let i = 0; i < imagesPath.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', `images/${imagesPath[Math.floor(Math.random() * imagesPath.length)]}`);
        imagesContainer.append(imageElement);
    }
}

imagesRandom();