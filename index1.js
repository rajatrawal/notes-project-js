showNotes()
document.getElementById("addButton").addEventListener("click", function (e) {
    let addText = document.getElementById("addTxt");
    let addTital = document.getElementById("exampleFormControlInput1");
    let notesText = localStorage.getItem("notesText");
    
    let notesTextObj;
    if (notesText == null) {
        notesTextObj = [];

    }
    else {
        notesTextObj = JSON.parse(notesText);


    }
    obj = {
        tital: addTital.value,
        text: addText.value
    }
    notesTextObj.push(obj);
    localStorage.setItem("notesText", JSON.stringify(notesTextObj))

    addText.value = "";
    addTital.value = "";
    showNotes()

});
function showNotes() {
    let notesText = localStorage.getItem("notesText");
    let notesTextObj;
    if (notesText == null) {
        notesTextObj = [];

    }
    else {
        notesTextObj = JSON.parse(notesText);

    }
    let months12 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let html = "";
    let titals = "";
    let nowDate = new Date();
    let date = nowDate.getDate();
    let month = nowDate.getMonth();
    let year = nowDate.getFullYear();
    let cardDate = `${date} ${months12[month]} ${year}`



    notesTextObj.forEach(function (element, index) {
        html += `
                <div class="card mx-2 my-2" style="width: 18rem;">
          <div class="card-body">
          <p align="right" style="color:choklate" >   ${cardDate} </p>
          <h5 class="card-title"  >${element.tital}</h5>  
            <p class="card-text">${element.text}</p>
            <button  class="btn btn-info" onclick="deleteNote(${index})">Delete Note</button> 
          </div>
        </div>
                `
    })



    let notesElement = document.getElementById("notes");
    if (notesTextObj.length != 0) {
        notesElement.innerHTML = html
    }
    else {
        notesElement.innerHTML = "<h5>Yet You Have Not Created Any <b>Note</b> !</h5>";
    }
};
function deleteNote(index) {
    let notesText = localStorage.getItem("notesText");
    let notesTital = localStorage.getItem("notesTital");
    if (notesText == null) {
        notesTextObj = [];

    }
    else {
        notesTextObj = JSON.parse(notesText);

    }
    notesTextObj.splice(index, 1);
    localStorage.setItem("notesText", JSON.stringify(notesTextObj))

    showNotes();


};
let search = document.getElementById("searchTxt");
search.addEventListener("input", function (e) {
    let i = 0
    inputValue = search.value.toLowerCase();

    cards = document.getElementsByClassName("card mx-2 my-2");
    Array.from(cards).forEach(function (element) {
        a = element.getElementsByClassName("card-text")[0];
        b = element.getElementsByClassName("card-title")[0];
        if (a.innerText.toLowerCase().includes(inputValue) || b.innerText.toLowerCase().includes(inputValue)) {
            element.style.display = "block";
            i++;
            document.getElementById("heads5").style.display = "none";
        }
        else {
            element.style.display = "none";


        }
        if (i == 0) {
            document.getElementById("heads5").style.display = "block";


        }
    })
});

