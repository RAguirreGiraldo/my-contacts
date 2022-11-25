'use strict';

import Contact from './Contact.js'

document.getElementById('submit-btn').addEventListener("click", newContact);

function newContact(){
    let data = document.getElementById('entrytext').value;
    alert('output:' + JSON.stringify(data));
}

const data = document.getElementById('entrytext').value;
console.log(data);

let c1= new Contact('John','City','email');
console.log(c1);