var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}

function Booking(bookingName, bookingCity, bookingPhone, bookingMail, bookingDate, bookingPersons) {
	this.navn = bookingName;
	this.city = bookingCity;
	this.phone = bookingPhone;
	this.mail = bookingMail;
	this.date = bookingDate;
  this.persons = bookingPersons;
}

function addContact() {
  var bookingName = document.getElementById("name").value;
  var bookingCity = document.getElementById("city").value;
  var bookingPhone = document.getElementById("phone").value;
  var bookingMail = document.getElementById("mail").value;
  var bookingDate = document.getElementById("date").value;
  var bookingPersons = document.getElementById("persons").value
  var booking = new Booking(bookingName, bookingCity, bookingPhone, bookingMail, bookingDate, bookingPersons);
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  window.location.reload();
}

var bookings = [];
var loadedBookings = localStorage.getItem("bookings");
if (loadedBookings != null) {
  threads = JSON.parse(loadedBookings);
}
