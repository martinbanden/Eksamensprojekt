<?php 

// if (isset($_POST["send"])) {
//     $to = "khavushka@gmail.com"; //hvor brevet skal sendes

//     $subject = "E-mail fra ...."; //email-emne

//     $charset = "utf-8"; 

//     $headers = "Content-type: text/html; charset=windows-1251 \r\n"; //teknisk overskrift på e-mailen
//     $headers . = "Date: ".date('D, d M Y h:i:s O')."\r\n";

//     $msg= "Navn: ".$_POST["name"]."\n";$msg .="Besked: ".$_POST["msg"]."\n"; // form teksten i meddelelsen til afsendelse af

//     mail($to, $subject, $msg, $headerss); //samler alle de indtastede data og sender dem til adressatens

//     print "<script>alert(\"Beskeden er sendt\"); window.location=window.location.href</script>";//efter at siden er sendt, opdaterer den og viser en besked om, at afsendelsen er fuldført.
// }

$name = $_POST['name'];
$tlf = $_POST['tlf'];

$to = "khavushka@gmail.com";
$subject = "Text";
$body = "This is an automated message. " . $tlf   . $name;

mail ($to, $subject, $body);

echo "Besked ...." . $body;

?>