const DELAY = 500;

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


function createSlideshow(slideshowElem, duration) {
    let images = $(slideshowElem).find('img');
    images.each((i, e) => e.classList.add('hidden'));
    images[0].classList.remove('hidden');
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
