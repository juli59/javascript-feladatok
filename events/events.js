/*function clickHandler() {
    const element = document.querySelector('.txt');
    element.addEventListener('click', () => {
        element.innerHTML = 'clicked';
    })
}
clickHandler();*/

/*(function clickHandler(){
    const element = document.querySelector('.txt');
    element.addEventListener('click', () => {
        element.innerHTML = 'Clicked';
    }) 
}) ()*/

/*(function clickHandler() {
    const element = document.querySelector('.txt')
    element.addEventListener('click', () => {
        element.innerHTML = 'Clicked';
})
}) ()*/

// function clickHandler (){
//     const element = document.querySelector('.txt');
//     element.addEventListener('click', () => {
//         element.innerHTML = 'Clicked';
//     })
// }
// clickHandler ();

(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', (event) => {
            console.log(event.target.textContent);
            console.log('Clicked button', i);
        })
    }
})();

(function bubbling() {
    const divs = document.querySelectorAll('.first, .second, .third');
    for(let i = 0; i < divs.length; i+= 1) {
        divs[i].addEventListener('click', (event) => {
            console.log(event.target);
        })
    }
    
})()

































