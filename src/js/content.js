console.log("*************content***********");
const storage = chrome.storage.local;

const endpoint = "https://hub.snapshot.org/graphql";

var progress=[];
progress[1]=0;

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
        case 0: // PlaceHolder: Set Address
                    eligibleSpacesModal.innerHTML = "<h1>Set Your Ethereum Address In The Extension's Popup ↗️</h1>";
            break;
        case 1: //Loading View
            eligibleSpacesModal.innerHTML = "Loading Spaces";
            if((progress[0]+progress[1])>0)
                //https://codepen.io/tag/progressbar?cursor=ZD0xJm89MCZwPTI=
                console.log("Total Progress = "+(progress[0]+progress[1])*100)
            //To-Do: tail console logs
            break;
        default:
            eligibleSpacesModal.innerHTML = "<table id='spacesTable'></table>";
            let spacesTable = document.getElementById("spacesTable");
            let finalArr = [];
            let i = mode.length;

            function displayPatch(){
                let tableBody = finalArr.reduce((rows, nextRow) =>{
                    return rows += 
                        '<tr>' + 
                        Object.keys(nextRow).reduce((cols, nextCol) => { 
                            return cols += '<th><a href="https://snapshot.org/#/'+nextRow.key+'">' + nextRow[nextCol] + '</a></th>'
                        }, '') + 
                        '</tr>'
                }, '');
                spacesTable.innerHTML = tableBody;
            }

            mode.forEach((space)=>{
                fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: `query
                        Proposals {
                            proposals(
                            first: 20,
                            skip: 0,
                            where: {
                                space_in: ["${space.key}"],
                                state: "active"
                            },
                            orderBy: "created",
                            orderDirection: desc
                            ) {
                            id
                            space {
                                id
                                name
                            }
                            }
                        }` 
                    }),
                    })
                    .then(res => res.json())
                    .then(res => {
                        space.numProposals = res.data.proposals.length;
                        finalArr.push(space);
                        progress[1]=finalArr.length/i;
                        //console.log("Progress[1] = "+progress[1]);
                        if(i==finalArr.length)displayPatch();
                    });
            });
            //console.log(finalArr);

            

            //displaySpaces (flex box table: spaces.forEach(insertInTable)
            console.log("----Display : Spaces Table----");
            //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png
      } 
}

const interval = setInterval(function() {
    if(document.getElementById("eligibleSpaces")){
        storage.get( (result) => {

            if(result.Address){
                if (result.done){
                    display(result.Spaces);
                    clearInterval(interval);
                }else{
                    display(1);
                    if (result.Spaces){
                        progress[0] = result.Spaces.length/result.spacesCounter; //spaces progress
                        //console.log("Progress[0] = "+progress[0]);
                    }
                        
                }
            }else{
                display(0);
            }
        });
    }
}, 1000);
;
/*
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
*/