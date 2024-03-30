const textareaE1 = document.getElementById("textarea");
const totalcounter = document.getElementById("totalChar");
const remainingCounterEl = document.getElementById("remaining");
console.log(textareaE1.value.length);
textareaE1.addEventListener("keyup",()=>{
    upadateCounter()
    console.log(document.getElementById("textarea"))
})
console.log(document.getElementById("textarea"))
function upadateCounter(){
 totalcounter.innerText = textareaE1.value.length;
 remainingCounterEl.innerText = textareaE1.getAttribute("maxLength")-textareaE1.value.length;
}

// small letters make a big change and you cant find it