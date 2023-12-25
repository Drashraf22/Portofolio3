let bar=document.getElementById("bar");
let navUl=document.getElementById("navUl");
let paraText=document.getElementById("paraText");
let btns=document.querySelectorAll('.about-btns a');
let contents=document.querySelectorAll('.content-text');
let portBtns=document.querySelectorAll('.port-btns a');
let portContents=document.querySelectorAll('.contentOne');

bar.onclick=function(){
    navUl.classList.toggle("active");
    bar.classList.toggle("fa-times");
}
window.onscroll=function(){
    navUl.classList.remove("active");
    bar.classList.remove("fa-times");
}

let typed = new Typed('#element', {
    strings: ['Frontend Developer',' designer', "youtuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/******************text rotate*********************/ 
paraText.innerHTML=paraText.innerHTML.split("").map((char,i) =>
`<b style= "transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

/******************scrollreveal*********************/ 

// ScrollReveal({
//     reset: true,
//     distance:'80px',
//     duration:1000,
//     delay:200
//     });

// ScrollReveal().reveal('.home-info', { origin:'top'});
// ScrollReveal().reveal('.about-img', { origin:'left'});



/******************About Btns*********************/ 

btns.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        contents.forEach(content => content.style.display='none');
        contents[index].style.display='block';
        btns.forEach((ele)=>ele.classList.remove("active"));
        btns[index].classList.add("active");
    })
})

/******************portfolio Btns*********************/ 
portBtns.forEach((btns, index)=>{
    btns.addEventListener('click', ()=>{
        portContents.forEach(content=>content.style.display='none');
        portContents[index].style.display='grid';
        portBtns.forEach(ele=>ele.classList.remove("active"));
        portBtns[index].classList.add("active")
    })
})