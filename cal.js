var disArr = [];

// 숫자 입력하기
var clickBtn = function (e) {
    var el = e.target;
    var str = el.innerText;
    if (disArr.length == 0) {
        document.getElementById("display").value = "";
        document.getElementById("display").value += str;
        disArr.push(str);
        if (str !=0) disArr.push(str);
    } else {
        document.getElementById("display").value += str;
        disArr.push(str);
    }
}

// 연산 입력하기
var Env = {
    plus : function() {
        if(document.getElementById("display").value == 0) {
            return false;
        } else if (disArr[disArr.length - 1] == "+"){
            return false;
        } else {
            firstNum = document.getElementById("display").value;
            document.getElementById("display").value +="+";
            disArr.push("+");
        }
    },
    minus : function() {
        if(document.getElementById("display").value == 0) {
            document.getElementById("display").value = "";
            document.getElementById("display").value = "-";
            disArr.push("-");          
        } else if (disArr[disArr.length - 1] == "-") {
            return false;
        } else {
            firstNum = document.getElementById("display").value;
            document.getElementById("display").value +="-";
            disArr.push("-");
        }
    },
    double : function() {
        if(document.getElementById("display").value == 0) {
            return false;
        } else if(disArr[disArr.length - 2] == "*") {
            return false;
        } else {
            firstNum = document.getElementById("display").value;
            document.getElementById("display").value +="*";
            disArr.push("*");
        }
    },
    dividing : function() {
        if(document.getElementById("display").value == 0) {
            return false;
        } else if (disArr[disArr.length - 1] == "/") {
            return false;    
        } else {
            firstNum = document.getElementById("display").value;
            document.getElementById("display").value +="/";
            disArr.push("/");
        }
    }
}

var clickBtnSign = function(e) {
    var el = e.target;
    var str = el.innerText;
    var len = disArr.length;
    var lastSign = disArr[len - 1]; 
    if (lastSign == str) {
        if (len > 3 && disArr[len -2] == '*') {
            return false;
        } else if(lastSign == '*') {
            document.getElementById("display").value +="str";
        } else {
            return false;
        }
        disArr.push(str);
    }
    if (len == 0) {
        if(str == '-') {
            document.getElementById("display").value = "";
            document.getElementById("display").value = "-";
            disArr.push(str);
        }
    } else {
        firstNum = document.getElementById("display").value;
            document.getElementById("display").value +="str";
            disArr.push(str);
    }
}

function init() {
    var firstNum = 0;

    // 숫자 입력하기
    document.getElementById("btn1").addEventListener("click", clickBtn);
    document.getElementById("btn2").addEventListener("click", clickBtn);
    document.getElementById("btn3").addEventListener("click", clickBtn);
    document.getElementById("btn4").addEventListener("click", clickBtn);
    document.getElementById("btn5").addEventListener("click", clickBtn);
    document.getElementById("btn6").addEventListener("click", clickBtn);
    document.getElementById("btn7").addEventListener("click", clickBtn);
    document.getElementById("btn8").addEventListener("click", clickBtn);
    document.getElementById("btn9").addEventListener("click", clickBtn);
    document.getElementById("btn0").addEventListener("click", function() {
        if(document.getElementById("display").value != "") {
            if(document.getElementById("display").value != 0) {
                document.getElementById("display").value += 0;
                disArr.push("0"); 
            } 
        } else {
            document.getElementById("display").value = "";
            document.getElementById("display").value += 0;
        }
    });

    // () 입력하기
    document.getElementById("parenL").addEventListener("click", function() {
        if(document.getElementById("display").value != 0) {
            document.getElementById("display").value += "(";
            disArr.push("("); 
        } else {
            document.getElementById("display").value = "";
            document.getElementById("display").value += "(";
            disArr.push("(");
        }
    });
    document.getElementById("parenR").addEventListener("click", function() {
        if(document.getElementById("display").value != 0) {
            document.getElementById("display").value += ")";
            disArr.push(")"); 
        } else {
            document.getElementById("display").value = "";
            document.getElementById("display").value += ")";
            disArr.push(")");
        }
    });

    //사칙연산 입력하기 단, *를 제외한 나머지는 한번만 입력, -는 처음에 입력 가능.
    document.getElementById("add").addEventListener("click", Env.plus);
    document.getElementById("minus").addEventListener("click", Env.minus);
    document.getElementById("double").addEventListener("click", Env.double);
    document.getElementById("dividing").addEventListener("click", Env.dividing);

    // 계산하기
    document.getElementById("result").addEventListener("click", function() {
        if(document.getElementById("display").value == "0") {
            return false;
        } else {
            try {
            document.getElementById("display").value = eval(display.value);
            } catch(e) {
                alert("수식을 확인해 주세요.")
            }
            dpvalue = document.getElementById("display").value;
            disArr.push(dpvalue);
            // 15자리까지만 출력
            dplength = dpvalue.length;
            dpvalue = dpvalue.substring(0,15);
            document.getElementById("display").value = dpvalue;
            if (dplength > 15) {
                alert ("결과값은 최대 15자리까지 출력됩니다.")
            }
            disArr=[];
        }
    });

    // C로 초기화
    document.getElementById("btnC").addEventListener("click", function() {
        document.getElementById("display").value = 0;
        disArr=[];
    });

    // ←로 입력 지우기
    document.getElementById("backSpace").addEventListener("click", function() { 
        if(document.getElementById("display").value == 0) {
            return false;
        } else {
            dpvalue = document.getElementById("display").value;
            dplength = dpvalue.length;
            dpvalue = dpvalue.substring(0,dplength-1);
            document.getElementById("display").value = dpvalue;
        }
    });
}