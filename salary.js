$(document).ready(onReady);

// create variables to hold submitted information
let fname ="";
let lname ="";
let idInput="";
let titleInput="";
let salaryInput="";
let totalSalaries=0;
let formatedSalaries=0;
let formatedTotal=0;
function onReady(){

    // Hey JQuery, on click, do salary submission function
    $("#submit-button").on("click", salarySubmission);
    
    // Hey JQuery, on click, do salary deletion function
    $("#employees-table").on("click", ".delete-button", deleteEntry);

}

function salarySubmission(event) {
    // preventdefault used to prevent HTML from reloading page
    event.preventDefault();
    console.log('Salary Submission button clicked'); // tracking button click to confirm function working

    // taking field input information and put into variables to process
    fname=$("#first-name-input").val();
    lname=$("#last-name-input").val();
    idInput=$("#idBoxInput").val();
    titleInput=$("#title-input").val();
    salaryInput=$("#annual-salary-input").val();
    salaryFormatted=(new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(salaryInput));

    // console log variables to confirm receiving input
    // console logging to confirm input received
    // console.log("name input,", fname);
    // console.log("Last name input,", lname);
    // console.log("ID input,", idInput);
    // console.log("title input,", titleInput);
    // console.log("Salary input,", salaryInput);

    // return text boxes to empty after submission
    $("#first-name-input").val('');
    $("#last-name-input").val('');
    $("#idBoxInput").val('');
    $("#title-input").val('');
    $("#annual-salary-input").val('');

    // if statement added to check that all fields must have an input to accept
    if(fname && lname && idInput && titleInput && salaryInput){
        $('#employees-table').append(`
            <tr>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${idInput}</td>
                <td>${titleInput}</td>
                <td class="annual-salary-item">${salaryFormatted}</td>
                <td><button class="delete-button">Delete</button></td>
            </tr>
        `)
    } else {
        console.log("Missing data in input field(s)")
    }

    // method to convert annual salary to monthly salary costs
    totalSalaries += Number(salaryInput/12) 

    // console.log to confirm receive salary information
    console.log(totalSalaries)

    // formating number to currency $$ 
    formatedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalSalaries);

    // write to page
    $('#total-monthly-salaries').text(formatedTotal)

}

function deleteEntry() {
    console.log('Delete Entry button clicked!')

    // I want to access the Annual Salary information
    // in order to manupilate the DOM's total monthly amount
    let rawSalary = $(this).parent().siblings().last().text()
    console.log(rawSalary)

    //converting currency amount back to raw number
    let converted = Number(rawSalary.replace(/[^0-9\.-]+/g,"")/12)
    // console.log(converted)

    // removing from total salaries amount
    totalSalaries -= converted;
    // console.log(totalSalaries)

    // format the raw number to a Currency format $$
    formatedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalSalaries);

    // console.log(formatedTotal);

    // write to bottom of page after removing
    $('#total-monthly-salaries').text(formatedTotal)

    // deletes the row of table of the button clicked
    $(this).parent().parent().remove();

}



// Create function to take in 5 pieces of information in 5 different text boxes
    // format the information (such as salary having $ in front)

// on click of submit the 5 pieces of information will be added to the table

// After storing 5 pieces of informatin to the DOM, 
// add 'annual salary' column up to monthly total amount at the bottom