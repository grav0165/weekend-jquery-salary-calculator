$(document).ready(onReady);

let totalSalaries
function onReady(){

    $('#submit-button').on('click', salarySubmission);

}

function salarySubmission() {
    event.preventDefault();
    console.log('Salary Submission button clicked'); // tracking button click to confirm function working
    
}

// Create function to take in 5 pieces of information in 5 different text boxes
    // format the information (such as salary having $ in front)

// on click of submit the 5 pieces of information will be added to the table

// After storing 5 pieces of informatin to the DOM, 
// add 'annual salary' column up to monthly total amount at the bottom