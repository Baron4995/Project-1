let date = new Date();
let tdate = date.getDate();
let month = date.getMonth() + 1;
let year = date.getUTCFullYear();

if(tdate < 10){
    tdate = "0" + tdate;
}
if(month < 10){
    month = "0" + month;
}

let minDate = year + "-" + month + "-" + tdate;
let maxDate = year + "-" + 12 + "-" + 31
// let maxDate = new Date(new Date().getFullYear(), 11, 31);

document.getElementById("date").setAttribute("min", minDate);
document.getElementById("date").setAttribute("max", maxDate);

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error")

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^([A-Za-z])*\s{1}([A-Za-z])*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}