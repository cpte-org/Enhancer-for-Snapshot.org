var ethereum_address = require('ethereum-address');


console.log("*************content***********");

let storage = chrome.storage.local;

let stateCheck = setInterval(()=>{
    if(document.readyState=="complete"){
        var el = document.createElement("div");
        var div = document.getElementsByClassName("text-center mb-4 mx-auto");
        div[0].insertAdjacentHTML("afterend", "<div id='eligibleSpaces'></div>");
        clearInterval(stateCheck);
    }
}, 100)
let eligibleSpacesModal;
function display(mode){
    eligibleSpacesModal = document.getElementById("eligibleSpaces");
    switch(mode) {
        case 0:
            storage.get((result)=>{
                if(result.Address){
                    eligibleSpacesModal.innerHTML = "Loading Spaces";
                }else{
                    eligibleSpacesModal.innerHTML = "<h1>Set Your Ethereum Address In The Extension's Popup ↗️</h1>";
                }
            });
            
            console.log("----Display : Placeholder----");
            break;
        case 1:
            eligibleSpacesModal.innerHTML = "Loading Spaces";
            //loading (loading animation until (storage.done), tail console logs)
            console.log("----Display : Loading----");
            break;
        default:
            eligibleSpacesModal.innerHTML = "<table id='spacesTable'></table>";
            let spacesTable = document.getElementById("spacesTable");
            let tableBody = mode.reduce((rows, nextRow) =>{
                return rows += 
                    '<tr>' + 
                    Object.keys(nextRow).reduce((cols, nextCol) => { 
                        return cols += '<th>' + nextRow[nextCol] + '</th>'
                    }, '') + 
                    '</tr>'
            }, '');
            spacesTable.innerHTML = tableBody;

            //eligibleSpacesModal.innerHTML = mode;
            //displaySpaces (flex box table: spaces.forEach(insertInTable)
            console.log("----Display : Spaces Table----");
            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png
      } 
}

const interval = setInterval(function() {
    if(document.getElementById("eligibleSpaces")){
        storage.get( (result) => {
            //console.log(result);
            if (result.done){
                display(result.Spaces);
                clearInterval(interval);
            }else{
                if (result.update){
                    display(1);
                    storage.set({"update": false}, () => {
                        console.log("[info]: 'Update' Flag Reset");
                    });
                }else if(result.update == null){
                    display(0);
                    //clearInterval(interval);
                }
            }
        });
    }
}, 1000);
;



//https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script

        
/*
fetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
  });
  */