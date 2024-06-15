const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'rgb(112, 112, 255)';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'rgba(255, 248, 50, 0.926)';
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'rgb(129, 218, 129)';
        }
        if(e.target.id === 'brown'){
            body.style.backgroundColor = 'rgb(194, 149, 121)';
        }
    });
});