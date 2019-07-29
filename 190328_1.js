var txt;
var myArr = [['Han','SK'],['Min','KT'],['Dae','LG']];
txt = "<table>";
txt = txt + "<thead>";
txt = txt + "<tr>";
txt = txt + "<th>순번</th><th>이름</th><th>통신사</th>";
txt = txt + "</tr>";
txt = txt + "</thead>";
txt = txt + "<tbody>";
for (var i=0; i<3; i++){ // 반복하고 싶은 부분을 for문으로 감싼다.
    txt = txt + "<tr>";
    txt = txt + "<td>"+ (i+1) +"</td>"; // 우항연산시 괄호가 가장 먼저 계산이 된다. 그래서 0이면 1이 입력되는 결과를 만든다.
        for (var j=0; j<2; j++){ // 반복하고 싶은 부분을 for문으로 감싼다.
            txt = txt + "<td>";
            // txt = txt + "한국"+i + j;
            txt = txt + myArr[i][j];
            txt = txt + "</td>";
        } // 반복하고 싶은 부분을 for문으로 감싼다.
    txt = txt + "</tr>";
} // 반복하고 싶은 부분을 for문으로 감싼다.
txt = txt + "</tbody>";
txt = txt + "</table>"; //<table></table>
document.getElementById('myTable').innerHTML = txt;