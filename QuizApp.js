// JavaScript source code


var index = {
 "A slug's blood is green.": "True",
 "Approximately one quarter of human bones are in the feet.": "True" ,
 "The total surface area of two human lungs is approximately 70 square metres.": "True",
 "In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.": "True",
 "In London, UK, if you happen to die in the House of Parliament, you are technically entitled to a state funeral, because the building is considered too sacred a place.": "False",
 "It is illegal to pee in the Ocean in Portugal.": "True",
 "You can lead a cow down stairs but not up stairs.": "False",
 "Google was originally called 'Backrub'.": "True",
 "Buzz Aldrin's mother's maiden name was 'Moon'.": "True",
 "The loudest sound produced by any animal is 188 decibels. That animal is the African Elephant.": "False",
 "No piece of square dry paper can be folded in half more than 7 times.": "False",
 "Chocolate affects a dog's heart and nervous system; a few ounces are enough to kill a small dog.": "True",
   /* name: "jessica",
    religion: "christianity",
    dept: "comp"*/
}


var array = Object.keys(index);
//var arr = index["A slug's blood is green."];
//console.log(array);
/*var an = array[count]
var answer = index[an]*/
 
var count = 0;
var progress = 1;

let myindex = document.getElementsByTagName("p")[0].innerHTML = array[count];
var button = document.getElementsByTagName("button");
document.getElementById("circle").innerHTML = progress + "/" + array.length;


/*var firstarray = document.getElementsByTagName("p")[0].innerHTML = array[0];
var True = document.getElementsByTagName("button")[0].innerHTML;
alert(firstarray);
alert(True);*/

button[0].addEventListener("click", function () {
    answer(0)
    
    
})

button[1].addEventListener("click", function () {
    answer(1)
    
})
button[2].addEventListener("click", function () {
    nextPage()
   
})
button[3].addEventListener("click", function () {
    previousPage()
    
})

function update_progress() {

    progress = progress + 1;



    document.getElementById("circle").innerHTML = progress + "/" + array.length;

}

function answer(position) {
    /*for (let count = 0; count < array.length-1; count++) {
        myindex[count].style.color = green;
    }   */
    button[3].removeAttribute("disabled");
    
    if (count < array.length - 1) {
        var answer = index[array[count]]
        var button_text = button[position].innerHTML
        if (button_text == answer) {
            button[position].style.backgroundColor = "green";
        }
        else {
            button[position].style.backgroundColor = "red";
        }

        

        update_progress()
        count++;
        
        setTimeout(function () {
            document.getElementsByTagName("p")[0].innerHTML = array[count];
            button[position].style.backgroundColor = "transparent";

        } , 200)
    }
    else {
        progress = 1;
        document.getElementById("circle").innerHTML = progress + "/" + array.length;
        
        count = 0;
        document.getElementsByTagName("p")[0].innerHTML = array[count];
        
        


    }
  }

   



function nextPage() {
    if (count < array.length - 1) {

        update_progress()
        count++;
       

        document.getElementsByTagName("p")[0].innerHTML = array[count];
       
    }
    else {
        progress = 1;
        document.getElementById("circle").innerHTML = progress + "/" + array.length;
        count = 0;
        document.getElementsByTagName("p")[0].innerHTML = array[count];



    }
}

function previousPage() {
    if (count > array.length - 12) {
        count--;
        document.getElementsByTagName("p")[0].innerHTML = array[count];
    }
    else {
        count = 0;
        document.getElementsByTagName("p")[0].innerHTML = array[count];
    }
}
