<?php

if (isset($_POST['ans'])) {
    $$generated = strtoupper($_POST['ans']);
    $w = $_POST['id'];
    $con = new mysqli('localhost', 'root', '', 'scrambler');
    if ($con->connect_error) {
        die('Could not connect: ' . $con->connect_error);
    }
    $sql = "SELECT word FROM info WHERE id = '" . $w . "'";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            if ($$generated == $row['word']) {
                echo "<span style='color: green;'>Correct!<span>";
                include 'getword.php';
            } else {
                echo "<span style='color: red;'>Wrong! Please try again.<span>";
            }
        }
    }
    $con->close();
}