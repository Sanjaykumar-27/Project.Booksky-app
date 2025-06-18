//selecting popup box , popup overlay by using document.querlSelector because i created a class
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox =  document.querySelector(".popup-box")
var plusbutton = document.getElementById("add-popup-button")

// adding EventListner to plusbutton with Anonymous function , and changing the display- none too Block

plusbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//selecting cancel button

/*cancelbutton.addEventListener("clicl",function(event){
    event.preventDefault()  --- cancel the refresh, while clicking the cancel button
*/


var cancelbutton = document.getElementById("cancel-button")
 
cancelbutton.addEventListener("clicl",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selectcontainer,add-button,book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var addbutton = document.getElementById("add-button")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbutton.addEventListener("click" ,function(event){
 event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","book-container")
 div.innerHTML=`<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deletebook(event)">Delete</button>`   
 container.append(div)
 popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}