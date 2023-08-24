const container = document.querySelector('.parent');
const seats = document.querySelectorAll(".child:not(.occupied)");
const numberOfSeats = document.getElementById("numberofSeats");
const amount = document.getElementById("amount");
const movie = document.getElementById("movie");

let ticketTotalPrice = +movie.value;

// seats.forEach(seat =>{
//     seat.addEventListener("click",selectSeat);
// })

// function selectSeat(){
//     alert('you have selected a seat');
//     console.log('seat selected');
// }

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.parent .child.selected');
    const selectedSeatCount = selectedSeats.length;

    numberOfSeats.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * ticketTotalPrice;
}

container.addEventListener('click', e =>{
   if(e.target.classList.contains('child') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
   }

   updateSelectedCount();
})