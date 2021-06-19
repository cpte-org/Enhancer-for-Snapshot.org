var ethereum_address = require('ethereum-address');

export default function () {

  var ethereum_address = require('ethereum-address');
  let storage = chrome.storage.local;

  const ele = {
    //views
    main: document.getElementById('mainView'),
    edit: document.getElementById('editView'),
    //buttons
    add: document.getElementById('add'),
    set: document.getElementById('set'),
    cancel: document.getElementById('cancel'),
    change: document.getElementById('change'),
    refresh: document.getElementById('refresh'),
    //attributes
    hidden: document.getElementById('hidden'),
    //error messages
    error: document.getElementById('error'),
    //text divs
    address: document.getElementById('address'),
    value: document.getElementById('value'),
    //inputs
    ethAddress: document.querySelector('[name="ethAddress"]'),
  }
  
  let ethAddress, balance;
  
  //views
  const changePage = view => {
    switch (view) {
      case 'main':
      ele.edit.classList.add('hidden');
      ele.main.classList.remove('hidden');
        break;
      case 'default':
      storage.get( (result) => {
        console.log(result);
        address.innerHTML = result.Address;
        //value.innerHTML = "USD "+result.spaces;
      });


      ele.edit.classList.add('hidden');
      ele.main.classList.remove('hidden');
      ele.add.classList.add('hidden');
      ele.address.classList.remove('hidden');
      ele.value.classList.remove('hidden');
      ele.change.classList.remove('hidden');
      ele.refresh.classList.remove('hidden');
        break;
      case 'edit':
      ele.main.classList.add('hidden');
      ele.edit.classList.remove('hidden');
        break;
    }
  }

  //save button and input validation
  
  ele.set.addEventListener('click', ()=> {
    ethAddress = ele.ethAddress.value;
    //console.log("address set");
    if(ethereum_address.isAddress(ethAddress)){
      //console.log("valid address");
      changePage("default");
      /*
        Refresh snapshot.org page if open
        auto-close popup
      */
      storage.clear();
      storage.set({"Address": ethAddress}, () => {
        console.log('Stored name: ' + ethAddress);
      });
    }
      else
        ele.error.innerHTML = "invalid address";
  });
  
  //refresh button
  
  ele.refresh.addEventListener('click', ()=> {
    console.log("'refresh' clicked");
    //browser.runtime.sendMessage({refresh: true});
  });
  
  //add button
  
  ele.add.addEventListener('click', ()=> {
    changePage("edit");
  });
  
  //cancel button
  
  ele.cancel.addEventListener('click', ()=> {
    changePage("main");
  });
  
  //change button
  
  ele.change.addEventListener('click', ()=> {
    changePage("edit");
  });

  storage.get( (result) => {
    console.log(result);
    if(result.Address)
      changePage("default");
    else
      changePage("main");
  });

  changePage("main");
};
