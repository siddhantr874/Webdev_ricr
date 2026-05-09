function BulbON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

// function BulbRed() {
//   document.getElementById("bulb1").style.backgroundColor = "Red";
// }
// function BulbGreen() {
//   document.getElementById("bulb1").style.backgroundColor = "Green";

// }
// function BulbBlue() {
//   document.getElementById("bulb1").style.backgroundColor = "Blue";


document.getElementById("bulbred").addEventListener("click ",bulbred);
document.getElementById("bulbblue").addEventListener("click ",bulbblue);
document.getElementById("bulbgreen").addEventListener("click ",bulbgreen);

document.getElementById("bulbcolor").addEventListener("change", ChangeBulbColor);

document
    .getElementById("bulb1Color")
    .addEventListener

function ChangeBulbColor(){
    const color = document.getElementById("bulb1Color").value;
    document.getElementById("bulb1").style.backgroundColor = color;
    
}
