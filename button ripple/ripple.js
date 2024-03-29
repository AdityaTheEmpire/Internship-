const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnE1.offsetLeft;
  const y = event.pageY - btnE1.offsetTop;
    console.log(x + " "+ y);
  btnE1.style.setProperty("--Xpos", x +"px");

  btnE1.style.setProperty("--Ypos", y+"px" );
});
