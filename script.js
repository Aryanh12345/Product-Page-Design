let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let m3 = document.querySelector(".m3");
let s = document.querySelectorAll(".s");
let color = document.querySelectorAll(".color");
let img = document.querySelector("img");

m1.style.background = "green";

m1.addEventListener('click', () => {
    img.src = "image1.png";
    m1.style.background = "green";
    m3.style.background = "";
    m2.style.background = "";
})
m2.addEventListener('click', () => {
    img.src = "image2.png";
    m2.style.background = "green";
    m1.style.background = "";
    m3.style.background = "";
})
m3.addEventListener('click', () => {
    img.src = "image3.png";
    m3.style.background = "green";
    m1.style.background = "";
    m2.style.background = "";
})

s.forEach(e => {
    e.addEventListener('click', () => {
        s.forEach(x => {x.style.color = "grey"});
        e.style.color = "#000";
    });
})

color.forEach(e => {
    e.addEventListener('click', () => {
        color.forEach(x => {x.style.border = "none"});
        e.style.border = "2px solid rgb(41, 186, 248)";
    });
})