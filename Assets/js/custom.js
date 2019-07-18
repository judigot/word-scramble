/*-----------Event Listeners-----------*/
$(document).ready(function () {
    $(".centeredInput").attr('maxlength', '15');
    $('#content').hide();
    $('#modemenuback').hide();
    $('#content').fadeIn();
    $('#modemenu').hide();
    // Enter Key Press
    $("#answer").keydown(function (e) {
        if (e.keyCode === 13) {
            check();
        }
    });

    // Mode Menu
    $("#normal").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("normal");
        $("#mode").text("Level: Normal");
        newGame();
    });
    $("#hard").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("hard");
        $("#mode").text("Level: Hard");
        newGame();
    });
    $("#veryhard").click(function () {
        $('#modemenu').hide();
        $('#modemenuback').hide();
        setMode("very hard");
        $("#mode").text("Level: Very Hard");
        newGame();
    });

    // Start Game Button Click
    $("#start, #newGame").click(function () {
        $('#nodata').fadeOut();
        $('#modemenuback').fadeIn();
        $('#menu').fadeOut();
        $('#modemenu').fadeIn();
        //newGame();
    });
    $("#modemenuback").click(function () {
        $('#modemenuback').fadeOut();
        $('#menu').fadeIn();
        $('#modemenu').fadeOut();
    });
    // High Scores Button Click
    $("#viewhighscores").click(function () {
        $.get('viewscores.php', function (data) {
            $(".modal-body").empty();
            $('.modal-body').append(data);
        });
        $('#highScores').modal('show');
    });
    // Check Button Click
    $("#check").click(function () {
        check();
    });

    $("#quitgame").click(function () {
        $("#quitmodal").fadeIn();
        $("#yes").focus();
    });
    $(document).keydown(function (e) {
        if ($("#imagebox").is(":visible") === true) {
            if (e.keyCode === 27) {
                $("#quitmodal").fadeIn();
                $("#yes").focus();
            }
        }
    });
    $("#yes").click(function () {
        $("#quitmodal").fadeOut();
        quit();
    });
    $(".no").click(function () {
        $("#quitmodal").fadeOut();
        $("#answer").focus();
    });
    $("#confirmPlayerName").click(function () {
        checkValue();
    });
    $("#playerNameInput").keydown(function (e) {
        if (e.keyCode === 13) {
            checkValue();
        }
    });
});
/*-----------Event Listeners-----------*/
var originalWord;
function shuffle() {
    score -= 5;
    $("#totalscore").text(score);
    var original = originalWord.toString().toUpperCase();
    var parts = original.split('');
    do {
        for (var i = parts.length; i > 0; ) {
            var random = parseInt(Math.random() * i);
            var temp = parts[--i];
            parts[i] = parts[random];
            parts[random] = temp;
        }
        var newWord = parts.join('');
    } while (newWord === original);
    document.getElementById("word").innerHTML = newWord;
}

function checkValue() {
    if ($('#playerNameInput').val() !== "") {
        insertScore();
        $("#playerNameModal, #imagebox").fadeOut();
        $("#menu").fadeIn();
    } else {
        $('#playerNameInput').css("background-color", "#FFC0BC");
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "white");
        }, 200);
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "#FFC0BC");
        }, 400);
        setTimeout(function () {
            $('#playerNameInput').css("background-color", "white");
        }, 800);
    }
}

function checkExistingUser() {
    var playerName = $('#playerNameInput').val().charAt(0).toUpperCase() + $('#playerNameInput').val().slice(1);

    $.post("checkExistingUser.php", {
        playerName: playerName
    }, function (data) {
        if (data === "0") {
            insertScore();
            $("#playerNameModal, #imagebox").fadeOut();
            $("#menu").fadeIn();
        } else {
            $('#playerNameInput').val("name taken");
            $('#playerNameInput').css("background-color", "#FFC0BC");
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "white");
            }, 0);
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "#FFC0BC");
            }, 0);
            setTimeout(function () {
                $('#playerNameInput').css("background-color", "white");
                $('#playerNameInput').val("");
            }, 0);
        }
    });
}

function insertScore() {
    var playerName = $('#playerNameInput').val();
    $.post("insertScore.php", {
        playerName: playerName.charAt(0).toUpperCase() + playerName.slice(1),
        score: score
//        ALTER TABLE `scores` AUTO_INCREMENT = 1;
    });
}

function setMode(mode) {
    $.post("setMode.php", {
        mode: mode,
    });
}

var score = 0;
var scored = 0;

