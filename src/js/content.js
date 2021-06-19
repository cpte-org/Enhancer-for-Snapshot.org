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


function display(mode){
    switch(mode) {
        case 0:
            console.log("Placeholder ( setAddress (address and submit button form)");
            break;
        case 1:
            console.log("loading (loading animation until (storage.done), tail console logs)");
            break;
        default:
            console.log("displaySpaces (flex box table: spaces.forEach(insertInTable))");
            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png
      } 
}

const interval = setInterval(function() {
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
            }
        }
    });
}, 1000);
;



//https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script

        
/*
fetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
  });
  */