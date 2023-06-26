const changeBurger = () => {
    const burder = document.querySelectorAll('.js--burger');

    if (burder.length == 0) return;
  
    burder.forEach(elem => {
      elem.addEventListener('click', () => {
        if (!elem.classList.contains('open'))
          elem.classList.add('open');
        else
          elem.classList.remove('open');
      });
    })
}

export default changeBurger;