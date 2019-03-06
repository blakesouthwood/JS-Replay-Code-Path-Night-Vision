
var input_array = []
    input_array[input_array.length] = ""

    varinput_array = []
    varinput_array[varinput_array.length] = ""

     varoutput_array = []
    varoutput_array[varoutput_array.length] = ""

     varnames_array = []
    varnames_array[varnames_array.length] = ""

var value_of_tron = false
//############ main ##########


function main(){
  //alert("main called")
	tron("main") //it must be called so this is every present just like at the top of each function
  one();
  two();
  three();
  four();
  show_tron();
} //end function



main(); //calls everyting now



//############ tron #######
   function tron(add_this){ //the function called
     var simple = add_this.toString()
     //alert(simple)
    /*fill the array in sequence based on function calls   */
  var test = eval("input_array.push('" + simple + "')");
    eval(test);
  ////

 /*fill the array in sequence based on function calls   */

 }

function outputs(arr){
	var output = arr.toString()
    var out_var = eval("varoutput_array.push('" + output + "')");
    eval(out_var);
     //var out_var2 = eval("varoutput_array.push('" + arr + "')");
    //eval(out_var2);

}

//################# one #######
 function one(){
tron("one");

outputs( "false")


}


//################ two #########
function two(){
tron("two");
var condition = 'true';
//if (condition == "true"){
//	var color = "green"
//}else{
//	var color = "red"
//}

outputs( "true")

}

//############### three #########
function three(){
tron("three");


outputs("false")

}

//############### three #########
function four(){
tron("four")

outputs( "true")
}





//######################################
//################ show_tron ###########
function show_tron(){  //not calling this function 
  return;
//alert(input_array)
var answer = "<!DOCTYPE html><html><body bgcolor=skyblue>";
 answer += "<table border =1>";


//loop
for(var x =0;x<input_array.length;x++){
  if(x == 0){ continue; }
  //alert(input_array[x])
  answer += "<tr><td>" + input_array[x]+ "</td></tr>";
}//end loop
answer += "</table>"
 answer += "<br><table>"
 answer += "<tr><td>" + "output vars from functions" +  "</td></tr>";

//##########################

 //loop
 answer += "</table>"
 answer += "<br><table bgcolor = gold border=1>"

for(var x =0;x<varoutput_array.length;x++){
  if(x == 0){ continue; }

  answer += "<tr><td>" + varoutput_array[x]+ "</td></tr>";

}//end loop

//########################

/*
answer += "<table>"

  answer += "</body></html>";


  var tryit = "<html><body bgcolor=yellow>"
      tryit += "wwords here "
      tryit += "</body></html>"
  document.getElementById("results").innerHTML = answer;
*/

  //document.getElementById("demo").innerHTML = answer;

/*
  //step 1: get the DOM object of the iframe. THIS IS IT
  var iframe = document.getElementById('iframe');

  var iframedoc = iframe.document;
  if (iframe.contentDocument)
    iframedoc = iframe.contentDocument;
  else if (iframe.contentWindow)
    iframedoc = iframe.contentWindow.document;

  if (iframedoc) {
    // Put the content in the iframe
    iframedoc.open();
    iframedoc.writeln(answer);
    iframedoc.close();
  } else {
   //do nohting
  }
  */

}//end funciton




  function show_trace() {
    var tryit = "<html><body bgcolor=yellow>"
        tryit += "wwords here "
        tryit += "</body></html>"
    document.getElementById("results").innerHTML = tryit;
  }



//replay_test.js//
// feb 24th, 2019
//the important thing to remember is that this is a debugging tool
// to replace pepperieng a program with printfs
// the point is to be able to see what the machine sees (vars)
// and see the trace path and be able to click on the web page tool
// and see where the program doesn't behave correctly and why
// all based on stored log files of every single var.

/*
obviously the machine is unaware of the running behavior from the code
but I will need to describe that too for reference.

The argument is looking at a web page with code that just ran
with no clue what worked and what didn't and why the code stopped
(if it stopped or bumped into a wayward return) It's key to
see anywhere and everywhere what each function is fed and what it
output values it creates.  So I need to describe what
is expected to happen for each scenario when code runs.

I will need to visually see the path with a blue trace along the
map design of the program's internal system (by level and clickabe)
and a red trace for something that is not supposed to happen
so if there is a divergence from the planned route - described as predefined function trace path

this should also be used for unit testing since that's a major part.

Further this is (I can already tell) going to morph into a
design building tool for the mechanics of how a program will work
and what it does - which is necessary tool. So we have two modes now.
So design with desired behaviors that can be searched to see if
they exist already - this needs to be hooked up to a search engine
and that way in the design process (top down Hoare and Brooks and Dijkstra)
errors in design are only discovered when code is written and tested.

The other issue that is critical to coding is understanding code
meaning what does it do , how does it work, what is each section supposed to do.
Dikjstra advocated pre-commenting before writing a chunk of code.
This needs to be part of the design tool.

And being able to view it by abstraction levels - so design is necessary
for this tool to view the code design from the higher human perspective
and Tony Hoare, Peter Naur, Dikstra stepwise refinement top down design
// this needs to be a top down design tool also to understand what's going on
from both the perspective of the human and the perspective of the machine in boolean logic.

The key phrase: I don't know what the code is doing - [supposed to be doing]
Dikustra function what it does for you, and how it works.

Reading code is harder than writing code. Joel Spolsky
really need a middle language for describing code from the human viewpoint perspective.



*/



