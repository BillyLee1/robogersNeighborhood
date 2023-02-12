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
