<?php 
// var_dump($_GET); 

$navn = $_POST['navn'];
$tlf = $_POST['tlf'];

$to = "khavushka@gmail.com"; //hvor brevet skal sendes
$subject = "Fejlmelding"; //email-emne
$body = "text "  . $name  ."\t"  . $tlf ; // form af teksten i meddelelsen til afsendelse

// mail ($to, $subject, $body); //samler alle de indtastede data og sender dem til adressatens

echo "Besked ...." . $body . $beskrivelse;

echo $_POST['navn']+$_POST['tlf']+$_POST['tekst']+$_POST['n1']+$_POST['n2']+$_POST['n3'];

// echo htmlspecialchars($_POST['navn']); 
// echo  '<br>';
// echo (int)$_POST['tlf'];
// echo '<br>';
// echo htmlspecialchars($_POST['tekst']);
// echo '<br>';
// echo htmlspecialchars($_POST['n1']);  


// echo '<br>';
// echo htmlspecialchars($_POST['n2']); 
?>