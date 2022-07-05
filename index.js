//declare an array to store links
let myLeads = []

//take data from localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )

//declare fixed variables 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//use presaved values, if any
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//save link, remove input text, save to localStorage, call renderLeads
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) ) 
    renderLeads()
})

//show links below
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems  
}  

//delete all function
//dblclick is double click
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})