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

function Booking(bookingDate, bookingPersons, bookingSleep, bookingName, bookingMail, bookingPhone, bookingExtra) {
  this.date = bookingDate;
  this.persons = bookingPersons;
  this.sleepover = bookingSleep;
	this.navn = bookingName;
  this.mail = bookingMail;
	this.phone = bookingPhone;
  this.extra = bookingExtra;
}

function addContact() {
  var bookingName = document.getElementById("name").value;
  if (bookingName == "") {
    alert("Holdnavn skal udfyldes");
    return;
  }
  var bookingSleep = document.getElementById("sleep").value;
  if (bookingSleep == "") {
    alert("Overnatning skal udfyldes");
    return;
  }
  var bookingPhone = document.getElementById("phone").value;
  if (bookingPhone == "") {
    alert("Telefonnummer skal udfyldes");
    return;
  }
  var bookingMail = document.getElementById("mail").value;
  if (bookingMail == "") {
    alert("Email skal udfyldes");
    return;
  }
  var bookingDate = document.getElementById("date").value;
  if (bookingDate == "") {
    alert("Ønsket dato skal udfyldes");
    return;
  }
  var bookingPersons = document.getElementById("persons").value;
  if (bookingPersons == "") {
    alert("Antallet af personer der deltager skal udfyldes");
    return;
  }
  var bookingExtra = document.getElementById("extra").value;
  if (bookingDate, bookingPersons, bookingSleep, bookingName, bookingMail, bookingPhone == "") {
    alert("Alle felter skal udfyldes");
    return;
  }
  var booking = new Booking(bookingDate, bookingPersons, bookingSleep, bookingName, bookingMail, bookingPhone, bookingExtra);
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  window.location.reload();
}

var bookings = [];
var loadedBookings = localStorage.getItem("bookings");
if (loadedBookings != null) {
  threads = JSON.parse(loadedBookings);
}
