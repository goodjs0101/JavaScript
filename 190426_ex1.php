<?php
header("Content-Type: text/html; charset=UTF-8"); 
echo "<!DOCTYPE html><html><body>";
echo "오늘";
echo "<br>";
echo date("y-m-d");
echo "<br>";
echo $_POST['name'];
echo "</body></html>";
?>