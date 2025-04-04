function func() {
    document.getElementById('scream').removeAttribute('hidden');
    document.getElementById('audio').play();

    setInterval(() => {
        document.body.style.backgroundColor = 'white';
        setTimeout(() => {document.body.style.backgroundColor = 'black';}, 10);
    }, 10);
}