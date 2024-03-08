
let number = document.getElementById("number");
let counter = 0; /**cause we'll start counting from zero */

setInterval(() => {
    if(counter== 65){ /**the purpose of this if statement is to make the the increment stop at 65 else, it'll just keep incrementing infinitely*/
        clearInterval();
    } else{
        counter += 1; /**this will be incrementiing by 1 the value of counter */
        number.innerHTML = counter + "%" /**this will print the number plus the percent symbol on the webpage */
    }
 
}, 30 /**this is the timing interval which will the incrementing increment by 0.03 second i.e 20 miliseconds */);