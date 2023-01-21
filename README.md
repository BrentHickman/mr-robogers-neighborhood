# _Mr. Roboger's Neighborhood

#### By _**Brent Hickman**_

#### _A progam to Mr.Robogerfy your number_

## Technologies Used

* HTML
* CSS
* Javascript


## Description

_This program takes an submitted number and counts to it from '0' by one. It then replaces each instance of '1' with 'Beep!, each '2' with 'Boop! and each '3' with 'Won't you be my neighbor?'._

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Completed Tests

    Describe: beepBoop()

    Test: "It should return an array of numbers from 0 to the user's inputted number"
    Code: beepBoop(5);
    Expected Output: [0, 1, 2, 3, 4, 5]


    Describe: boopBeep()

    //First Test
    Test: "It should replace any numbers in the returned array that contain '1' with "Beep!".
    Code: beepBoop(10);
    Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

    //Second  Test
    Test: "It should replace any numbers in the returned array that contain '2' with "Boop!".
    Code: beepBoop(12);
    Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

    //Third  Test  
    Test: "It should replace any numbers in the returned array that contain '3' with "Won't you be my neighbor?".
    Code: beepBoop(5);
    Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]



## Known Bugs

* Please inform deveopler if experiencing any bugs

## License

* [MIT](https://opensource.org/licenses/MIT)
