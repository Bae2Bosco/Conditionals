var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer");

var pOne= prompt("What is the first number?");
if (pOne=="14"){
    ele.innerHTML="The answer are good.";
}else{
    ele.innerHTML="Sorry, the answers is bad. 14";
}

var pThree= prompt("What is the second number?");

if(pThree=="21"){
    ele.innerHTML="The answers are good.";
}else{
    ele.innerHTML="The answers are bad. 21";
}

