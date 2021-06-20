 
//0x3AF9fE35D280ADA5a5edB1BEf3ED872a3231d73C
//0x0b87b7d6a2335f248599692ead6447d6ffb25b97


input = [0, 0.10626992561105207,0.21929824561403508,0.2254791431792559,0.23228803716608595,0.23894862604540024,0.2472187886279357,0.2518891687657431,0.38510911424903727,0.5305039787798408,0.5532503457814661,0.7204610951008645,0.7518796992481203,0.7836990595611284,0.8169934640522877,0.847457627118644,0.8849557522123894,0.927643784786642,0.9615384615384616,1.0101010101010102,1.0660980810234542,1.1363636363636365,1.1961722488038278,1.2722646310432568,1.358695652173913,2.366863905325444,2.5889967637540456,2.807017543859649,3.076923076923077,3.404255319148936,3.8461538461538463,4.891304347826087,5.660377358490567,8.148148148148149,11.214953271028037,14.457831325301203,19.35483870967742,30.76923076923077,60,80,100,]


var input = [0,1,2,5,7,80,90,100];
function curve(input){
  var output=[]; //Array starts at 0 and ends at 100 percent

  //Situation: Bghit npresante les valeurs sous forme de "Progress bar"
  //Problem: Bghithom les valeur ywelliw mentadmin (regular - steady progress)
  //Solution: Curve equation?

  return output;
}
















https://hub.snapshot.org/graphql?query=query%20Proposals%20%7B%0A%20%20proposals(%0A%20%20%20%20first%3A%2020%2C%0A%20%20%20%20skip%3A%200%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20space_in%3A%20%5B%22uniswap%22%5D%2C%0A%20%20%20%20%20%20state%3A%20%22active%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20orderBy%3A%20%22created%22%2C%0A%20%20%20%20orderDirection%3A%20desc%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20body%0A%20%20%20%20choices%0A%20%20%20%20start%0A%20%20%20%20end%0A%20%20%20%20snapshot%0A%20%20%20%20state%0A%20%20%20%20author%0A%20%20%20%20space%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=Proposals

/*
 pass spaces array

*/


query Proposals {
    proposals(
      first: 20,
      skip: 0,
      where: {
        space_in: ["uniswap"],
        state: "active"
      },
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      title
      body
      choices
      start
      end
      snapshot
      state
      author
      space {
        id
        name
      }
    }
  }


//sample response

{
    "data": {
      "proposals": [
        {
          "id": "QmZcfEhN6xx6mMyo6ins4pSMga7N3o14fW4VtFzYTRHuLj",
          "title": "Temperature Check: Raise the proposal quorum threshold",
          "body": "Raise the proposal quorum threshold from 40M because recent voting participation is much higher and there is a lot of UNI that has been delegated",
          "choices": [
            "Yes",
            "No"
          ],
          "start": 1624042800,
          "end": 1624402800,
          "snapshot": "12659711",
          "state": "active",
          "author": "0x070341aA5Ed571f0FB2c4a5641409B1A46b4961b",
          "space": {
            "id": "uniswap",
            "name": "Uniswap"
          }
        }
      ]
    }
  }



















/*
<div id="editView" class="page hidden">
          <div class="inputBox">
              <span>Address</span>
              <textarea name="ethAddress" required></textarea>
              <div id="error"></div>
            </div>
  
          <div class="actionBtns centered">
            <span id="set">SET</span>
            <span id="cancel">CANCEL</span>
          </div>
        </div>


*/






/*
window.addEventListener("load", function(event) {
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var el = document.createElement("div");
    //el.innerHTML = key + " " + space[key].name + " " + space[key].symbol;
    el.innerHTML = "*********CONTENT SCRIPT************";

    var div = document.getElementsByClassName("mb-4");
    //https://worker.snapshot.org/mirror?img=https%3A%2F%2Fraw.githubusercontent.com%2Fsnapshot-labs%2Fsnapshot-spaces%2Fmaster%2Fspaces%2Faragon%2Fspace.png

    insertAfter(div[0], el);
  });
*/
/*
let stateCheck = setInterval(()=>{
    
    if(document.readyState=="complete"){
        console.log("Page ready");
        var x = document.getElementsByTagName("BODY")[0]; 
        console.log(x);
        var div = document.getElementsByClassName("mb-4");
        console.log(div);
        clearInterval(stateCheck);
    }
    
}, 100) 
*/


  /*

  storage.get(value1, (result) => {
    console.log(result.name);
  });
  */
  /*
  storage.clear(() => {
    console.log('Everything was removed');
  });
  */
     /*
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is.`
      );
      console.log(newValue);


    }

*/


/*    
    var modal = document.getElementById("eligibleSpaces");
    var ele = {
        //buttons
        set: document.getElementById('set'),
        //refresh: document.getElementById('refresh'),
        //error messages
        error: document.getElementById('error'),
        //text divs
        //address: document.getElementById('address'),
        //inputs
        ethAddress: document.querySelector('[name="ethAddress"]'),
      }

      ele.set.addEventListener('click', ()=> {
        ethAddress = ele.ethAddress.value;
        //console.log("address set");
        if(ethereum_address.isAddress(ethAddress)){
          console.log("valid address");

          storage.clear();
          storage.set({"Address": ethAddress}, () => {
            console.log('Stored name: ' + ethAddress);
          });
          refreshPage();
        }
          else
            ele.error.innerHTML = "invalid address";
      });
*/

/*
function setAddress(addr){
    console.log("setAddress");
}
*/
//document.getElementById("eligibleSpaces").innerHTML = '<span>Address</span><textarea name="ethAddress" required></textarea><div id="error"></div><input type="submit" value="submit" onclick="setAddress();" />';
