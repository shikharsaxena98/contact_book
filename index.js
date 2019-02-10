window.onload=()=>{
  let submitButton=document.getElementById('submit-contact');
  submitButton.onclick=(e)=>{
    e.preventDefault();
    let dataFormat={'name':document.getElementById('name').value,
                   'phone':document.getElementById('number').value,
                    'address':[document.getElementById('address-1').value,document.getElementById('address-2').value,document.getElementById('address-3').value]
                   };
    //Get array from storage and push new contact
    if(localStorage.getItem('contact')==null){
      let newContactArr=[];
      newContactArr.push(dataFormat);
      localStorage.setItem('contact',JSON.stringify(newContactArr));
    } else {
      let newContactArr=JSON.parse(localStorage.getItem('contact'));
      newContactArr.push(dataFormat);
      localStorage.setItem('contact',JSON.stringify(newContactArr));
    }
    //Save the modified array back to Storage
  }

  function showExistingContacts(){
    let innerContent="<table><tr><th>Name</th><th>Phone Number </th><th>Address</th></tr>";
    let contactArr=JSON.parse(localStorage.getItem('contact'));
    for(let i=0;i<contactArr.length;i++){
      innerContent+="<tr><td>"+contactArr[i].name+"</td>"
    }
  }

}
