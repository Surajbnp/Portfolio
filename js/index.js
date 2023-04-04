
let scrolling = false;

window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
    scrolling = true;
});

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        // place the scroll handling logic here
        console.log('suraj')
    }
},2000);