let noteListElement = document.getElementById("note-list")
console.log(notes)

for( item of notes ) {
    let div = document.createElement("div")
    div.setAttribute("class","note-item")

    let p = document.createElement("p")
    p.textContent = item.title

    div.appendChild(p)

    let anotherDiv = document.createElement("div")
    anotherDiv.setAttribute("class", "note-item-action")
   
    let editButton = document.createElement("button")    
    editButton.innerHTML = "Edit"
    editButton.setAttribute("class", "edit")
    editButton.setAttribute("id", "edit"+ item.unique)

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"    
    deleteButton.setAttribute("class", "delete")
    deleteButton.setAttribute("id", "delete"+ item.unique)

    anotherDiv.appendChild(editButton)
    anotherDiv.appendChild(deleteButton)

    div.appendChild(anotherDiv)

    noteListElement.appendChild(div)
} 
// noteListElement.appendChild

let newTabButtonElement = document.getElementById("new-tab")
newTabButtonElement.addEventListener("click", (e) => {
    // window.open("./create.html", '_blank').focus()
    // var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    window.open("http://www.cnn.com/", "CNN_WindowName", windowFeatures);
})