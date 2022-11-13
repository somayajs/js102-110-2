const div = document.createElement("div");
div.id = "popup";
div.textContent = "Welcome!"
const btn = document.createElement("button")
btn.id = "btn";
btn.textContent = "X";

div.append(btn);
document.body.append(div);

div.style.cssText = "width: 400px; height: 200px; position: absolute; top: 20px; right: 20px; background: #eee; border: 1px solid #cecece; border-radius: 4px; display: none; text-align: center; box-sizing: border-box"

btn.style.cssText = "color: red; width:30px; height:30px; background: #fff; border: 1px solid red; position: absolute; top: -10px; right: -10px; font-size: 12px; border: 1px solid red; border-radius: 50%; cursor: pointer; transition: all 0.5s ease";

btn.addEventListener("mouseover", () => {
  btn.style.color = "#fff";
  btn.style.background = "red";
  btn.style.fontSize = "20px";
  btn.style.width = "40px";
  btn.style.height = "40px";
  btn.style.border = "1px solid red";
});

btn.addEventListener("mouseout", () => {
  btn.style.color = "red";
  btn.style.background = "#fff";
  btn.style.width = "30px";
  btn.style.height = "30px";
  btn.style.fontSize = "12px";
});

btn.addEventListener("click", () => {
  btn.parentElement.style.display = "none"
});

setTimeout(() =>{
 div.style.display = "flex";
 div.style.justifyContent = "center";
 div.style.alignItems = "center";
}, 2000);
