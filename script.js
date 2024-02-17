

const btn = Array.from(document.getElementsByClassName("question"));
const arrow = document.getElementsByClassName("arrow")
// arrowItem = button.nextElementSibling
let active = null;

btn.forEach ((button)=>{
  button.addEventListener("click", ()=>{
    if (button == active){
      button.parentElement.nextElementSibling.style.display = "none";
      active.nextElementSibling.style.transform = "rotate(0deg)";
      active.style.color = "#787887";
      active.style.fontWeight = "400"
      active = null;
      
    } else {
      if (active != null){
      active.parentElement.nextElementSibling.style.display = "none";
      active.nextElementSibling.style.transform = "rotate(0deg)";
      active.style.color = "#787887";
      active.style.fontWeight = "400";
  
    }
    
     button.parentElement.nextElementSibling.style.display = "block";
     button.nextElementSibling.style.transform = "rotate(180deg)";
     button.style.color = "black";
     button.style.fontWeight = "700"
        active = button;
  }
  
  })
    
})




// button.style.color = "black"
//       button.style.fontWeight = "700"
//       arrowItem.style.transform = "rotate(180deg)"
// button.style.color =  "#787887";
//       button.style.fontWeight = "400"
//       arrowItem.style.transform = "rotate(180deg)"


// let questionAnsver = "none"

// for (i=0; i<=answr.length; i++) {

//   x=`${i}`
//   console.log(x)

//   btn[x].addEventListener("click", ()=>{
    
//     answr[x].style.display = "block"

  // btnClick=btn[i]
  // questionAnsver=divQuestionAnsver[i].nextElementSibling
  // console.log(btnClick)
  // console.log(questionAnsver)
   
  // btnClick.addEventListener("click", ()=>{
    // questionAnsver.style.display = "block"

  // })

  
  //  })


// }