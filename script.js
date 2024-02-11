

const btn = Array.from(document.getElementsByClassName("question"));
const answr = Array.from(document.getElementsByClassName("answer"));
const divQuestionAnsver = Array.from(document.getElementsByClassName("q-a"))

let questionAnsver = "none"

// for (i=0; i<=answr.length; i++) {

//   btnClick=btn[i]
//   questionAnsver=divQuestionAnsver[i].nextElementSibling
//   console.log(btnClick)
//   console.log(questionAnsver)
   
//   btnClick.addEventListener("click", ()=>{
//     questionAnsver.style.display = "block"
//   })

//   btn[i].addEventListener("click", ()=>{
//     answr[0].style.display="block"
//    })


// }

answerItem = "none"

btn.forEach ((button)=>{
  button.addEventListener("click", ()=>{
    answerItem = button.parentElement.nextSibling
    console.log(button.parentElement)
    console.log(answerItem
      )
    button.parentElement.nextSibling.style.display = "block"
  })
})




 


   

  

// TypeError: Cannot read properties of undefined (reading 'nextElementSibling')
// TypeError: Cannot read properties of undefined (reading 'nextElementSibling')