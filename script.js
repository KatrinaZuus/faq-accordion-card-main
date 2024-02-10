

const btn = Array.from(document.getElementsByClassName("question"));
const answr = Array.from(document.getElementsByClassName("answer"));
for (i=0; i<answr.length; i++) {
    console.log(answr[i])
    // console.log(answr[1])
    btn.addEventListener("click", ()=>{
        btn[0].style.color = "green"
        console.log(btn[0])
    })
}


