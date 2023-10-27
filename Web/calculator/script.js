let inputBox = document.getElementById('display');
console.log(inputBox);
let buttons = document.querySelectorAll('button');
console.log(buttons);
let string='';

buttons.forEach((ele)=>{
  ele.addEventListener('click',(e)=>{
    if(e.target.innerText == '='){
      string = String(eval(string));
      inputBox.value = string;
    }
    else if(e.target.innerText=='AC'){
      string='';
      inputBox.value=string;
    }
    else{
      string+=e.target.innerText;
      inputBox.value=string;
    }
  })
})