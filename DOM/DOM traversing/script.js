console.log(document.body);

//TOP-DOWN APPROACH (for finding children)

//to find treasure using children
console.log(
  document.body.children.forest.children.tree2.children.shruberry.children
    .treasure
);

//to find treasure using childNodes
// child nodes include text & comments as well
console.log(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

//combination of children & childNodes
console.log(document.body.childNodes[3].childNodes[3].childNodes[1].children.treasure);

//BOTTOM-TO-TOP APPROACH (to find parents)
console.log(document.body.children.forest.children.tree2.parentElement);

//To find siblings
console.log(document.body.children.forest.children.tree2.previousElementSibling);

console.log(document.body.children.forest.children.tree1.nextElementSibling);

console.log(document.body.childNodes[5].childNodes[7]);