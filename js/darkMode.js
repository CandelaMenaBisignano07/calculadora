const toggleDark= document.querySelector("label");
const spanDark=document.querySelector("span.slider");
const calculadora=document.querySelector(".calculadora");
const copyright=document.querySelector(".copyright")
const body=document.querySelector("body");

toggleDark.addEventListener("click",()=>{
    toggleDark.classList.toggle("active");
    spanDark.classList.toggle("active");
    botones.forEach((boton)=>{
        boton.classList.toggle("dark")
    })
    calculadora.classList.toggle("dark")
    body.classList.toggle("dark")
    copyright.classList.toggle("dark")
})
