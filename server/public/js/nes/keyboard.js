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
            case 'A':
              this.state1[this.keys.KEY_A] = value;
              console.log('A');
            break;      // X
            case 'B':
              this.state1[this.keys.KEY_B] = value;
              console.log('B');
            break;      // Y (Central European keyboard)
            case 'select':
              this.state1[this.keys.KEY_SELECT] = value;
              console.log('select');
            break; // Right Ctrl
            case 'start':
              this.state1[this.keys.KEY_START] = value;
              console.log('start');
            break;  // Enter
            case 'up':
              this.state1[this.keys.KEY_UP] = value;
              console.log('up');
            break;     // Up
            case 'down':
              this.state1[this.keys.KEY_DOWN] = value;
              console.log('down');
            break;   // Down
            case 'left':
              this.state1[this.keys.KEY_LEFT] = value;
              console.log('left');
            break;   // Left
            case 'right':
              this.state1[this.keys.KEY_RIGHT] = value;
              console.log('right');
            break;  // Right

            case '2A': this.state2[this.keys.KEY_A] = value; break;     // Num-7
            case '2B': this.state2[this.keys.KEY_B] = value; break;     // Num-9
            case '2select': this.state2[this.keys.KEY_SELECT] = value; break; // Num-3
            case '2start': this.state2[this.keys.KEY_START] = value; break;  // Num-1
            case '2up': this.state2[this.keys.KEY_UP] = value; break;    // Num-8
            case '2down': this.state2[this.keys.KEY_DOWN] = value; break;   // Num-2
            case '2left': this.state2[this.keys.KEY_LEFT] = value; break;  // Num-4
            case '2right': this.state2[this.keys.KEY_RIGHT] = value; break; // Num-6
            default:
            console.log('nop');
        }
        console.log(this.state1);
        return false; // preventDefault
    },

    keyDown: function(key) {
      this.setKey(key, 0x41);
    },

    keyUp: function(key) {
      this.setKey(key, 0x40);
    },

    keyPress: function(key) {
    }
};
