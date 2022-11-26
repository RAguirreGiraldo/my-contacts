'use strict';

import Contact from './Contact.js'
document.getElementById('submit-btn').addEventListener("click", newContact);

let arrayObj=[] ;
let errormsm = '';

const contactzone = document.getElementById('contactzone') ;

document.getElementById('submit-btn').addEventListener("click", newContact);

/* Function validate data and email*/
function validateQuantity(data) {    
    let arrayData = data.split(",");    

    if(arrayData.length < 3){
         errormsm = 'Write all data required separated with commas';
    } else {
        let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexp.test(arrayData[2].trim())){
            errormsm = 'Email is not valid';
        }
    }    
    return errormsm != '' ? false : true;

}

/* Function Organize Contact*/
function listContacts(){
    let container = document.getElementById('contactZone');
    let div = document.createElement('div');
    div.classList.add('contact-item');
    div.innerHTML = `
        <p>Name : ${arrayObj[0].name} </p>
        <p>City : ${arrayObj[0].city} </p>
        <p>Email : ${arrayObj[0].email} </p>
    `;
    container.prepend(div);
}

/* Function New Contact*/
function newContact(){    
    let data = document.getElementById('entrytext').value;
    //validate data
    if (validateQuantity(data)){
        let arrayData = data.split(",");                 
        let contact = new Contact(arrayData[0],arrayData[1],arrayData[2]);
        document.getElementById('message').innerHTML= "";
        arrayObj.unshift(contact);
        console.log('objeto: ' , contact);
        console.log('array: ' , arrayObj);
        
        listContacts();

    }   else {
        document.getElementById('message').innerHTML= errormsm;
        errormsm='';
    }
}
