window.addEventListener('DOMContentLoaded', () => {
    // tooglenav
    function bottomline() {
        if (window.scrollY <= 627) {
            document.getElementById('branda').style.borderBottom = '2px solid white';
            document.getElementById('kurs').style.borderBottom = 'none';
            document.getElementById('infor').style.borderBottom = 'none';
            document.getElementById('kntk').style.borderBottom = 'none';
        } else if (window.scrollY > 627 && window.scrollY < 1400) {
            document.getElementById('kurs').style.borderBottom = '2px solid white';
            document.getElementById('branda').style.borderBottom = 'none';
            document.getElementById('kntk').style.borderBottom = 'none';
            document.getElementById('infor').style.borderBottom = 'none';
        } else if (window.scrollY > 1400 && window.scrollY < 2250) {
            document.getElementById('kurs').style.borderBottom = 'none';
            document.getElementById('kntk').style.borderBottom = 'none';
            document.getElementById('branda').style.borderBottm = 'none';
            document.getElementById('infor').style.borderBottom = '2px solid white';
        } else {
            document.getElementById('kurs').style.borderBottom = 'none';
            document.getElementById('infor').style.borderBottom = 'none';
            document.getElementById('branda').style.borderBottm = 'none';
            document.getElementById('kntk').style.borderBottom = '2px solid white';

        }
    }
    window.addEventListener('scroll', bottomline);
    bottomline();
    //aside
    document.getElementById('one').addEventListener('click', () => {
        document.getElementById('two').classList.remove('disabled');
        document.getElementById('pa').classList.remove('disabled');
        document.getElementById('one').classList.add('disabled');
        document.getElementById('p1').classList.add('disabled');
    });
    document.getElementById('two').addEventListener('click', () => {
        document.getElementById('two').classList.add('disabled');
        document.getElementById('pa').classList.add('disabled');
        document.getElementById('one').classList.remove('disabled');
        document.getElementById('p1').classList.remove('disabled');
    });

    var cb = document.getElementById('cb');
    var navigasi = document.getElementById('navigasi');

    cb.addEventListener('change', () => {
        if (cb.checked) {
            navigasi.classList.remove('slideout');
            navigasi.classList.add('slidein');

        } else {
            navigasi.classList.add('slideout');
            navigasi.classList.remove('slidein');
        }
    });

});