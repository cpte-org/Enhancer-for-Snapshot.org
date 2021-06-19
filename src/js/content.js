console.log("*************content***********");

let storage = chrome.storage.local;

function displayLoading(){
    /*
        dinamicaly progressive loading bar
    */
    console.log("loading");
}
function displaySpaces(spaces){ //spaces[]
    /*
        Flex box table
    */
    console.log(spaces);
}

const interval = setInterval(function() {
    storage.get( (result) => {
        console.log(result);
        if (result.done){
            displaySpaces(result.Spaces);
            clearInterval(interval);
        }else{
            if (result.update == true || result.update == null){
                displayLoading();
                storage.set({"update": false}, () => {
                    console.log("[info]: 'Update' Flag Reset");
                });
            }
        }
    });
}, 1000); //Every 1000ms = 1sec
;


/*
const appendSpace = function(space) {
    key = Object.keys(space)[0];

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var el = document.createElement("div");
    el.innerHTML = key + " " + space[key].name + " " + space[key].symbol;

    var div = document.getElementsByClassName("mb-4");
    https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png

    insertAfter(div[0], el);

}
*/
//https://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script

        
/*
fetch(chrome.runtime.getURL('../content-script/modal.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
  });
  */