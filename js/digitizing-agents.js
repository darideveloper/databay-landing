

document.addEventListener('DOMContentLoaded', function () {
    let myFooter = document.getElementById('myFooter');
    myFooter.style.width = window.innerWidth + 'px';
});

window.addEventListener('resize', function () {
    let myFooter = document.getElementById('myFooter');
    myFooter.style.width = window.innerWidth + 'px';
});
