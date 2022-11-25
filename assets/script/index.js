'use strict';

import Contact from './contact'

document.getElementById('submit-btn').addEventListener("click", newContact);


function validateQuantity(data) {
    let isValid = 'Please type the requested data separated by commas';
    let arrayData = data.split(",");    

    
    if(arrayData.length <3){
        isValid= '';
    } else {
        //validar email
        let position = arrayData[2].search("@");
        if (position == -1){
            isValid= 'The email is not valid, please check it.';
        }
    }
    return isValid != '' ? false : true;

}


function newContact(){
    
    let data = document.getElementById('entrytext').value;
    //validate data
    if (validateQuantity(data)){
        console.log('registro valido');        
    } else {
        console.log('errado');
    }
}

