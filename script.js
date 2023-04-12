function getMaxDate(){
    // this function gets the max date so that the person age is 18+
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if(day<10){
        day = 0+`${day}`;
    }
    if(month<10){
        month = 0 + `${month}`;
    }
    year = year - 18;
    return `${year}-${month}-${day}`;
}


const birthDateContainer = document.querySelector('#birth-date-container');

let birthDateInput = document.createElement('input');
birthDateInput.type = "date";
birthDateInput.id = "bd";
birthDateInput.name = "bd";
birthDateInput.min = "1900-01-01";
birthDateInput.max = getMaxDate();

birthDateContainer.appendChild(birthDateInput);