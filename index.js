//declare an array to store links
let myLeads = []

//declare fixed variables 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

//use presaved values, if any
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//save tab button
tabBtn.addEventListener("click", function(){
    //api to get current link 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
    
})

//save link, remove input text, save to localStorage, call renderLeads
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) ) 
    render(myLeads)
})

//making DOM
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
         <li>
              <a target='_blank' href='${leads[i]}'> 
                     ${leads[i]} 
              </a>
        </li>
        `  
    }
    ulEl.innerHTML = listItems  
}  

//delete all function
//dblclick is double click
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})