import ("./index.css")
import image from "./todo.png";


let imgdiv = document.getElementById("imgdiv");

let img = document.createElement("img");
img.src = image;
img.setAttribute("class","logo");

imgdiv.append(img);
let form = document.getElementById("form");
console.log(form)
let arr = JSON.parse(localStorage.getItem("taskdata"))||[];
displytask(arr)
form.addEventListener("submit",newTask);

function newTask(event){
    event.preventDefault();
   let task = document.getElementById('task').value;
   let obj ={
       task,
   }
   arr.push(obj);
   localStorage.setItem("taskdata",JSON.stringify(arr));
   displytask(arr)
}
function displytask(arr){
    document.getElementById("appenddiv").innerHTML=null;
    arr.map((el,index)=>{
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = index+1;
        console.log(el.task);
        let p1 = document.createElement("p");
        p1.textContent = el.task;
        div.append(p,p1);
        let remove = document.createElement("button");
        remove.textContent="remove"
        remove.addEventListener("click",()=>{
            cahnge(index,arr);
        })
        
           
        
        div.append(p,p1,remove);
        document.getElementById("appenddiv").append(div);
    })
}
function cahnge(index,arr){
    arr.splice(index,1)
    localStorage.setItem("taskdata",JSON.stringify(arr));
            displytask(arr)
}