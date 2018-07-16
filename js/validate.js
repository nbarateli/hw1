function insertAfter(newNode, referenceNode) {
    console.log(newNode)
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function validateField(fieldElem, infoMessage, validateFn) {
    let info = document.createElement('span');
    info.classList.toggle('hidden');
    info.classList.toggle('info');
    insertAfter(info, fieldElem);
    fieldElem.addEventListener('input', e => {
        if (e.target.value.length === 0) {
            info.classList.add('hidden')
            return
        }
        info.classList.remove('hidden')
        if (validateFn(e.target.value))
            info.innerText = "ok";
        else info.innerText = infoMessage
    })
};

function charInRange(number, start, end) {
    start = start.charCodeAt(0)
    number = number.charCodeAt(0)
    end = end.charCodeAt(0)

    return start <= number && number <= end;
}

$(document).ready(function () {
    validateField(document.getElementById('username'),
        "The username field must contain only alphabetical or numeric characters.", el => {
            let val = el.toLowerCase();
            for (let i = 0; i < val.length; i++)
                if (!charInRange(val[i], 'a', 'z') &&
                    !charInRange(val[i], '0', '9'))
                    return false;
            return true;
        })
    validateField(document.getElementById('password'),
        "The password field should be at least 8 characters long.", el => el.length >= 8)
    validateField(document.getElementById('email'),
        "The email address field should contain a @ character.", el => el.indexOf('@') > 0)

});
