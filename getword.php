<?php

session_start();
if (!isset($_SESSION['done'])) {
    $_SESSION['done'] = array();
}
$con = new mysqli('localhost', 'root', '', 'appjudigot_wordscramble');
if ($con->connect_error) {
    die('Could not connect: ' . $con->connect_error);
}



// Get all IDs from a mode
$ModeIds = array();
$sql = "SELECT `id` FROM `levels` WHERE `mode`='" . $_SESSION['mode'] . "'";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        array_push($ModeIds, $row['id']);
    }
}

// Count all the words from the database
$sql = "SELECT COUNT(*) FROM `levels` WHERE `mode`='" . $_SESSION['mode'] . "'";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $total = $row['COUNT(*)'];
    }
}

if (sizeof($_SESSION['done']) == $total) {
    echo json_encode("none");
} else {
    do {
        $generated = $ModeIds[array_rand($ModeIds)];
    } while (in_array($generated, $_SESSION['done']));
    array_push($_SESSION['done'], $generated);
    $Data = array();
    $sql = "SELECT word FROM levels WHERE id = '" . $generated . "'";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $original = $row['word'];
            do {
                $word = str_shuffle($original);
            } while ($word == $original);
            $Data[] = $original;
            $Data[] = strtoupper($word);
            $_SESSION['original'] = $original;
            echo json_encode($Data);
        }
    }
    $con->close();
}