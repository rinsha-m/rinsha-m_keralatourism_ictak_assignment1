function noverify(){
    let phoneid = document.getElementById("PhoneNO");
    let nospan = document.getElementById("nospan");
    let phonefilter =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!phonefilter.test(phoneid.value)){
        nospan.innerHTML="<div style='width:350px;color:red;padding-left:10px;background-color:white;border:2px solid red;border-radius:5px'>Enter a valid phone number </div>"; 
            return false;
         }
       else{
        nospan.innerHTML="";
        return true;  
        }
}

function emailverify(){
    let emailId = document.getElementById("inputEmail");
    let emailspan = document.getElementById("emailspan");
    let emailfilter =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-])+\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(emailfilter.test(emailId.value)){
     emailspan.innerHTML="";
     return true;
    }
    else{
        emailspan.innerHTML="<div style='width:350px;color:red;padding-left:10px;background-color:white;border:2px solid red;border-radius:5px'>Enter a valid email address </div>";
        return false; 
    }
}

function passwordChanged() {
    var pwd = document.getElementById("inputPassword3");
    var checklength=document.getElementById("1");
    var checklowercase=document.getElementById("2");
    var checkuppercase=document.getElementById("3");
    var checknumber=document.getElementById("4");
    var checksymbol=document.getElementById("5");
    var strength = document.getElementById('passwordSpan');
    var mediumRegex = new RegExp("^(?=.{6,})((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[A-Z])).*$", "g");
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    
    if (pwd.value.length == 0) {
        strength.innerHTML = "<div style='width:350px;color:black;padding-left:10px;background-color:white;border:2px solid black;border-radius:7px'>Type Password</div>";
        
    } 
    else if (pwd.value.length == 8) {
        checklength.style.color="orange";
        return false;
        

    }else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = "<div style='width:350px;color:red;padding-left:10px;background-color:white;border:2px solid red;border-radius:5px'>Password must contain atleast 8 characters </div>";
        checklength.style.color="red";
        return false;
    }
    else if (strongRegex.test(pwd.value)) {
        checklength.style.color="green";
        checklowercase.style.color="green";
        checkuppercase.style.color="green";
        checknumber.style.color="green";
        checksymbol.style.color="green";
        strength.innerHTML = "";
        return true;
    }
    else if (mediumRegex.test(pwd.value)) {
        checklowercase.style.color="orange";
        checknumber.style.color="orange";
        checkuppercase.style.color="orange";
        checklength.style.color="orange";
        strength.innerHTML ="<div style='width:350px;color:orange;padding-left:10px;background-color:white;border:2px solid orange;border-radius:5px'>Password must contain atleast one number ,one lowercase and one uppercase</div>";
    }
     else {
        strength.innerHTML = "<div style='width:350px;color:red;padding-left:10px;background-color:white;border:2px solid red;border-radius:5px'> Weak Password!!</div>";
        
        checklowercase.style.color="red";
        checkuppercase.style.color="red";
        checknumber.style.color="red";
        checksymbol.style.color="red";
        return false;
    }
}

function passwordrecheck(){
    let recheck=document.getElementById("inputPassword4");
    let pwd = document.getElementById("inputPassword3");
    let passwordrecheckSpan=document.getElementById("passwordrecheckSpan");
    if(!(recheck.value === pwd.value))
    {
        passwordrecheckSpan.innerHTML="<div style='width:350px;color:red;padding-left:10px;background-color:white;border:2px solid red;border-radius:5px'> Password must be same!!</div>";
        return false;
    }
    else{
        return true;
    }
}
function formvalidate(){
    return(passwordrecheck() && emailverify() && noverify() && passwordChanged());
}
