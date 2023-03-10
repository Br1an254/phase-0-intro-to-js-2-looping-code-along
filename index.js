// Code your solutions in this file
function writeCards(stringArray, eventName) {
    let messagesArray = [];

    for(let i = 0; i < stringArray.length; i++) {
        messagesArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`);
    }

    return messagesArray
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(n) {
    let i = n;

    while(i >= 0) {
      console.log(i)
      i--
    }
}
countDown(10)