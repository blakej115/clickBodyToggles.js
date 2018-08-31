function clickBodyToggle(e, elem) {
    e.preventDefault();
    document.body.classList.toggle(elem + '-active');
}
function addBodyToggle(elem) {
    var elemA = document.querySelectorAll('a[href="#' + elem + '"]'),
        elemALength = elemA.length;

    for (var i = 0; i < elemALength; i += 1) {
        elemA[i].addEventListener('click', function(e) {
            clickBodyToggle(e, elem);
        });
    }
}