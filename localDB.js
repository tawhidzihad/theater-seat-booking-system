// Get the Array of setNumber and save it localStorage
function saveSeats(seats) {
	localStorage.setItem("bookedSeats", JSON.stringify(seats));
}

// Retrive the Array of SetNumber from LocalStorage and Return it
function getSeats() {
	const bookedSeats = localStorage.getItem("bookedSeats");
	return JSON.parse(bookedSeats) || [];
}
