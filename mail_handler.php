<?php 
// var_dump($_GET); 

$navn = $_POST['navn'];
$tlf = $_POST['tlf'];
$tekst = $_POST['tekst'];
$n1 = $_POST['n1'];
$n2 = $_POST['n2'];
$n3 =$_POST['n3'];

$to = "eksempel@gmail.com"; //hvor brevet skal sendes
$subject = "Fejlmelding"; //email-emne
$body =  $tekst; // form af teksten i meddelelsen til afsendelse

// mail ($to, $subject, $body); //samler alle de indtastede data og sender dem til adressatens

echo "Beskeden sendt fra" ."\t" .$navn ."\t" . $body . "\t" . $n1 . "\t" . $n2 . "\t" . $n3;
echo '<br>';
echo htmlspecialchars($_POST['tlf']); 
echo '<br>';
// echo htmlspecialchars($_POST['n1']); 
// echo '<br>';
// echo htmlspecialchars($_POST['n2']); 
// echo '<br>';
// echo htmlspecialchars($_POST['n3']); 

// echo $_POST['navn']+$_POST['tlf']+$_POST['tekst']+$_POST['n1']+$_POST['n2']+$_POST['n3'];

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