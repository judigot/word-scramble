<div class="modescores">
    <h1 class="modetitle">Normal</h1>
    <table>
        <tr>
            <th>Name</th><th>Score</th>
        </tr>
        <?php displayScores("normal"); ?>
    </table>
</div>
<div class="modescores">
    <h1 class="modetitle">Hard</h1>
    <table>
        <tr>
            <th>Name</th><th>Score</th>
        </tr>
        <?php displayScores("hard"); ?>
    </table>
</div>
<div class="modescores">
    <h1 class="modetitle">Very Hard</h1>
    <table>
        <tr>
            <th>Name</th><th>Score</th>
        </tr>
        <?php displayScores("very hard"); ?>
    </table>
</div>
<?php

function displayScores($mode) {
    $con = new mysqli('localhost', 'root', '', 'appjudigot_wordscramble');
    if ($con->connect_error) {
        die('Could not connect: ' . $con->connect_error);
    }
    $sql = "SELECT * FROM `scores` WHERE `mode`='$mode' ORDER BY score DESC";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row['playerName'] . "</td><td>" . $row['score'] . "</td></tr>";
        }
    }
}
