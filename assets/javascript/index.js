function CEPConsultation(){ 
  const inputCEP = 13990000; //document.querySelector('#form__CEP').value;
  let saidaTeste = document.querySelector('#teste');  
  
  const url = 'https://viacep.com.br/'+ inputCEP +'/json/';  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);  
  xhr.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
  if(xhr.status == 200)
    saidaTeste.innerText = xhr.responseText;
    }     
  }
xhr.send();
}
