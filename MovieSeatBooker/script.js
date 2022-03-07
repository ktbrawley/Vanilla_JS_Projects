const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats]
    .map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  if (selectedSeats) {
    const seats = selectedSeats.length;
    count.innerHTML = seats;
    total.innerHTML = movieSelect.value * seats;
  }
}


container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

movieSelect.addEventListener('change', (e) => {
  updateSelectedCount();
});

window.onload = function (e) {
  var selectedSeatIndices = [...JSON.parse(localStorage.getItem('selectedSeats'))];
  console.log(selectedSeatIndices);

  var seatArr = [...seats];
  seatArr.forEach((seat) => {
    var index = seatArr.indexOf(seat);
    if (selectedSeatIndices.includes(index)) {
      seats[index].classList.add('selected');
      updateSelectedCount();
    }
  })
};