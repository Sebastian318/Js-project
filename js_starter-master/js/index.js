
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&h=350)";
});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the up button
document.getElementById('up').addEventListener('click', function() {
   
    var position = document.getElementById('ball').style.up;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.up = newPosition + 'px';

});

