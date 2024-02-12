

const btn = Array.from(document.getElementsByClassName("question"));
const answr = Array.from(document.getElementsByClassName("answer"));
const arrow = document.querySelector(".q-a img")


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



btn.forEach ((button)=>{

  button.addEventListener("click", ()=>{
    answerItem = button.parentElement.nextElementSibling
    arrowItem = button.nextElementSibling
      answerItem.style.display = "block"
      button.style.color = "black"
      button.style.fontWeight = "700"
      arrowItem.style.transform = "rotate(180deg)"

      })
})





 


   

  

// TypeError: Cannot read properties of undefined (reading 'nextElementSibling')
// TypeError: Cannot read properties of undefined (reading 'nextElementSibling')