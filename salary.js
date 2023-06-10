$(document).ready(onReady);

// create variables to hold submitted information
let fname ="";
let lname ="";
let idInput="";
let titleInput="";
let salaryInput="";
let totalSalaries=0;
let formatedSalaries=0;
function onReady(){

    $("#submit-button").on("click", salarySubmission);

    $("#employees-table").on("click", ".delete-button", deleteEntry);

}

function salarySubmission(event) {
    event.preventDefault();
    console.log('Salary Submission button clicked'); // tracking button click to confirm function working

    fname=$("#first-name-input").val();
    lname=$("#last-name-input").val();
    idInput=$("#idBoxInput").val();
    titleInput=$("#title-input").val();
    salaryInput=$("#annual-salary-input").val();
    salaryFormatted=new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(salaryInput);

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
    totalSalaries += Number(salaryInput) // console.log to confirm receive salary information
    console.log(totalSalaries)
    formatedSalaries = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalSalaries);
    $('#total-monthly-salaries').text(totalSalaries)

}

function deleteEntry() {
    console.log('Delete Entry button clicked!')
    
    
    $(this).parent().parent().remove();
    // I want to access the Annual Salary information
    // in order to manupilate the DOM's total monthly amount

    // totalSalaries -= $(this.annual-salary-item).siblings()
    // console.log(totalSalaries)
}

// Create function to take in 5 pieces of information in 5 different text boxes
    // format the information (such as salary having $ in front)

// on click of submit the 5 pieces of information will be added to the table

// After storing 5 pieces of informatin to the DOM, 
// add 'annual salary' column up to monthly total amount at the bottom