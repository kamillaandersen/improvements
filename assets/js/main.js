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

function Booking(bookingDate, bookingPersons, bookingSleep, bookingName, bookingMail, bookingPhone) {
  this.date = bookingDate;
  this.persons = bookingPersons;
  this.sleepover = bookingSleep;
	this.navn = bookingName;
  this.mail = bookingMail;
	this.phone = bookingPhone;
}

function addContact() {
  var bookingName = document.getElementById("name").value;
  var bookingSleep = document.getElementById("sleep").value;
  var bookingPhone = document.getElementById("phone").value;
  var bookingMail = document.getElementById("mail").value;
  var bookingDate = document.getElementById("date").value;
  var bookingPersons = document.getElementById("persons").value
  var booking = new Booking(bookingDate, bookingPersons, bookingSleep, bookingName, bookingMail, bookingPhone);
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  window.location.reload();
}

var bookings = [];
var loadedBookings = localStorage.getItem("bookings");
if (loadedBookings != null) {
  threads = JSON.parse(loadedBookings);
}
