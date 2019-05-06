/*
JSNES, based on Jamie Sanders' vNES
Copyright (C) 2010 Ben Firshman

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Keyboard events are bound in the UI
JSNES.Keyboard = function() {
  var i;

  this.keys = {
    KEY_A: 0,
    KEY_B: 1,
    KEY_SELECT: 2,
    KEY_START: 3,
    KEY_UP: 4,
    KEY_DOWN: 5,
    KEY_LEFT: 6,
    KEY_RIGHT: 7
  };

  this.state1 = new Array(8);
  for (i = 0; i < this.state1.length; i++) {
    this.state1[i] = 0x40;
  }
  this.state2 = new Array(8);
  for (i = 0; i < this.state2.length; i++) {
    this.state2[i] = 0x40;
  }
};

JSNES.Keyboard.prototype = {
  setKey: function(key, value) {
    switch (key) {
      case "00":
        this.state1[this.keys.KEY_A] = value;
        break; // A
      case "01":
        this.state1[this.keys.KEY_B] = value;
        break; // B
      case "02":
        this.state1[this.keys.KEY_SELECT] = value;
        break; // Select
      case "03":
        this.state1[this.keys.KEY_START] = value;
        break; // Start
      case "04":
        this.state1[this.keys.KEY_UP] = value;
        break; // Up
      case "05":
        this.state1[this.keys.KEY_DOWN] = value;
        break; // Down
      case "06":
        this.state1[this.keys.KEY_LEFT] = value;
        break; // Left
      case "07":
        this.state1[this.keys.KEY_RIGHT] = value;
        break; // Right

      case "10":
        this.state2[this.keys.KEY_A] = value;
        break;
      case "11":
        this.state2[this.keys.KEY_B] = value;
        break;
      case "12":
        this.state2[this.keys.KEY_SELECT] = value;
        break;
      case "13":
        this.state2[this.keys.KEY_START] = value;
        break;
      case "14":
        this.state2[this.keys.KEY_UP] = value;
        break;
      case "15":
        this.state2[this.keys.KEY_DOWN] = value;
        break;
      case "16":
        this.state2[this.keys.KEY_LEFT] = value;
        break;
      case "17":
        this.state2[this.keys.KEY_RIGHT] = value;
        break;
      default:
        return true;
    }
    return false; // preventDefault
  },

  keyDown: function(evt) {
    //        if (!this.setKey(evt.key, 0x41) /* && evt.preventDefault*/) {
    // console.log("oui");
    //            // evt.preventDefault();
    //        }
    this.setKey(evt.key, 0x41)
  },

  keyUp: function(evt) {
    // if (!this.setKey(evt.key, 0x40) /* && evt.preventDefault*/) {
    //     // evt.preventDefault();
    // }

    this.setKey(evt.key, 0x40)
  },

  keyPress: function(evt) {
    // evt.preventDefault();
    this.setKey(evt.key, 0x41)
    this.setKey(evt.key, 0x40)
  }
};
