const botones=document.querySelectorAll(".boton");
const input=document.querySelector(".valor");
const operadores=["+","-","/","*","=","."]
console.log(input)


botones.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        console.log(e.target.value)
        let valor=e.target.value

        if(valor == "c"){
            input.innerHTML=""
        }else if(valor === "="){
            input.innerHTML=eval(input.innerHTML);
            if(eval(input.innerHTML)=== undefined){
                input.innerHTML="";
            }
        }else if((input.innerHTML === "")&&(operadores.includes(e.target.value))){
            input.innerHTML=""
        }else{
            input.innerHTML+=e.target.value
        }
    
})
})
