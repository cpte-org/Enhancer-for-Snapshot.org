 
//0x3AF9fE35D280ADA5a5edB1BEf3ED872a3231d73C
//0x0b87b7d6a2335f248599692ead6447d6ffb25b97





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
