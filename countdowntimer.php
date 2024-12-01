<?php
    include 'header.php';
?>

<html>

<body>

<div class="mx-5 my-2">
    <h2>Start a timer!</h2>
    <input type="number" id="timerInput" placeholder="Enter time in seconds">
    <button class="btn btn-info" onclick="startTimer()">Start Timer</button>
    <p id="timerDisplay"></p>
</div>

</body>

</html>