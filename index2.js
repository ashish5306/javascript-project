let squares = document.querySelectorAll('.square');
var Result = document.querySelector('.Result');
var displayColor = document.querySelector('.rgba-color');
var reload = document.querySelector('.replay');
var changeMode = false;

function ChangeMode(){
    changeMode = true;
    if (changeMode == true){

        var colors = [ 
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`, 
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
            `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`                      
            ];
    
    
    
    
        for (var i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i]; 
            displayColor.innerHTML = colors[Math.floor(Math.random()*6)];
                squares[i].addEventListener('click', function hello(){
                    if( displayColor.innerHTML == this.style.backgroundColor ){
                        Result.innerHTML = 'wow! Your are correct';
                        Result.style.color = this.style.backgroundColor;
                        document.querySelector('.heading').style.backgroundColor = this.style.backgroundColor ;
                        reload.style.display = "block";
                    }
                    else{
                        this.style.backgroundColor = 'gray';
                        Result.innerHTML = 'Opps! try again ';
                        reload.style.display = "block";
                        
                    }
                    }) ;
    
            
           
         }
    
    
    }
}



    
let square1 = document.getElementById('square1');
let square2 = document.getElementById('square2');
let square3 = document.getElementById('square3');
let square4 = document.getElementById('square4');
let square5 = document.getElementById('square5');
let square6 = document.getElementById('square6');

let colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'black',
    'purple',
    'navy',
    'aqua',
    'teal',
    'blue',
    'violet',
    'lime',
];

    square1.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    square2.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    square3.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    square4.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    square5.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    square5.style.backgroundColor = colors[Math.floor(Math.random()*13)];
    if (square1.style.backgroundColor == square2.style.backgroundColor ||
        square2.style.backgroundColor == square3.style.backgroundColor ||
        square3.style.backgroundColor == square4.style.backgroundColor ||
        square4.style.backgroundColor == square5.style.backgroundColor || 
        square5.style.backgroundColor == square6.style.backgroundColor){

        location.reload();
    }


for (var i = 0; i<squares.length; i++){
    displayColor.innerHTML = squares[Math.floor(Math.random()*6)].style.backgroundColor;
    squares[i].addEventListener('click', function(){
       if (displayColor.innerHTML == this.style.backgroundColor){
        Result.innerHTML = 'wow! Your are correct';
        Result.style.color = this.style.backgroundColor;
        document.querySelector('.heading').style.backgroundColor = this.style.backgroundColor ;
        reload.style.display = "block";
       }
       else{
        this.style.backgroundColor = 'gray';
        Result.innerHTML = 'Opps! try again ';
        reload.style.display = "block";
       }
    })
}






var reload = document.querySelector('.replay');
reload.addEventListener('click', function(){
    location.reload();
})