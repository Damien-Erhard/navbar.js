let menu = document.querySelector('.burger');
let menu_deux = document.querySelector('.menu_deux');
let open_menu = document.querySelector('.menu_two');

menu.addEventListener('click', function() {
    if (menu_deux.style.display = 'none') {
        open_menu.style.display = 'block';
        menu_deux.style.display = 'block';
        // console.log('test');
    } else {
        return false;
    }
});


menu_deux.addEventListener('click', function() {
    open_menu.style.display = 'none';
    if (menu_deux.style.display = 'block') {
        menu_deux.style.display = 'none';
        // console.log('test')

    } else {
        return false;
    }
});
