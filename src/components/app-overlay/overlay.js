const showModal = () => {

    const btn = document.querySelectorAll('[data-show-modal]')

    if(btn.length == 0) return

    btn.forEach(elem => {
        let overlay = document.querySelector("." + elem.getAttribute('data-show-modal'))

        if(!overlay) return

        const close = overlay.querySelector('.js--overlay-close')
        let card_content = ''

        elem.addEventListener('click', function(e) {
            const margin = window.innerWidth - document.body.clientWidth;
            e.preventDefault()
            document.documentElement.style.overflowY = 'hidden';
            document.documentElement.style.paddingRight = margin + 'px';

            overlay.style.zIndex = 999
            elem.disabled = true
            setTimeout(() => {
                overlay.classList.add('overlay-show')
                elem.disabled = false
            }, 100)
        });
        if(close) {
            close.addEventListener('click', function(e) {

                e.preventDefault()
                clickClose()
            })
        }

        overlay.addEventListener('click', function(e) {
            if (e.target != overlay) return
            clickClose()
        })

        const clickClose = () => {
            if(!overlay.querySelector('.overlay-wrap')) return
            if (getComputedStyle(overlay.querySelector('.overlay-wrap')).marginRight != '0px') return
            overlay.classList.remove('overlay-show')
            setTimeout(() => {
                overlay.style.zIndex = -1
                document.documentElement.style.overflowY = 'auto'
                document.documentElement.style.paddingRight = '0';
            }, 300)
        }
    })
}

export default showModal;

