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
            menu.style.setProperty('max-height', menu.scrollHeight + 'px');
        } else {
            menu.classList.remove('catalog-show');
            if(burger) burger.classList.remove('open');
            menu.style.setProperty('max-height', 0);
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


export default openCatalogMenu;