//this is to detect boolean logic bugs and
// behavior design

//top down in order
// put each function data into an array that is numbered
// and dynamically created
// grab data from each function inpouts, outputs, function name
// which function called it, line number
// what function does task - what it's supposed to do
// how it worsk
//

//this
//phase one of debugger
// Dilbert "Won't compile cartoon"
//will need to show line number obviously
//so now I will track syntax errors which will pinpoint them
// will need try catches
// possible make a method to have these and turn them on and off

//Initially I was assuming that my code always compiles - which it doesn't

//I need to track syntax errors, type errors
// that show up in the console.
// which means that I need to
// do try catch and finally
// to sense them and store them
// so that I can show them for each
// function and for the hwole program
// based on where I am in the program
// because that way I am eliminating
// them right off the bat if
// the code won't compile if it's tripped up
// by syntax errors which is level one debugging
// that prevents code from running.


/*
won't compile message (Dilbert woman won't compile ey message cartoon )
Need to track reused code functions (and sections of code (orange) within functions) (obviously already debugged
So this will save time. show percent of functions reused
on new programs from previous programs. These need to be tagged gold.
reusing boolean logic to create machine behavior


*/

//there will be several different modes to view (views) of the code
// that are only possible for the human's persepctive - the machine
// only sees the source code (actually only the compiler does).

//so now this has morphed again to design level in Strawberry
// which will convert to psuedocode and this would then require
// a way of describing what tryihng to do and then matchedf with
// how it works  and then strawberry code using a knwoledgebase
// and search engine.

//intially this was just going to detect logic in code that was wrong
// based on the course through the program that it took based on traces
// and conditional decisions and then I just added detecting compile
// syntax errors and then I realized it would be useful as a design tool
// and now it's clear that designing is a time sync and needs to be reused
// and requires a way of designing a function faster based on the
// behavior that I am trying to create and as Brooks wrote the ONLY way
// to build software faster is by reducing the time spent THINKING
// and if it's possible think in terms of Alan Perlis
// What I want is a programming language where I can say what I wish done
// this way I can do designing and prevent design bugs through reuse
// I realize now that just focusing on logic bugs was too narrow and
// really debugging needs to be done at the design, building, and testing
// phases so this is growing in complexity.
// at the same time as programs grow managing the complexity becomes
// overwhelming and another bottleneck mentioned by Pixar
// was not being able to understand code is doing and how it works
// Brooks mentioned the necessity of knowing the purpose of functions
// A lecture on YouTube mentioned not only how, and what, but why something
// was designed to do something (thus the thinking of the programmer)
// will need to be embedded to follow the human logic behind doing something
// alas I will start with the logic and syntax portions of this
// and work on this in phases.


/*
[rather than how to do it] which is along the lines of Don Knuth at Stanford
rather than tell the computer what to do instead tell another human
what you want the computer to do [implied in English].
this of course is a difficult problem because another human has intelligence
and thinks in terms of running behavior and the machine only deals with
cold boolean logic and, or, not, true, false, if

*/


// Strawberry code design language high level expressive view of code
//based on human thinking a blend of literate and pseudocode
// called Strawberry Fields for the human to read code logic expressively
// though the machine doesn't get this perspective itself.
//it's essentiall the path through the forest and is the light in teh darkness
// to grasp what the code is going to do and it's expressed more Englishy
// but most importantly along the lines of how humans actually think
// as opposed to the straight cold boolean logic view that the machine sees


//this is a trail on the cliff to know precisely what code logic
// is with more expressive - John Backus said we need a pwerful new
// methodology in how we think about a program.
// Grace Hopper said - "the program exists at several levels
// This would act as a guide to understanding what the code is supossed to
// do and how it's initially designed to work


//with 600 English words ( not code by a different perspective
// perceptional view that makes more sense than true source code
// it's more human readable with implied meaning and is a design language
/*

trace through functions as they are called
// have a list table of order they are supposed to be triggered

document.getElementById("demo").innerHTML = "words!";


<p id="myP">words</p>

draw out diagram of design of small program to test
top down and the routes that are possible so an upside down tree essentially.

green light lights up for status for each function called
and when bad data detected with assertion turns light red

click on rectangle representing each function to see inputs vars and
output vars and explanation what it does and how it works
and pseudocode view toggleable and expressive Tahoe view too.
so I compare the design logic with the logic embedded in the code
so I will need to see the actual source code side by side with pseudocode
and human logic view


*/
