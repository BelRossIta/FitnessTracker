// Formula for percentage based lifts for training max: weight lifted x number of reps performed x .0333(this is the constant) + weight lifted
// example: for 275 for 8 reps - 275 x 8 x .0333 + 275 = 348. Round it up to 350 for simplicity
// Training Max is 85%-90% of the above number so, 350 x .9(this is the decimal for 90%) = 315 or 350 x .85(decimal form of 85%) = 295



/* I need a event listener that, when on click, changes the background color to another color when 'finished week' button is clicked
The 'finished week' button also will need to update the weight amount and the percentage/intensity either with innerText or with value because
I might have a text box in table data place. As well as targets the first tab again afterwards*/

const textColor = document.getElementById("tracker1G");
function weekChange(){
    textColor.style.backgroundColor="red";
}

/* The First Week will be 3 sets of 5; the Second week will be 3 sets of 3; the Third week will be 1 set of 5, 1 set of 3, 1 set of 1(5/3/1)
The Fourth week will be 3 sets of 5. This is the deload week*/ 