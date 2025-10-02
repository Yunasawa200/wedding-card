document.querySelector('.container').addEventListener('click', function () {
    this.classList.toggle('open');
});


window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelector('.container').classList.add('open');
    }, 0);
});