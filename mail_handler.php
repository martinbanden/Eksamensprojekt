<?php 

$nameErr = $tlfErr = $tekstErr = $koondinatErr = "";
$name = $tlf = $tekst = $beskriv = $koondinat = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["tlf"])) {
    $tlfErr = "Phone is required";
  } else {
    $tlf = test_input($_POST["tlf"]);
    // 
    if (!filter_var($tlf)) {
      $tlfErr = "Invalid phone format";
    }
  }
   

  if (empty($_POST["tekst"])) {
    $tekst = "";
  } else {
    $tekst = test_input($_POST["tekst"]);
  }

  if (empty($_POST["n1"])) {
    $n1Err = "... is required";
  } else {
    $n1 = test_input($_POST["n1"]);
  }

  if (empty($_POST["koordinat"])) {
    $koordinatErr = "Koordinat is required";
  } else {
    $koordinat = test_input($_POST["koordinat"]);
  }
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}



echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $tlf;
echo "<br>";
echo $tekst;
echo "<br>";
echo $n1;
echo "<br>";
echo $koordinat;


?>