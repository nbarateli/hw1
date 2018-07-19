const DELAY = 2700;

class Circle {
    i;

    constructor(images) {
        this.images = images;
        this.i = images.length - 1;
    }

    next() {
        this.i = (this.i + 1) % this.images.length;
        return this.images[this.i]
    }

}


function createSlideshow(slideshowElem, duration) {
    let images = slideshowElem.getElementsByTagName('img');
    for (let i = 1; i < images.length; i++) {
        images[i].classList.add('hidden')
    }
    let circle = new Circle(images);
    setTimeout(() => {
        setInterval(() => {
            circle.next().classList.add('hidden');
            circle.next().classList.remove('hidden');

        }, duration)
    }, duration)
}

$(document).ready(function () {
    $('.slideshow').each(
        (i, e) => createSlideshow(e, DELAY)
    )
});
