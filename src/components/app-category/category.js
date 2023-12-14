const showAccordion = () => {

    let wrapper = document.querySelectorAll(".js--accordion");

    if(wrapper.length === 0) return;

    wrapper.forEach(el => {
        const wrap = el.querySelectorAll(".js--accordion-wrap");

        if(wrap.length === 0) return;

        wrap.forEach(elem => {
            let buttons = elem.querySelectorAll(".js--accordion-button");
            let content = elem.querySelector(".js--accordion-content");
            const ob = content.querySelector('div');

            if(buttons.length === 0 || !content) return;

            buttons.forEach((btn, index) => {
                btn.addEventListener("click", function() {
                    if(elem.classList.contains('open')) {
                        content.style.setProperty('max-height', '0px');
                        elem.classList.remove('open');

                    } else {
                        content.style.setProperty('max-height', content.scrollHeight + 'px');
                        elem.classList.add('open');
                    }
                });
            })

            const ro = new ResizeObserver(entries => {
                if(!content.classList.contains('active')) return;
                content.style.setProperty('max-height', content.scrollHeight + 'px');
            })

            if(ob) ro.observe(ob)
        })

    })
}

export  {showAccordion};