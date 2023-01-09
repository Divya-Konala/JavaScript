let ele1 = (document.getElementsByTagName("h3")[2].te = "Hello!");
console.log(ele1);
let ele2 = document.querySelector("h1");
console.log(ele2.innerText);
console.log(ele2.textContent);

//taking input from span increment by 1 and put it inside span
function increment() {
  let element = document.querySelector("span");
  let value = element.innerText;
  value++;
  element.innerText = value;
}
increment();

function increment_input(){
    let element=document.querySelector("input");
    let val=element.value;
    let element_h3=document.createElement("h3");
    element_h3.innerText=++val;
    document.body.append(element_h3);
}
increment_input();