function ZipConsultation(event){ 
  event.preventDefault();

  const inputZipCode = document.querySelector('#form__zip-code').value;
  const zipCode = inputZipCode.replace("-", "");
  
  const url = 'https://viacep.com.br/ws/'+ zipCode +'/json/';  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);  

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
  if(xhr.status == 200){
    fillFields(JSON.parse(xhr.responseText));
  }       
}
xhr.send();
}
console.log(xhr.readyState, xhr.status)
}


function fillFields(json) { 
  document.querySelector('#form__street').value = json.logradouro;
  document.querySelector('#form__number').value = '-';
  document.querySelector('#form__district').value = json.bairro; 
  document.querySelector('#form__complement').value = json.complemento;
  document.querySelector('#form__city').value = json.localidade; 
  document.querySelector('#form__state').value = json.uf; }
