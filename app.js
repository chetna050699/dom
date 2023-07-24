//DOM MANIPULATIONS

// dom methods -> 

const title=document.getElementById('main-heading');
console.log(title);


const listItem=document.getElementsByClassName('list-items');
console.log(listItem);

const listItems=document.getElementsByTagName('li');
console.log(listItems);


const container=document.querySelector('div');
console.log(container);

const containers=document.querySelectorAll('div');
console.log(containers); 




// dom css properties->



const title=document.querySelector('#main-heading');
title.style.color='green';


const listItems=document.querySelectorAll('list-items');
listItems.style.fontSize='10rem';


//creating elements
const ul=document.querySelector('ul');
const li=document.createElement('li');

//appending elements
ul.append(li);

//modifying the text
li.innerText='arrogant';

//modifying attributes and classes

li.classList.remove('list-items');

//Remove elements

li.remove();



//Traversing the Dom

//parent Node traversAL

let ul=document.querySelector('ul')
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor='blue'

console.log(ul.previousSibling);
console.log(ul.nextSibling);

const div=document.querySelector('div');
console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);



//Event Listners

//element.addEventListeners("click",function);

const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert('I love Reactjs')
}

buttonTwo.addEventListener("click",alertBtn);

const newBackgroundColor=document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor="Green"

}

newBackgroundColor.addEventListener("mouseover",changeBgColor);





