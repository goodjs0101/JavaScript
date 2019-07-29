<?php
$id = "";
$pw = "";
$year = "";
$month = "";
$day = "";
$tel1 = "";
$tel2 = "";
$tel3 = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = test_input($_POST["memberId"]);
    $pw = test_input($_POST["memberPW"]);
    $year = test_input($_POST["year"]);
    $month = test_input($_POST["month"]);
    $day = test_input($_POST["day"]);
    $tel1 = test_input($_POST["tel1"]);
    $tel2 = test_input($_POST["tel2"]);
    $tel3 = test_input($_POST["tel3"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
header("Content-Type: text/html; charset=UTF-8"); 
echo "<h1>폼 사용하기</h1>";
echo "회원아이디:";
echo $id;
echo "<br>";
echo "비밀번호:";
echo $pw;
echo "<br>";
echo "생년월일:";
echo $year;
echo $month;
echo $day;
echo "<br>";
echo "전화번호:";
echo $tel1;
echo $tel2;
echo $tel3;
?>