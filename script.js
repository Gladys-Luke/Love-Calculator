function submit(){
    var name1 = document.getElementById("nameOne").value;
    var name2 = document.getElementById("nameTwo").value;
    var result = document.getElementById("result");

    var submit = Math.random() * 100;
    submit = Math.floor(submit) + 1;

    if (name1.length <= 2){
        alert("Enter at least 3 characters");
    }


    if ( submit >= 0 && submit <= 20){
        result.textContent = "Your love score is " + submit + "%." + " This love is not loving. You should consider another career "
    }
    if ( submit >= 21 && submit <= 30){
        result.textContent = "Your love score is " + submit + "%." + " This love is not loving. You should consider another career "
    }

    if ( submit >= 31 && submit <= 40){
        result.textContent = "Your love score is " + submit + "%." + " This love is an Agbado and cassava kinda love. "
    }

    if ( submit >= 41 && submit <= 50){
        result.textContent = "Your love score is " + submit + "%." + " If you stand strong, Your love no go minus.....Maybe! "
    }
    if ( submit >= 51 && submit <= 70){
        result.textContent = "Your love score is " + submit + "%." + " Your love is as strong as that between an owner and their pet! "
    }
    if ( submit >= 71 && submit <= 80){
        result.textContent = "Your love score is " + submit + "%." + " Your love is like bread and butter! "
    }
    if ( submit >= 81 && submit <= 90){
        result.textContent = "Your love score is " + submit + "%." + " Your love is unyielding in its loyalty and comfort. "
    }
    if ( submit >= 91 && submit <= 100){
        result.textContent = "Your love score is " + submit + "%." + " Made in Heaven! "
    }

   
    

}


