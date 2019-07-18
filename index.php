<!DOCTYPE html>
<html lang="en">

    <head>
        <?php include 'Imports/top.php'; ?>
        <title>Word Scramble</title>
    </head>

    <body>

        <div hidden id="content">
            <h1><a id="title" href="index.php">Word Scramble</a></h1>
            <h1><span id="second"></span></h1><br><br>
            <div id="menu">
                <button  id="start" type="button">Start Game</button><br><br>
                <button id="viewhighscores">High Scores</button>
            </div>

            <button  id="modemenuback" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button><br>
            <div id="modemenu">
                <div id="modeoptions">
                    <button class="modeoptionsbutton"  id="normal" type="button">Normal</button>
                    <button class="modeoptionsbutton" id="hard">Hard</button>
                    <button class="modeoptionsbutton" id="veryhard">Very Hard</button>
                </div>
            </div>
            <h1 id="nodata"></h1>
            <button hidden id="newGame" type="button">New Game</button>

            <span hidden id="timeIsUp" class="centerFixed">GAME OVER</span>
            <br><br><br>

            <div hidden id="imagebox">
                <div id="toprightinfo">
                    <span id="scoreword">SCORE: </span><span id="totalscore"></span><br>
                    <span id="mode"></span>
                </div>
                <div id="timerContainer">
                    <span id="timer"></span>
                </div><br>
                <span id="word"></span><br>
                <input autofocus id="answer" type="text" class="centeredInput"><br><br>
                <button id="shuffle" type='submit' onclick='shuffle()'>Shuffle</button><br>
                <span id="result"></span><br>
                <button id="check">Check</button><br><br>
            </div>

            <!--<div id="backdrop"></div>-->

            <div hidden id="quitmodal" class="centerFixed">
                <div id="quitcontent">
                    <h3>Are you sure you wanna quit?</h3>
                    <p id="quitmessage">Your game will not be saved. Continue?</p>
                    <div class="lower-right">
                        <button autofocus id="yes" type="button">Yes</button>
                        <button class="no" type="button">No</button>
                        <button class="no" type="button">Cancel</button>
                    </div>
                </div>
            </div>

            <div hidden id="playerNameModal" class="centerFixed">
                <div id="playerNameContent">
                    <h3>High Score</h3>
                    <p id="quitmessage">Enter player name:</p>
                    <input id="playerNameInput" type="text" class="centeredInput">
                    <div class="lower-center">
                        <button id="confirmPlayerName">Confirm</button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="highScores" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">High Scores</h4>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include 'Imports/bottom.php'; ?>
    </body>

</html>