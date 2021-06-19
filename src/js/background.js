//TODO: remove
import '../img/icon-128.png'
import '../img/icon-34.png'
//end TODO

console.log("*************background***********");

/*
    Save results in extension storage for future retrieval
    Refresh button to add new spaces to extension storage
*/
//To-Do
//Firefox compatibility
//import browser from "browser-polyfill.js";

import snapshot from '@snapshot-labs/snapshot.js';
let storage = chrome.storage.local;


const voterAddr = "0x3AF9fE35D280ADA5a5edB1BEf3ED872a3231d73C";
const spamList = ["bitdecay.eth", "yinhexi.eth", "vol.eth", "vasily.eth", "0xdef1.eth", "devcondemo.eth", "fabien.eth", "thanku.eth", "bonustrack.eth", "snapshot.rupaya.eth", "0xEaDC218Ac4cB7895a5A56e6484646b48f841C45a.eth", "abstrakt.eth", "aevolve.eth", "afterparty.eth", "alexx855.eth", "alicehe.eth", "ampled.eth", "anshiny.eth", "apestreet.eth", "aqualair.eth", "armorgov.eth", "awsl.eth", "bangrocks.eth", "beatsdao.eth", "becoswap.eth", "boardroomlabs.eth", "brt.otoco.eth", "buche.eth", "changbinhe.eth", "changfan.eth", "charged.eth", "compgov.eth", "compoundgrants.eth", "coopnetwork.eth", "covalenthq.eth", "creaton.eth", "cryptfi.eth", "dappchaser.eth", "delph.eth", "dfking.eth", "domfi.eth", "dozerz.eth", "easybake.eth", "ecm.eth", "ensuser.eth", "everframe.eth", "fengyang.eth", "gokai.eth", "grantcomp.eth", "guaini.eth", "handao.eth", "impossiblefinance.eth", "impossibleobject.eth", "isat.eth", "koshik.xyz", "kuko.eth", "ladz.eth", "legodao.eth", "legt.eth", "lowb.eth", "mintlaab.eth", "mort.eth", "multiobjekt.eth", "opanda.eth", "optyfi.eth", "orangecats.eth", "parallaxprotocol.eth", "pascall.eth", "phuture.eth", "pineappler.eth", "polkaflare.eth", "pollendefi.eth", "qilintoken.eth", "sandglass.eth", "smooty.eth", "socks-gov.eth", "sovi.eth", "stakingcapital.eth", "starthaus.eth", "stonedefi.eth", "supernovacash.eth", "supersam.eth", "test.alirun.eth", "thescientificblock.eth", "troylee.eth", "ufode.eth", "uni.meme0xb1.eth", "wanxutao.eth", "wenchao.eth", "zaplabs.eth", "zhusun.eth", "🍯dao.eth"];

let key=null;

//TODO: migrate function to utils/objectExtractor.js
// input object, returns subobjects []
function subObjs2Arr(obj) {
    let subObjArr = [];
    for (const [key, value] of Object.entries(obj)) {
        subObjArr.push({
            [key]: value
        });
    }
    return subObjArr;
}

let spaceData = {} ;
var obj;
let end;



function appendSpace(space) {
    
    key = Object.keys(space)[0];
    spaceData = {"key": key , "name": space[key].name, "symbol": space[key].symbol}; // Todo: add image link

    storage.get( (result) => {
        
        if(result.Spaces){
            result["Spaces"].push(spaceData);
            storage.set(result, () => {
                //console.log("----------");
                //console.log(result);
            });
            storage.set({"update": true}, () => {
                console.log('[info]: New Space Appended to Store');
            });
            
            
        }else{
            storage.set({"Spaces": [spaceData]}, () => {
                console.log('[info]: Initiate store');
              });
        }
      });
      
}



function fetchEligibleSpaces(address){
    fetch('https://hub.snapshot.org/api/spaces')
    .then(res => res.json())
    .then((spaces) => {

        spaces = subObjs2Arr(spaces);
        end=spaces.length-spamList.length;
        console.log("Number of Spaces: ",end);
        
        spaces.forEach(space => {

            
                    
            key = Object.keys(space)[0];
            if (spamList.indexOf(key) < 0) {

                let network = "1";
                let provider = snapshot.utils.getProvider(network);

                snapshot.utils.getScores(
                    key,
                    space[key].strategies,
                    network,
                    provider,
                    [address],
                    "latest"
                ).then(scores => {
                    --end;
                    if(end==0){
                        console.log("end of spaces[]");
                        storage.set({"done": true}, () => {
                            console.log('[info]: All Spaces Appended to Store');
                        });
                    }

                    for (var i = 0; i < scores.length; i++) {
                        if (!isNaN(Object.values(scores[i])) && Object.values(scores[i]) != 0) {
                            appendSpace(space);
                            break;
                        }
                    }
                })
                .catch(err => {
                    --end;
                    if(end==0){
                        console.log("end of spaces[]");
                        storage.set({"done": true}, () => {
                            console.log('[info]: All Spaces Appended to Store');
                        });
                    }
                    console.error(err);
                });
            }
            
            
            
            
        });
    })
    .catch(err => console.error(err));

}

let newAddr=null;

chrome.storage.onChanged.addListener(function (changes, namespace) {
    newAddr = changes["Address"].newValue;
    if(newAddr)
        fetchEligibleSpaces(newAddr);
  });
