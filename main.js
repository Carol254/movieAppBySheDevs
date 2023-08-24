const seats = document.querySelectorAll(".child");

seats.forEach(seat =>{
    seat.addEventListener("click",selectSeat);
})

function selectSeat(){
    window.alert('you have selected a seat');
    console.log('seat selected');
}