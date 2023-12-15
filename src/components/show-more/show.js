const showMore = () => {
    const wrapper = document.querySelectorAll('.js--show-more');

    if(wrapper.length === 0) return;

    wrapper.forEach(wrap => {
        const btn = wrap.querySelector('.js--show-more--btn');
        const content = wrap.querySelector('.js--show-more--content');
        let row = 3;
        if(wrap.hasAttribute('data-show-content-row')) row = wrap.getAttribute('data-show-content-row');

        let heightStart = content.querySelector('a').scrollHeight * row;

        const ob = content.querySelector('div');

        if(!btn || !content) return;

        content.style.setProperty('max-height', heightStart + 'px');

        if(heightStart >= content.scrollHeight) {
            btn.classList.add('d-none');
        } else {
            btn.classList.remove('d-none');
        }

        btn.addEventListener('click', () => {


            let textShow = '';
            let textHidden = '';
            if(btn.hasAttribute('data-more-show')) textShow = btn.getAttribute('data-more-show');
            if(btn.hasAttribute('data-more-hidden')) textHidden = btn.getAttribute('data-more-hidden');
            if(wrap.classList.contains('active')) {
                content.style.setProperty('max-height', heightStart + 'px');
                if(textShow) btn.innerHTML = textShow;

                setTimeout(() => {
                    wrap.classList.remove('active');
                }, 0);

            } else {
                content.style.setProperty('max-height', content.scrollHeight + 'px');
                if(textHidden) btn.innerHTML = textHidden;
                setTimeout(() => {
                    wrap.classList.add('active');
                }, 0);
            }
        })

        const ro = new ResizeObserver(entries => {
            if(heightStart >= content.scrollHeight) {
                btn.classList.add('d-none');
            } else {
                btn.classList.remove('d-none');
            }
            if(!wrap.classList.contains('active')) return;
            content.style.setProperty('max-height', content.scrollHeight + 'px');


        })

        if(ob) ro.observe(ob)

    })
};

export {
    showMore
}