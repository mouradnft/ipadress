const submitBtn = document.getElementById("submitBtn")

const apaddress = ()=>{
    const ipValue = document.getElementById("pplInput").value
    ipadress(ipValue);
}

submitBtn.addEventListener("click",apaddress);


const ipadress = (ip)=>{
    const ipadress = ip.substring(0,3);
    let result = '';
    if (ipadress < 128) {
        result = "CLASS A"
    } 
        else if (ipadress >= 128 ) {
            result = "CLASS B"
        } 
    else if  (ipadress >= 192 ) {
       result = "CLASS C"
    }
    else {
        result =  'there is no such class for this '
    }
   
    document.getElementById('answear').innerText = result;
}



