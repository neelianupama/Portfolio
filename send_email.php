use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['full_name'])));
    $email = filter_var($_POST['email_address'], FILTER_SANITIZE_EMAIL);
    $mobile = htmlspecialchars(strip_tags(trim($_POST['mobile_number'])));
    $subject = htmlspecialchars(strip_tags(trim($_POST['email_subject'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: error.html?message=Invalid email format.");
        exit;
    }

    if (!preg_match('/^\d{10}$/', $mobile)) {
        header("Location: error.html?message=Invalid mobile number.");
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@gmail.com'; // Your email
        $mail->Password = 'your_password'; // Your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('go19kul16@gmail.com'); // Replace with your email

        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = "You have received a new message:\n\nName: $name\nEmail: $email\nMobile: $mobile\nMessage:\n$message";

        $mail->send();
        header("Location: success.html?message=Message sent successfully!");
    } catch (Exception $e) {
        header("Location: error.html?message=Mailer Error: " . $mail->ErrorInfo);
    }
} else {
    header("Location: error.html?message=Invalid request method.");
}
