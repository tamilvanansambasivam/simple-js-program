
function palindrome(value){

    let rValue = value.split("").reverse().join("");
    if(value==rValue){
        console.log("palindrome");
    }else{console.log("not a palindrome");}

}

