const bx1 = document.getElementsByClassName("bx")[0];
const left = document.getElementById("left");
const right = document.getElementById("right");

left.addEventListener('click', () =>{
    bx1.scrollLeft += 100;
});

right.addEventListener('click', () =>{
    bx1.scrollLeft -= 100;
});

const scroll_watch = document.getElementsByClassName("scroll_watch");
const main_watch = document.getElementsByClassName("main_watch")[0];
const img = document.getElementsByClassName("img")[0];
const svg = document.getElementById("svg");
const span_number = document.getElementById("span_number");
const h6 = document.getElementsByTagName("h6")[0];

scroll_watch[0].addEventListener('click', () =>{
    main_watch.src = "img/watch1.png";
    svg.innerHTML = `<text x="0%" y="90%">Gen 5</text>`;
    h6.innerText = "$359.00";
    span_number.innerText = 1;
    setTimeout(() => {
        img.style.bottom = "-100px";
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px";
    }, 1000);
    setTimeout(() => {
        img.src = "img/img1.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px";
    }, 2300);
});

scroll_watch[1].addEventListener('click', () =>{
    main_watch.src = "img/watch2.1.png";
    svg.innerHTML = `<text x="0%" y="90%">Gen 6</text>`;
    h6.innerText = "$459.00";
    span_number.innerText = 2;
    setTimeout(() => {
        img.style.bottom = "-100px";
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px";
    }, 1000);
    setTimeout(() => {
        img.src = "img/img2.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px";
    }, 2300);
});

scroll_watch[2].addEventListener('click', () =>{
    main_watch.src = "img/watch3.png";
    svg.innerHTML = `<text x="0%" y="90%">Gen 8</text>`;
    h6.innerText = "$659.00";
    span_number.innerText = 3;
    setTimeout(() => {
        img.style.bottom = "-100px";
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px";
    }, 1000);
    setTimeout(() => {
        img.src = "img/img3.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px";
    }, 2300);
});


const cart = document.getElementById("cart");
const add_to_cart = document.getElementsByClassName("add_to_cart")[0];
a = 0;

cart.innerText = a;

add_to_cart.addEventListener('click', () =>{
    a += 1;
    cart.innerText = a;
})