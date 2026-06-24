// if no setNumber added in LocalStorage then return [] array, if have then return ["A1", "D5"]
let bookedSeats = getSeats();

// Array for seats row
const rows = ["A", "B", "C", "D"];

// Seat Cotainer, whare set will be added
const seatContainer = document.getElementById("seat-container");

const form = document.getElementById("booking-form");
const formInput = document.getElementById("seat-input");

// Total Seats, Stats Number
const totalSeatsEle = document.getElementById("total-seats");

// Available Seats, Stats Number
const availableSeatsEle = document.getElementById("available-seats");

// Booked Seats, Stats number
const bookedSeatsEle = document.getElementById("booked-seats");

// Creating dom elements
rows.forEach((rowName) => {
	const row = document.createElement("div");

	// Added row styles
	row.classList.add("row");

	for (let i = 1; i <= 25; i++) {
		const seat = document.createElement("button");

		// Added all available seat style
		seat.classList.add("seat");

		// insert text insdie seat button like (A1, B3)
		seat.textContent = `${rowName}${i}`;

		// Adding ID to retrive later
		seat.id = `${rowName}${i}`;

		row.appendChild(seat);
	}

	seatContainer.appendChild(row);
});

// Get form input value & Update booked seats
form.addEventListener("submit", (e) => {
	// Prevent form reload
	e.preventDefault();

	// get the input value to upppercase also cut the unwanted spaces
	const seatNumber = formInput.value.trim().toUpperCase().split(" ").join("");

	// Dynamically get the elements from dom
	const selectedSeat = document.getElementById(seatNumber);

	// If there is no seat matched
	if (!selectedSeat) {
		alert("Invalid seat number");
		return;
	}

	// If the set is already booked
	if (selectedSeat.classList.contains("booked")) {
		alert("Seat is already booked");
		return;
	}

	// If no condition matched then do it
	selectedSeat.classList.add("booked");

	// If set booked then save the setNumber in array
	bookedSeats.push(seatNumber);

	// Save the setNumber array in LocalStorage
	saveSeats(bookedSeats);

	// Update Booked Stats Value
	updateSeatsNumber();
});

// If have booked seats then set the booked seat style
bookedSeats.forEach((setNumber) => {
	const seat = document.getElementById(setNumber);
	if (seat) {
		seat.classList.add("booked");
	}
});

// Update Stats Seats Number
function updateSeatsNumber() {
	// Total Seats Numbers
	const totalSeats = document.querySelectorAll(".seat").length;

	// Total Booked Seats Numbers
	const bookedSeats = document.querySelectorAll(".seat.booked").length;

	// Total Available Seats numbers
	const availableSeats = totalSeats - bookedSeats;

	totalSeatsEle.textContent = totalSeats;
	availableSeatsEle.textContent = availableSeats;
	bookedSeatsEle.textContent = bookedSeats;
}

// By Default Trigger For Total Seats and Available Seats
updateSeatsNumber();
