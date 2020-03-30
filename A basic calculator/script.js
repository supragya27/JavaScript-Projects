function getHistory(){    //to get value stored in history panel
    return document.getElementById("history-value").innerText
 }
 function printHistory(num){  //to store value in history panel
     document.getElementById("history-value").innerText=num;
 }
 function getOutput(){      //to get value stored in output panel
     return document.getElementById("output-value").innerText;
 }
 function printOutput(num){   //to store value in output panel
     if(num=="") //required as the getFormattedNumber will convert empty value to 0;
     document.getElementById("output-value").innerText=num;
     else{
     document.getElementById("output-value").innerText=getFormattedNumber(num);
 }
 }
 function getFormattedNumber(num){   //to convert the number into a comma separated format
     var n=Number(num);
     var newN=n.toLocaleString("en"); 
     return newN;
 }
 function reverseNumberFormat(num){   //to convert the number to non-comma separated format
     return Number(num.replace(/,/g,''));
 
 }
 
 
 