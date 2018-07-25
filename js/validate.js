function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function validateField(fieldElem, infoMessage, validateFn) {
    fieldElem = $(fieldElem)[0];
    let info = document.createElement('span');
    info.classList.add('hidden');
    info.classList.add('info');
    insertAfter(info, fieldElem);

    fieldElem.addEventListener('input',
        e => {
            if (e.target.value.length === 0) {
                info.classList.add('hidden');
                return
            }
            info.classList.remove('hidden');
            if (validateFn(e.target.value)) {
                info.innerText = "ok";
            }
            else {
                info.innerText = infoMessage
            }
        }
    )
}

function charInRange(number, start, end) {
    start = start.charCodeAt(0);
    number = number.charCodeAt(0);
    end = end.charCodeAt(0);

    return start <= number && number <= end;
}

$(document).ready(function () {
    validateField(document.getElementById('username'),
        "The username field must contain only alphabetical or numeric characters.", el =>
            new RegExp(/^[a-z0-9]*$/i).test(el.toLowerCase())
    )
    ;
    validateField(document.getElementById('password'),
        "The password field should be at least 8 characters long and not contain any whitespaces.", el =>

            // new RegExp(/^(?!.*\s{2,}).{8,}$/)
            new RegExp(/^([^\s]){8,}$/i).test(el)
    );

    validateField(document.getElementById('email'),
        "The email address field should contain a @ character and domain address.", el =>
            new RegExp(/^[^@].*@{1}[^@]+\.[^@]+([a-z0-9])+$/i).test(el))

});
