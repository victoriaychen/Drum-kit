var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

//Detecting button press
    //Get all element in the class of drum
    var drumArray = document.querySelectorAll(".drum")[i];

    //Attach eventListener; the function will get called when we click a button
    drumArray.addEventListener("click", function() {

        //this is the current element in the array
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    //Detecting keyboard press
    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

/*
Purpose: Play the respective audio based on the button.
Parameter: current key press/click
*/
    function makeSound(key) {
        switch (key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default: console.log(buttomInnerHTML);
        }
    }

/*
Purpose: Add button animation by triggering the press class in styles.css.
Parameter: current key press/click
*/
    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
