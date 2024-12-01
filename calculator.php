<?php
    include 'header.php';
?>

<html>
    
<body>
    <div class="mx-5 my-2">
        <h2>This calculator is epic!</h2>
        <input type="number" id="num1" placeholder="First number">
        <input type="number" id="num2" placeholder="Second number">
        <button class="btn btn-dark" onclick="calculate('add')">Add</button>
        <button class="btn btn-dark" onclick="calculate('subtract')">Subtract</button>
        <button class="btn btn-dark" onclick="calculate('multiply')">Multiply</button>
        <button class="btn btn-dark" onclick="calculate('divide')">Divide</button>
        <p id="result"></p>
    </div>
</body>

</html>