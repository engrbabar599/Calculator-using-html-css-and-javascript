let button = document.querySelectorAll(".button");
let string = "" ;
Array.from(button).forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string;
        }
        
        else{

            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        
    })
})