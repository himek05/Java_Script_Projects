const light = document.querySelector('#bulb');
const body = document.body;

light.addEventListener('click', function(e) {
    e.target.classList.toggle('bulb-on');
    body.classList.toggle('light-on');
    body.classList.toggle('light-off');
});