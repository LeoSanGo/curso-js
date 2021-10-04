"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GuestList = /*#__PURE__*/function () {
  function GuestList() {
    _classCallCheck(this, GuestList);

    this.guests = [];
  }

  _createClass(GuestList, [{
    key: "add",
    value: function add(name, age, document) {
      this.guests.push({
        name: name,
        age: age,
        document: document
      });
    }
  }, {
    key: "showGuests",
    value: function showGuests() {
      console.log(this.guests);
    }
  }]);

  return GuestList;
}();

var guestsList = new GuestList();

document.getElementById("addGuest").onclick = function () {
  var name = document.getElementById('name').value;
  guestsList.add(name, 40, "12211221");
};
