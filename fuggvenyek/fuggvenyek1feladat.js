(function handleClick () {
    const buttons = document.querySelectorAll('button');
    const buttonsArray = Array.from(buttons);
    console.log(buttonsArray);
    for (let i = 0; i < buttons.length; i += 1 ) {
        buttons[i].addEventListener('click', () => {
            console.log('Clicked button: ', i);
        })
    }
})();