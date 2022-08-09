const colorPicker = document.getElementById("color-picker");
const modes = document.getElementById("modes");
const selectionBtn = document.getElementById("selection-btn");

selectionBtn.addEventListener("click", function () {
  const color = colorPicker.value.replace("#", "");
  const mode = modes.value;
  const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const colorOne = document.getElementsByClassName("color-one")[0];
      const colorTwo = document.getElementsByClassName("color-two")[0];
      const colorThree = document.getElementsByClassName("color-three")[0];
      const colorFour = document.getElementsByClassName("color-four")[0];
      const colorFive = document.getElementsByClassName("color-five")[0];

      colorOne.style.backgroundColor = data.colors[0].hex.value;
      colorTwo.style.backgroundColor = data.colors[1].hex.value;
      colorThree.style.backgroundColor = data.colors[2].hex.value;
      colorFour.style.backgroundColor = data.colors[3].hex.value;
      colorFive.style.backgroundColor = data.colors[4].hex.value;

      const textColumnOne = document.getElementsByClassName("text-column")[0];
      const textColumnTwo = document.getElementsByClassName("text-column")[1];
      const textColumnThree = document.getElementsByClassName("text-column")[2];
      const textColumnFour = document.getElementsByClassName("text-column")[3];
      const textColumnFive = document.getElementsByClassName("text-column")[4];

      textColumnOne.textContent = data.colors[0].hex.value;
      textColumnTwo.textContent = data.colors[1].hex.value;
      textColumnThree.textContent = data.colors[2].hex.value;
      textColumnFour.textContent = data.colors[3].hex.value;
      textColumnFive.textContent = data.colors[4].hex.value;
    });
});
