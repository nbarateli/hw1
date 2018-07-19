function createAccordian(accordianElem) {
    accordianElem = $(accordianElem)[0];
    accordianElem.nextSibling.nextSibling.classList.add('hidden');
    accordianElem.addEventListener('click', e => {
        e.preventDefault();
        e.target.nextSibling.nextSibling.classList.toggle('hidden');
    })
}

function ready() {
    let accordions = document.getElementsByClassName('accordian');
    for (let i = 0; i < accordions.length; i++) {
        createAccordian(accordions[i]);
    }
}

document.addEventListener('DOMContentLoaded', ready, false);
