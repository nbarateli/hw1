const DELAY = 700;

class Circle {

    constructor(images) {
        this.images = images;
        this.i = images.length - 1;
    }

    next() {
        this.i = (this.i + 1) % this.images.length;
        return this.images[this.i]
    }

}


var createSlideshow = function (slideshowElem, duration) {
    let images = slideshowElem.getElementsByTagName('img');
    for (let i = 1; i < images.length; i++) {
        images[i].classList.add('hidden')
    }
    let circle = new Circle(images);
    setTimeout(() => {
        setInterval(() => {
            circle.next().classList.toggle('hidden')
            circle.next().classList.toggle('hidden');

        }, DELAY)
    }, DELAY)
};

$(document).ready(function () {
    $('.slideshow').each(
        (i, e) => createSlideshow(e, DELAY)
    )
});
