//vars
const input = document.getElementById('myInput');
const but = document.querySelector('.addBtn');
const div = document.querySelector('.content');
const save = document.getElementById('save');


//functions
function newElement() {
    const p = document.createElement("p");
    const span = document.createElement("span");
    const inputValue = input.value;
    const t = document.createTextNode(inputValue);

    p.appendChild(t);
    span.append("Delete");
    p.appendChild(span);



    if (inputValue === '') {
        alert("You must write something!");
    } else {
        div.appendChild(p);
    }
    input.value = "";



    function deleteFromLocalStorage() {
        localStorage.removeItem('content');
    }

    span.addEventListener('click', function () {
        deleteFromLocalStorage();
        p.remove();
    });


}


    function saveToLocalStorage() {
        localStorage.setItem('content', div.innerHTML);
    }


    function getFromLocalStorage() {
        div.innerHTML = localStorage.getItem('content');
    }



//events

but.addEventListener('click', newElement);

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            newElement();
        }
    });

window.addEventListener('load', getFromLocalStorage);

save.addEventListener('click', saveToLocalStorage);