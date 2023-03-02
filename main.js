
function myFunction(){
    let userInput = document.getElementById("dob").value;
    let empty = document.getElementById("div"); 
    let empty1 = document.getElementById("div1");
    let empty2 = document.getElementById("div2");
    let styleDiv = document.querySelector(".emptyDivs")

    let date = new Date(userInput);

    let name = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    //get year:

    let today = new Date();
    let nowYear = today.getFullYear();
    let value = nowYear - year;
    empty.innerHTML = `${value}   YEAR`;

    //get month:

    let todayMonth = new Date();
    let nowMonth = todayMonth.getMonth();
    let valueMonth = nowMonth - month;
    if(valueMonth < 0){
        empty1.innerHTML = `${valueMonth * -1} MONTH`; 
    }
    else{
        empty1.innerHTML = `${valueMonth} MONTH`; 
    }

    //get date:

    let todaydate = new Date();
    let nowdate = todaydate.getDate();
    let valuedate = nowdate - name;
    if(valuedate < 0){
        empty2.innerHTML =`${valuedate * -1} DAYS`; 
    }
    else{
        empty2.innerHTML =`${valuedate} DAYS`; 
    }
    
    styleDiv.style.opacity = "1";

}

