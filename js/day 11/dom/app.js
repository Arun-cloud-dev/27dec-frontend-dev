//DOM malupulation 



const title = document.querySelector('#main-heading')
title.style.color ="red"



const listItems = document.querySelectorAll('.list-items');



for (i =0; i < listItems.length; i++){
    listItems[i].style.fontSize = "0.5rem"
}



//creating Elements 


const ul = document.querySelector('ul');

const li = document.createElement('li');

//add elements 

ul.append(li)


//modyfy the text 

li.innerText = "X-men"

li.classList.add("list-items")


li.classList(li.classList.contains("list-items"))


