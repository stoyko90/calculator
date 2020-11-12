
        function add(a, b) {
        return a + b;
        }
        function subtract(a, b) {
            return a - b;
        }
        function multiply(a, b) {
            return a * b;
        }
        function divide(a, b) {
            if (b === 0) {
                return "Can't divide by 0!"
            }
            else {
                return a / b;
            }
        }
        function operate(operator, a, b) {
            return operator(a, b);
        }

        const display = document.getElementById("dis");
        
        let temp1 = "";
        let temp2 = "";
        let val = "";
        let sign = "";
        let result;

        function func() { 
            if (this.value === "Clear") {
                temp1 = "";
                temp2 = "";
                val = "";
                sign = "";
                result = "";
                display.value = "";
                document.getElementById("dot").disabled = false;
            }  

            if (this.value === "BackSpace") {

                val = val.substr(0, val.length - 1);
                display.value = val;

            }

            if (this.value === "%") {
                val /= 100;
                display.value = val;
            } 

            if (this.value === "x^2") {
                val *= val;
                display.value = val;
            }

            if (this.value === "sqrt") {
                val = Math.sqrt(val);
                display.value = val;
            } 

            if (this.className === "num") {
                
                val += this.value;
                display.value = val; 
                if (val.includes(".")) {
                    document.getElementById("dot").disabled = true;
                }
                else {
                    document.getElementById("dot").disabled = false;
                }
            }                                  
            
            if (this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/" || this.value === "=") {                
                 
                if (temp1 === "") {
                    sign = this.value;
                    temp1 = Number(val);
                    val = "";                    
                }
                else {
                    temp2 = Number(val);
                    display.value = "";
                    if (sign === "+") {
                        result = operate(add, temp1, temp2);
                    }
                    if (sign === "-") {
                        result = operate(subtract, temp1, temp2);
                    }
                    if (sign === "*") {
                        result = operate(multiply, temp1, temp2);
                    }
                    if (sign === "/") {
                        result = operate(divide, temp1, temp2);
                    }
                    sign = this.value;
                
                    temp1 = result;
                    display.value = result;
                    val = "";
                }    
            }
            
        }
        const buttons = Array.from(document.querySelectorAll("input"));
        buttons.forEach(function(button) {
            
            return button.addEventListener("click", func);
            
        }); 
       
    