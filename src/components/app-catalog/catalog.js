const openCatalogMenu = () => {
    const wrap = document.querySelector('.js--catalog');

    if(!wrap) return;

    const btn = document.querySelector('.js--catalog .js--catalog-btn');
    const menu = document.querySelector('.js--catalog-menu');

    if(!btn || !menu) return;

    const burger = btn.querySelector('.burger');

    let heightStart = menu.offsetHeight;
    menu.style.setProperty('max-height', 0);

    btn.addEventListener('click', () => {
        if (!menu.classList.contains('catalog-show')) {
            menu.classList.add('catalog-show');
            if(burger) burger.classList.add('open');
            //menu.style.setProperty('max-height', menu.scrollHeight + 'px');
            menu.style.setProperty('max-height', '100vh');

            if(window.innerWidth < 992) {
                document.documentElement.style.overflowY = 'hidden';
            }
        } else {
            menu.classList.remove('catalog-show');
            if(burger) burger.classList.remove('open');
            menu.style.setProperty('max-height', 0);
            document.documentElement.style.overflowY = 'auto'
        }
    });

    document.addEventListener('click', function (event) {

        if (!menu.classList.contains('catalog-show')) return;
        event.stopPropagation();

        if (event.target == wrap) return;
        let a = 0;

        const find = (node) => {
            while (node) {
                if (node.classList.contains('js--catalog')) {
                    a = 1;
                    return node;
                } else {
                    node = node.parentElement;
                }
            }
            return null;
        }

        find(event.target);

        if (a == 1) return;

        menu.classList.remove('catalog-show');
        if(burger) burger.classList.remove('open');
        menu.style.setProperty('max-height', 0);
    });
}

const openCatalogSubMenu = () => {
    const wrap = document.querySelectorAll('.js--openSubMenu');

    if(wrap.length == 0) return;

    wrap.forEach(elem => {
        const btn = elem.querySelector('.js--openSubMenu-btn');
        const content = elem.querySelector('.js--openSubMenu-content');
        const menuMobile = content.closest('.js--openMobileMenu-content');

        if(!btn || !content) return;

        const plus = elem.querySelector('.js--openSubMenu-plus');
        const minus = elem.querySelector('.js--openSubMenu-minus');

        content.style.setProperty('max-height', 0);

        btn.addEventListener('click', () => {
            if(window.innerWidth > 991) return;
            if (!content.classList.contains('show')) {
                content.classList.add('show');
                content.style.setProperty('max-height', content.scrollHeight + 'px');
                menuMobile.style.setProperty('max-height', menuMobile.scrollHeight + content.scrollHeight + 'px');
                plus.classList.add('d-none');
                minus.classList.remove('d-none');

            } else {
                content.classList.remove('show');
                content.style.setProperty('max-height', 0);
                plus.classList.remove('d-none');
                minus.classList.add('d-none');
            }
        });
    });
};

const openCatalogSecondMenu = () => {

    const wrap = document.querySelectorAll('.js--openMobileMenu');

    if(wrap.length == 0) return;

    if(window.innerWidth < 992) {
        wrap.forEach(elem => {
            elem.querySelector('.catalog-menu__item').classList.remove('active')
        })
    }

    wrap.forEach((elem, index) => {
        const btn = elem.querySelector('.js--openMobileMenu-item');
        const content = elem.querySelector('.js--openMobileMenu-content');
        const active = elem.querySelector('.catalog-menu__item');
        const menu_desctop = document.querySelectorAll('.js--catalog-menu-detail');

        if(!btn || !content) return;

        content.style.setProperty('max-height', 0);

        btn.addEventListener('click', () => {

            if(window.innerWidth > 991) {
                menu_desctop.forEach(elems => {
                    elems.classList.add('d-none');
                    elems.classList.remove('d-flex');
                })
                menu_desctop[index].classList.remove('d-none');
                menu_desctop[index].classList.add('d-flex');

                document.querySelectorAll('.js--openMobileMenu-item .catalog-menu__item').forEach(el => {
                    el.classList.remove('active');
                })
                btn.querySelector('.catalog-menu__item').classList.add('active');
                return;
            }

            if (!content.classList.contains('show')) {
                wrap.forEach(elems => {
                    elems.querySelector('.js--openMobileMenu-content').classList.remove('show');
                    elems.querySelector('.js--openMobileMenu-content').style.setProperty('max-height', 0);
                    elems.querySelector('.catalog-menu__item').classList.remove('active');
                });
                content.classList.add('show');
                content.style.setProperty('max-height', content.scrollHeight + 'px');
                active.classList.add('active');

            } else {
                content.classList.remove('show');
                content.style.setProperty('max-height', 0);
                active.classList.remove('active');
            }
        });
    });
};

export {
    openCatalogMenu,
    openCatalogSubMenu,
    openCatalogSecondMenu
}