// Kung na click ang "Check" nga button kay mudagan ni nga function
function check() {
    $.get('check.php', function (data) {
        var original = data;
        var answer = document.getElementById("answer").value.toLowerCase();
        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (answer === original) {
            // If ang answer kay sakto
            score += 100;
            scored = true;
            $("#totalscore").text(score);
            $("#check").hide(50);
            $("#answer").hide(50);
            $("#result").css("color", "green");
            document.getElementById("result").innerHTML = "Correct!";
            document.getElementById("answer").value = "";
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                getData();
                document.getElementById("result").innerHTML = "";
            }, 1000);
            setTimeout(function () {
                $("#check").show();
                $("#answer").show();
                $("#answer").focus();
            }, 500);
        } else if (!answer || format.test(answer) === true) {
            // If ang answer kay blank or sayop ang format or ang answer kay number
            $("#result").css("color", "orange");
            document.getElementById("result").innerHTML = "Enter a valid answer!";
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
            }, 1000);
        } else {
            // If ang answer kay wrong
            $("#result").css("color", "red");
            document.getElementById("result").innerHTML = "Wrong! Please try again.";
            // Change score deduction when wrong
            score -= 15;
            $("#totalscore").text(score);
            $("#result").toggle(50);
            $("#result").toggle(50);
            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
            }, 1000);
        }
    });
}



function getData() {
    setTimeout(function () {
        $.ajax({
            url: 'getword.php',
            type: 'POST',
            dataType: 'json',
            data: {test: '1'},
            success: function (data) {
                if (data === 'none') {
                    clearInterval(timer);
                    $("#imagebox").hide(100);
                    $("#nodata").css("color", "orange");
                    document.getElementById("nodata").innerHTML = "No words available.";
                    setTimeout(function () {
                        $("#nodata").show();
                        $("#menu").show();
                    }, 0);
                    if (scored === true) {
                        setTimeout(function () {
                            $("#playerNameModal").fadeIn();
                            $("#playerNameInput").focus();
                        }, 2000);
                    } else {
                    }
                } else {
                    originalWord = data[0];
                    var hint = data[1];
                    $("#word").html(hint);
                    $("#imagebox").show();
                }
            }
        });
    }, 0);
}
var timer;
function startTimer(durationInSeconds) {
    var end = (new Date).getTime() + (durationInSeconds * 1000);
    var currentTime;

    timer = setInterval(function () {
        if (currentTime <= 0) {
            $("#imagebox").fadeOut();
            $("#quitmodal").fadeOut();
            $("#timeIsUp").fadeIn(1000);
            clearInterval(timer);
            setTimeout(function () {
                $("#timeIsUp").fadeOut();
            }, 3000);
            setTimeout(function () {
                $("#playerNameModal").fadeIn();
                $("#playerNameInput").focus();
            }, 3500);
        } else {
            var elapsed = (((new Date).getTime() - end) + 60000) / 1000;
            var seconds = 60 - elapsed;
            currentTime = (Math.floor(seconds)) + 1;
            if (currentTime > 20) {
                $("#timer").css("color", "#09F603");
            } else if (currentTime > 10 && currentTime <= 20) {
                $("#timer").css("color", "#FF4C00");
            } else {
                $("#timer").css("color", "red");
            }
            $("#timer").text(currentTime);
        }
    }, 0);
}
function skip() {
    $.get('skip.php', function (data) {
        if (data === 0) {
            $("#skip").hide();
        } else {
            if (data === 1) {
                $("#skip").css("color", "red");
            }
            $("#skip").text("Skip Word (" + data + ")");
        }
        getData();
    });
}

function quit() {
    $.get('newGame.php', function (data) {
        $("#nodata").hide();
        $("#menu").hide();
        $("#imagebox").hide();
        $("#menu").fadeIn();
        clearInterval(timer);
    });
}

function newGame() {
    score = 0;
    scored = false;
    $("#totalscore").text(score);
    $.get('newGame.php', function (data) {
        $("#nodata").hide();
        $("#menu").hide();
        $("#imagebox").show();
        $("#skip").text("Skip Word (" + data + ")");
        $("#skip").css("color", "darkgray");
        clearInterval(timer);
        getData();
        setTimeout(function () {
            // Timer Duration
            startTimer(120);
        }, 1000);
    });
}

function hide() {
    $("#imagebox").hide();
    $("#newGame").hide();
    //Timer.start(0, 1, 5);
}

var Clock = {
    totalSeconds: 0,

    start: function () {
        var self = this;
        this.interval = setInterval(function () {
            self.totalSeconds += 1;
            $("#hour").text(Math.floor(self.totalSeconds / 3600));
            $("#minute").text(Math.floor(self.totalSeconds / 60 % 60));
            $("#second").text(parseInt(self.totalSeconds % 60));
        }, 1000);
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        if (!this.interval)
            this.start();
    }
};

var Timer = {

    elapsedTime: 0,

    start: function (x, y, z) {
        var self = this;
        var hours = x;
        var minutes = y;
        var seconds = z;
        //var duration = 600;
        var duration = (hours * 3600) + (minutes * 60) + (seconds) + 1;

        this.interval = setInterval(function () {
            //alert(self.duration);
            self.elapsedTime += 1;
            if ((duration - self.elapsedTime) === 0) {
                alert("timer");
            }

            var timer = new Date((duration - self.elapsedTime) * 1000).toISOString().substr(11, 8);

            $("#hour").text("0");
            $("#minute").text(Math.floor((duration / 60) - (self.elapsedTime / 60)));
            $("#second").text(timer.substring(4));
        }, 1000);
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        if (!this.interval)
            this.start();
    }
};

//window.onload = hide();