const seats = document.querySelectorAll(".child");
const numberOfSeats = document.getElementById("numberofSeats");

seats.forEach(seat =>{
    seat.addEventListener("click",selectSeat);
})

function selectSeat(){
    alert('you have selected a seat');
    console.log('seat selected');
}