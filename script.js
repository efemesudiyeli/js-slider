var models = [
    {
        name: 'BMW i8',
        image: '/img/bmw-i8.jpg',
        description: 'BMW i8 electric car.',
        link: 'https://www.arabalar.com/0'
    },
    {
        name: 'Honda Civic',
        image: '/img/honda-civic.jpg',
        description: 'Honda Civic best car ever.',
        link: 'https://www.arabalar.com/1'
    },
    {
        name: 'Kia Picanto',
        image: '/img/kia-picanto.jpg',
        description: 'Kia Picanto best choice for city.',
        link: 'https://www.arabalar.com/2'
    },
    {
        name: 'Lexus SUV',
        image: '/img/lexus-suv.jpg',
        description: 'Lexus for luxury.',
        link: 'https://www.arabalar.com/3'
    },
    {
        name: 'Toyota Supra',
        image: '/img/toyota-supra.jpg',
        description: 'Supra for performance.',
        link: 'https://www.arabalar.com/4'
    },
];


var index = 0;
var sliderInterval;
var settings = {
    duration: '2000',
    random: false,
};

function displaySlide() {
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-text').textContent = models[index].description;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.readmore').setAttribute('href', models[index].link);
    console.log("Slide index = ", index);
}

function init(settings) {

    sliderInterval = setInterval(function () {
        var prev = index;
        if (settings.random == true) {

            do {

                index = Math.floor(Math.random() * models.length)

            } while (prev == index);

        } else {

            if (index != 4) {
                index++
            }

            else {
                index = 0;
            }
        }
        displaySlide();
    }, settings.duration)

}

// Slide Left

document.querySelector('#slide-left').addEventListener('click', () => {

    if (index != 0) {
        index--
    }

    else {
        index = models.length - 1;
    }

    displaySlide();
})

// Slide Right
document.querySelector('#slide-right').addEventListener('click', () => {

    if (index != 4) {
        index++
    }

    else {
        index = 0;
    }

    displaySlide();
})

document.querySelector('.slide-buttons').addEventListener('mouseover', () => {

    clearInterval(sliderInterval)

})

document.querySelector('.slide-buttons').addEventListener('mouseout', () => {

    init(settings);

})



displaySlide();
init(settings);

