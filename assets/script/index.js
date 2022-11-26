'use strict';

import Contact from './Contact.js'
document.getElementById('submit-btn').addEventListener("click", newContact);
let arrayObj=[] ;
let isValid = '';
const contactzone = document.getElementById('contactzone') ;

document.getElementById('submit-btn').addEventListener("click", newContact);

function validateQuantity(data) {    
    var arrayData = data.split(",");    

    if(arrayData.length < 3){
        isValid= 'Write all data required separated with commas';
    } else {
        //validar email
        alert(arrayData[2]);
        var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        alert(!regexp.test(arrayData[2]));
        if(!regexp.test(arrayData[2])){
            isValid = 'Email is not valid';
        }
    }
    
    return isValid != '' ? false : true;

}

function listContacts(){
    //create main div 
    var container = document.getElementById('contactZone');
    var div = document.createElement('div');
    div.classList.add('contact-item');
    div.innerHTML = `
        <p>Name : ${arrayObj[0].name} </p>
        <p>City : ${arrayObj[0].city} </p>
        <p>Email : ${arrayObj[0].email} </p>
    `;
    container.appendChild(div);

    
}

function newContact(){    
    let data = document.getElementById('entrytext').value;
    //validate data
    if (validateQuantity(data)){
        var arrayData = data.split(",");                 
        let contacto = new Contact(arrayData[0],arrayData[1],arrayData[2]);
        document.getElementById('message').innerHTML= "";
        arrayObj.unshift(contacto);
        console.log('objeto: ' , contacto);
        console.log('array: ' , arrayObj);
        
        //list contacts
        listContacts();

    }   else {
        document.getElementById('message').innerHTML= isValid;
        isValid='';
    }
}
