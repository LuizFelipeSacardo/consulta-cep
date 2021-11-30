function ZipConsultation(){ 
  const inputZipCode = document.querySelector('#form__zip-code').value;
  const zipCode = inputZipCode.replace("-", "");
  
  const url = 'https://viacep.com.br/'+ zipCode +'/json/';  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);  
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
  if(xhr.status == 200){
    console.log(xhr.responseText);
    }
  }     
}
xhr.send();
}
