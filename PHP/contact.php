<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars(trim($_POST['name-input']));
    $email = htmlspecialchars(trim($_POST['email-input']));
    $message = htmlspecialchars(trim($_POST['message-input']));

    // Vérification basique des champs
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "pottinjarodepro@gmail.com"; // l'email
        $subject = "Nouveau message de contact de " . $name;
        $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Merci pour votre message ! Nous vous répondrons rapidement.";
        } else {
            echo "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.";
        }
    } else {
        echo "Veuillez remplir tous les champs correctement.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
