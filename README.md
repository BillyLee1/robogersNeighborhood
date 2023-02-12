# _Mr. Roboger's Neighborhood_

#### By _**Billy Lee**_

#### _A simple program to replace numbers containing 1, 2, or 3._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _VS Code_

## Description

_This is a simple program to replace numbers containing 1 with "Beep!", 2 with "Boop!", and 3 with "Won't you be my neighbor?". The user will input a number of their choice and it will generate an array from 0 to the number they selected. The program will replace any number with 1, 2, or 3 with the phrases listed earlier. The answer will be printed onto the webpage at the bottom of the webpage._

## Setup/Installation Requirements

* _Visit the repository this project is located in._
* _Press the green code button and copy and the HTTPS link that ends with .git_
* _Open up your gitbash and change the directory to where you want to clone this repository._
* _in gitbash, type "git clone" and then paste the link you just copied._
* _Lastly, open up the index.html in your web browser to view the language selector._

## Known Bugs

* No known bugs as of right now. Please notify me if you have found any bugs.


## License

_Please let me know if you see any bugs within this project. You can contact me through Discord or email me at codingbillylee@gmail.com_

[Copyright](https://opensource.org/licenses/MIT) (c) _2023_ _Billy Lee_

## TDD:

Describe: roboOutput(num)

Test: "It should output an array of numbers from 0 to user's input number"
Code: roboOutput(1)
      let numArray = [];
      for(let i = 0; i <= num; i++) {
        numArray.push(i);
      }
Expected Output = [0, 1]

Test: "It should change number into a string"
Code: number.toString();
Expected Output = "4"

Describe roboEditor(i)

Test: "It should change numbers containing 3 to "Won't you be my neighbor?"
Code: roboEditor(3)
      if (i.includes("3")) {
          return "Won't you be my neighbor?";
Expected Output = "Won't you be my neighbor?"

Test: "It should change numbers containing 2 to "Boop!"
Code: roboEditor(2)
      if (i.includes("2")) {
          return "Boop!";
Expected Output = "Boop!"

Test: "It should change numbers containing 1 to "Beep!"
Code: roboEditor(1)
      if (i.includes("1")) {
          return "Beep!";

Expected Output = "Beep!"

Test: "It should print the number"
Code: roboEditor("4")
          return "4";

Expected Output = "4"
