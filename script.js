// let Prompt = prompt("Enter task to add to todo list")
// console.log(Prompt)
let input= document.getElementById("input")
// console.log(input.innerText)
let P = document.getElementById("todo");
let btn = document.getElementById("btn");
let todoArr = []
var DataObj = {}
// console.log(todoArr)


input.addEventListener("input",(e)=>{
  

  
  //  console.log(key);
  
  
  

// 

})

btn.addEventListener("click",()=>{
  var inputdata = input.value;
  // console.log(inputdata)
  var key =  Date.now().toString();
  
  localStorage.setItem(key,inputdata);
  DataObj[key]= inputdata;
  console.log(DataObj)

 for(let item in DataObj){
  console.log(DataObj[item])
  P.innerText = DataObj[item]
 }
  

    
 

})





