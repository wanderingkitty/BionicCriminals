const keybordDiv = document.querySelector("#keyboard");
keyboard;

for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keybordDiv.appendChild(button);
  button.classList.add("key");
  button.addEventListener("click", () => {
    console.log("click");
    button.disabled = true;
    button.classList.add("key-disable");
  });
}
for (let charCode of [197, 196, 214]) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(charCode);
  keybordDiv.appendChild(button);
  button.classList.add("key");
  button.addEventListener("click", () => {
    console.log("click");
    button.disabled = true;
    button.classList.add("key-disable");
  });
}
