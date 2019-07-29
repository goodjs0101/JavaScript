var env = {};
function init() {    
    env.buttons = document.querySelectorAll("button");
    for( i = 0; i < env.buttons.length; i++ ) {
        env.buttons[i].addEventListener("click", function() {
            env.currEXPR = document.getElementById("op1").value;
            env.currVALUE = document.getElementById("op2").value;

    switch( this.innerHTML ) {
        case 'C':
        document.getElementById("op1").value = "";
        document.getElementById("op2").value = "";
        break;
        case '&lt;-':
        document.getElementById("op2").value = "";
        break;
        case "+":
        case "-":
        case "*":
        case "/":

        if( env.currVALUE == "" ) {
            document.getElementById("op1").value = env.currEXPR.substring(0,env.currEXPR.length - 1) + this.innerHTML;
        } else {
            document.getElementById("op2").value = "";
        document.getElementById("op1").value += env.currVALUE + this.innerHTML;
        }
        
        break;
        case "=":
        if( env.currVALUE == "" )
        env.currEXPR = env.currEXPR.substring(0,env.currEXPR.length - 1);
        document.getElementById("op2").value = eval(env.currEXPR+env.currVALUE);
        document.getElementById("op1").value = "";
        break;
        default:
        
        document.getElementById("op2").value += this.innerHTML;
        break;
    }
    } ); 
    }
}