const changeFixedTop = () => {
     const fixed = document.querySelector('.js--fixed-cloe');

    if (!fixed) return;

    const height = document.documentElement.clientHeight / 2;

    document.addEventListener('scroll', function() {

        let scl = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scl > height) {
            fixed.classList.add('show');
        } else {
            fixed.classList.remove('show');
        }
    })
}

export default changeFixedTop;