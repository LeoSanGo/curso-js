
class GuestList {
  constructor() {
    this.guests = [];
  }
  add(name, age, document) {
    this.guests.push({name: name, age: age, document: document});

  }

  showGuests() {
    console.log(this.guests);
  }
}

var guestsList = new GuestList();
document.getElementById("addGuest").onclick = function() {
  var name = document.getElementById('name').value;
  guestsList.add(name, 40, "12211221");
}



