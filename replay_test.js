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
Need to track reused code functions (and sections of code (orange) within functions) (obviously already debugged
So this will save time. show percent of functions reused
on new programs from previous programs. These need to be tagged gold.
reusing boolean logic to create machine behavior 


*/


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