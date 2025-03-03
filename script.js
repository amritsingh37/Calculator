let inputvalue = document.getElementById("input-value");
let buttons = document.querySelectorAll("button");
let modeselector  = document.getElementById("mode");

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        if(e.target.id === "mode"){
            return;
        }
        if(e.target.innerHTML === "="){
            try{
            string = eval(string);
            inputvalue.value = string;
            }catch(error){
                inputvalue.value = "Error";
                string = "";
            }
        }else if(e.target.innerHTML === "AC"){
            string = "";
            inputvalue.value = string;
        }else if(e.target.innerHTML === "%"){
            if(string != ""){
            string = string + e.target.innerHTML;
            string = (parseFloat(string)/100).toString();
            inputvalue.value = string;
            }
        }else if(e.target.innerHTML === "+/-"){
            if(string.charAt(0) == "-"){
                string = string.substring(1);
            }else{
            string = "-" + string;
            }
            inputvalue.value = string;
        }
        else if(e.target.innerHTML === "Delete"){
            string = string.slice(0, -1);
            inputvalue.value = string;
        }else{
            string = string + e.target.innerHTML;
            inputvalue.value = string;
        }
    });
});

let currentmode = "light";

modeselector.addEventListener("click", () => {
    let childOne = document.querySelector(".child-one");
    let big = document.querySelector(".big");
    let body = document.body;
    if(currentmode === "light"){
        currentmode = "dark";
        document.body.style.backgroundColor = "#1e1e1e";
        big.style.backgroundColor = "#333";
        childOne.style.backgroundColor = "#000";
        childOne.style.color = "white";
        buttons.forEach(button => button.style.backgroundColor = "#555");
        modeselector.innerHTML = "LightMode";
        
    }else{
        currentmode = "light";
        document.body.style.backgroundColor = "#5e503f";
        body.style.backgroundColor = "#22333b";
        childOne.style.backgroundColor = "#f2f4f3";
        childOne.style.color = "#0a0908";
        buttons.forEach(button => button.style.backgroundColor = "#383838");
        modeselector.innerHTML = "DarkMode";
    }
});