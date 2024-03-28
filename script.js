let input=document.getElementById("num")
let numSelect=document.getElementById("select")
let result=document.getElementById("result")
let history=document.getElementById("history")
let showBtn=document.getElementById("btn")
let delBtn=document.getElementById("delBtn")
let obj={}
if (localStorage.length>0) {
  let localStorageData=JSON.parse(localStorage.getItem("data"))
  obj={...localStorageData}
  for (let n in obj) {
    createPara(`<br>${n} = ${obj[n]}`,`${n}`)
    
    
  }
}
showBtn.addEventListener("click", () => {
  if (input.value!==""&&numSelect.value!=="") {
    let r=input.value*numSelect.value
    result.innerHTML=r

    obj[`${input.value}*${numSelect.value}`]=r

    localStorage.setItem("data",JSON.stringify(obj))
    createPara(`<br>${input.value}*${numSelect.value}=${r}`,`${input.value}*${numSelect.value}`)
    

  } else {
    alert("plese enter nums")
  }
})
  
function createPara(text,key) {
  const p=document.createElement("p")
  const btn=document.createElement("button")
  p.innerHTML=text
  p.class="res"
  btn.innerHTML="remove"
  btn.class="remove"
  btn.addEventListener("click", () => {
    delete obj[key]
    console.log(obj)
    p.remove()
    localStorage.setItem("data",JSON.stringify(obj))
  })
  p.append(btn)
  history.append(p)
}






















