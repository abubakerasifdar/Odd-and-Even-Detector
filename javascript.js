  document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
      
       function myFunction() {
            let input = document.getElementById("InputNumber").value;
            let result;
            if (input % 2 == 0) {
                result = " The Entered Number " + input + " is even ";
            }
            else {
                result = " The Entered Number " + input + " is odd ";
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
        }
 