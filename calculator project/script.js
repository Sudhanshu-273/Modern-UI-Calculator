var expression = "";
var searchbar = document.getElementById('search');
var equals = document.getElementById('equal');
equals.addEventListener('click', function(){
    expression = document.getElementById('search').value;
    console.log(eval(expression));
    searchbar.value = eval(expression);
    
})


// -------> AC Button

var ac = document.getElementById('allClear');
ac.addEventListener('click', function(){
    searchbar.value = "";
})

// -------->


// ------------>  Clear Button

var clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    expression = searchbar.value;
    searchbar.value = expression.slice(0, -1);
    expression = searchbar.value;
});

//  ------------->

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

one.addEventListener('click', function(){
    expression += "1";
    searchbar.value = expression;
})
two.addEventListener('click', function(){
    expression += "2";
    searchbar.value = expression;
})
three.addEventListener('click', function(){
    expression += "3";
    searchbar.value = expression;
})
four.addEventListener('click', function(){
    expression += "4";
    searchbar.value = expression;
})
five.addEventListener('click', function(){
    expression += "5";
    searchbar.value = expression;
})
six.addEventListener('click', function(){
    expression += "6";
    searchbar.value = expression;
})
seven.addEventListener('click', function(){
    expression += "7";
    searchbar.value = expression;
})
eight.addEventListener('click', function(){
    expression += "8";
    searchbar.value = expression;
})
nine.addEventListener('click', function(){
    expression += "9";
    searchbar.value = expression;
})
zer0.addEventListener('click', function(){
    expression += "0";
    searchbar.value = expression;
})