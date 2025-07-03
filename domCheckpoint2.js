//event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the color box and button elements using their IDs
  // and add an event listener to the button to change the color of the box
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  /* Function to generate a random color
   This function creates a random hex color code
   by generating six random hexadecimal digits
   and concatenating them with a '#' at the start **/
  // This function is used to change the background color of the color box
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Add an event listener to the button that changes the color of the box
  // when clicked, using the getRandomColor function to generate a new color
  // This allows the user to change the color of the box by clicking the button
  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
