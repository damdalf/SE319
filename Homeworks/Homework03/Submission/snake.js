// Create 'snake' to be an array of points so that we can check if the snake ever
// crosses over its own body.
var snake = [{x: 0, y: 300}];
// Create our canvas to draw on.
var canvas = document.getElementById("gameCanvas");
// Var to store the direction of the snake's movement.
var direction = "r";
// Var to allow us to automate the movement of the snake.
var timer;
// Index variable to keep track of where we are at in the snake array.
var i = 0;

// Create drawing object.
var ctx = canvas.getContext("2d");
// Set the fill style for this drawing object (our snake).
ctx.fillStyle = 'lightgreen';
// Set the stroke style for this drawing object (our snake).
ctx.strokeStyle = 'darkgreen';

// Handles the functionality of the first button.
function startOrStopOrRestart()
{
    var btn = document.getElementById("playBtn");

    if (btn.innerHTML == "START" || btn.innerHTML == "RESUME")
    {
        btn.classList.remove("startBtn");
        btn.classList.remove("resumeBtn");
        btn.classList.add("stopBtn");
        btn.innerHTML = "STOP";

        timer = setInterval(drawSnake, 100);
    }
    else if (btn.innerHTML == "RESTART")
    {
        location.reload();
    }
    else
    {
        btn.innerHTML = "RESUME";
        btn.classList.remove("stopBtn");
        btn.classList.add("resumeBtn");
    }
}

// Handles the functionality of the turn right button.
function turnRight()
{
    switch(direction)
    {
        case "r":
            direction = "d";
            break;
        case "u":
            direction = "r";
            break;
        case "l":
            direction = "u";
            break;
        case "d":
            direction = "l";
            break;
    }
}

// Handles the functionality of the turn left button.
function turnLeft()
{
    switch(direction)
    {
        case "r":
            direction = "u";
            break;
        case "u":
            direction = "l";
            break;
        case "l":
            direction = "d";
            break;
        case "d":
            direction = "r";
            break;
    }
}

// Checks to see if the coordinates have already been traveled.
function checkDuplicate(x, y)
{
    for (let j = 0; j < snake.length; j++)
    {
        if (x == snake[j].x && y == snake[j].y)
        {
            return true;
        }
    }
    return false;
}

// Handles the funtionality to actually draw the snake on the canvas.
function drawSnake()
{
    var btn = document.getElementById("playBtn");

    if (i != 0 && (snake[i].x == 0 || snake[i].x == 600 || snake[i].y == 0 || snake[i].y == 600))
    {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);
        console.log("STOPPING GAME");
        clearInterval(timer);
        btn.innerHTML = "RESTART";
        btn.classList.remove("startBtn");
        btn.classList.add("restartBtn");
    }
    else if (btn.innerHTML == "RESUME")
    {
        clearInterval(timer);
    }
    
    if (direction == "r" && (snake[i].x + 10) <= 600)
    {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);

        if (checkDuplicate(snake[i].x + 10, snake[i].y))
        {
            console.log("STOPPING GAME");
            clearInterval(timer);
            btn.innerHTML = "RESTART";
            btn.classList.remove("startBtn");
            btn.classList.add("restartBtn");
        }
        else
        {
            snake.push({x: snake[i].x + 10, y: snake[i].y});
            i++;
        }
    }
    else if (direction == "u" && (snake[i].y - 10) <= 600)
    {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);

        if (checkDuplicate(snake[i].x, snake[i].y - 10))
        {
            console.log("STOPPING GAME");
            clearInterval(timer);
            btn.innerHTML = "RESTART";
            btn.classList.remove("startBtn");
            btn.classList.add("restartBtn");
        }
        else
        {
            snake.push({x: snake[i].x, y: snake[i].y - 10});
            i++;
        }
    }
    else if (direction == "l" && (snake[i].x - 10) >= 0)
    {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);

        if (checkDuplicate(snake[i].x - 10, snake[i].y))
        {
            console.log("STOPPING GAME");
            clearInterval(timer);
            btn.innerHTML = "RESTART";
            btn.classList.remove("startBtn");
            btn.classList.add("restartBtn");
        }
        else
        {
            snake.push({x: snake[i].x - 10, y: snake[i].y});
            i++;
        }
    }
    else if (direction == "d" && (snake[i].y + 10) >= 0)
    {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);

        if (checkDuplicate(snake[i].x, snake[i].y + 10))
        {
            console.log("STOPPING GAME");
            clearInterval(timer);
            btn.innerHTML = "RESTART";
            btn.classList.remove("startBtn");
            btn.classList.add("restartBtn");
        }
        else
        {
            snake.push({x: snake[i].x, y: snake[i].y + 10});
            i++;
        }
    }
}