console.log("*************content***********");
const storage = chrome.storage.local;

const endpoint = "https://hub.snapshot.org/graphql";

var progress=[];
progress[1]=0;

let stateCheck = setInterval(()=>{
    if(document.readyState=="complete"){
        var el = document.createElement("div");
        var div = document.getElementsByClassName("text-center mb-4 mx-auto");
        div[0].insertAdjacentHTML("afterend", "<div id='eligibleSpaces' class='px-0 px-md-4 container-lg mx-auto'></div>");
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
        case 1: //  Loading View
            eligibleSpacesModal.innerHTML = "Loading Spaces";
            if((progress[0]+progress[1])>0)
                //https://codepen.io/tag/progressbar?cursor=ZD0xJm89MCZwPTI=
                console.log("Total Progress = "+(progress[0]+progress[1])*100)
            //To-Do: tail console logs
            break;


            
        default: // Display Spaces
            //eligibleSpacesModal.innerHTML = "<table id='spacesTable'></table>";
            let spacesTable = document.getElementById("spacesTable");
            let finalArr = [];
            let i = mode.length;
            let eligibleSpaceModal;
            
            function displayPatch(){

               finalArr.forEach((space)=>{
                eligibleSpaceModal = document.createElement("ESM");
                space = '<a href="#/'+space.key+'" class="">                    <div class="col-12 col-lg-3 pr-4 float-left">                     <div                      class="                       border-top border-bottom border-md                       rounded-0 rounded-md-2                       mb-4                       block-bg                       text-center                       extra-icon-container                      "                      style="height: 250px; margin-bottom: 24px !important;"                     >                      <!---->                      <div class="p-4">                       <span class="position-relative d-inline-block"                        ><span                         class="Counter position-absolute top-4 right-0 bg-green"                         data-v-512871cb=""                         >1</span                        ><span class="d-inline-block v-align-middle line-height-0 my-3"                         ><span                          ><img                           src="https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2F'+space.key+'%2Fspace.png"                           class="circle border line-height-0 v-align-middle"                           style="width: 98px; height: 98px;" /></span></span></span                       ><button class="extra-icon extra-icon-off text-gray" data-v-b9b5feee="">                        <i                         class="iconfont iconfavorite-off"                         data-v-031ff5a7=""                         data-v-b9b5feee=""                         style="font-size: 22px; line-height: 22px;"                        ></i>                       </button>                       <div class="">                        <h3>'+space.name+'</h3>                        <div class="text-gray">'+space.symbol+'</div></div></div></div></div></a>';
                eligibleSpaceModal.innerHTML = space;
                eligibleSpacesModal.appendChild(eligibleSpaceModal);
               });
               document.createElement("br")

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
                        if(i==finalArr.length)displayPatch();
                    });
            });
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