<?php
    include 'header.php';
?>

<html>

<body>
<div class="mx-5 my-2">
    <h2>Put things on your to do list here!</h2>
    <div class="d-flex align-items-center my-2">
        <h3 id="listName" class="me-3">Shopping List</h3> <button type="button" class="btn btn-info" onclick="renameList()">Rename List</button>
    </div>
    <input class="form-control my-2" type="text" id="taskInput" placeholder="Enter a task">
    <button class="btn btn-info my-2" onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
</div>
</body>

</html>