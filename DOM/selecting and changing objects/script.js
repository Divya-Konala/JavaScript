//selecting elements as objects
// console.log(document.body.children.greeting);//accessing element as id object

//changing inner text
// document.body.children.greeting.innerText="Bye!";
// document.body.children.greeting.textContent="Byeeeeee!";
// document.getElementById("greeting").textContent="Hello!";
// document.body.children.greeting.innerHTML="<b>Byeeee!</b>";

//accessing elements by ID: if there are two or more elements with the same ID, it will return the first element with that ID
// console.log(document.getElementById("two"));

//accessing elements with tagname: if there are more than one element with the same tag name, it returns an array of elements with the same tagname
// console.log(document.getElementsByTagName("div"));

//to access elements by the index or in order
// console.log(document.getElementsByTagName("div").item(0));
// console.log(document.getElementsByTagName("div").item(1));
// console.log(document.getElementsByTagName("div").item(2));

//accessing elements using namedItem
// console.log(document.getElementsByTagName("div").namedItem("one"));

// console.log(document.getElementsByTagName("h1"));

//store the elements with same tagname in an array and print the middle element
// let elements=document.getElementsByTagName("div");
// console.log(elements.item(1));

//Accesing elements with class name

// console.log(document.getElementsByClassName("example"));

//store the elements with same class name in an array and print the middle element
// elements=document.getElementsByClassName("example");
// console.log(elements.item(0));
// console.log(elements.item(1));

//Accessing elements using CSS Selector
//if more than one elements are there with the same querySelector, the first element is selected
// console.log(document.querySelector("div"));
//select div element with class as something
// console.log(document.querySelector("div.something"));
//select div element with id as two
// console.log(document.querySelector("div#two"));

//querySelector with classname
// console.log(document.querySelector(".something"));

//querySelector with id
// console.log(document.querySelector("#two"));

//practice exercise 10.5
console.log(document.querySelector(".practice"));
let elements=document.querySelectorAll(".practice");
console.log(elements);
for(i=0;i<elements.length;i++){
    console.log(elements.item(i));
}

// console.log(document.querySelectorAll("div").item(2));