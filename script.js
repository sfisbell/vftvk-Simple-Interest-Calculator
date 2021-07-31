function compute()
{
    var principalname = document.getElementById("principal");
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        alert("Enter a positive number");
        principalname.focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="<tab3></tab3>If you deposit <b> "+principal+",</b>\<br\><tab3></tab3>at an interest rate of <b>"+rate+"%</b>\<br\><tab3></tab3>You will receive an amount of <b>"+interest+"</b>,\<br\><tab3></tab3>in the year <b>"+year+"</b>\<br\>"

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        