addlist.addEventListener("click",(e)=>{
  e.preventDefault();

   addMore();

})


//  addMorefunction start

let addMore = ()=>{
document.getElementById("error1").innerHTML=" ";
document.getElementById("error2").innerHTML=" ";

let topic_Name = document.getElementById("Topic_Name").value;
let details = document.getElementById("Details").value;

if(topic_Name==""){
  document.getElementById("error1").innerHTML="Please provide Activity Name ";
}else if(details==""){
  document.getElementById("error2").innerHTML="Please provide Details  ";
}else{

  
  localStorage.setItem("todo", JSON.stringify([topic_Name,details]))
  

//  this is for clear the input fields after adding data
  document.getElementById("Topic_Name").value="";
  document.getElementById("Details").value="";
 
// this is for printing and check mark

output.innerHTML +=`<div class="card">
    ${topic_Name} : <br> ${details}
   <input type="checkbox" name="" id="checkbox" >
   </div>`
   
}

}
// addMore Function ends

//  delete button functionality 

Delete.addEventListener("click",(e)=>{
  e.preventDefault();
  if (localStorage.length== 0) {
    output.innerHTML=`<h5 id="empty">List is Empty Please add List Item First ..!</h5>`
  } else {
 localStorage.removeItem("todo");
 output.innerHTML="";
  }
})

// delete Functionality end
