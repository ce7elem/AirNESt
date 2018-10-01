
let sensibility = 30;
let p1 = {
  top : $("#p1").css("top").substring(0, $("#p1").css("top").indexOf('p')),
  left: $("#p1").css("left").substring(0, $("#p1").css("left").indexOf('p'))
}

const up = (id) => {
  $("#p"+id).css("top", p1.top - sensibility );
  p1.top -= sensibility;
}
const down = (id) => {
  $("#p"+id).css("top", p1.top + sensibility);
  p1.top += sensibility;
}
const left = (id) => {
  $("#p"+id).css("left", p1.left - sensibility);
  p1.left -= sensibility;
}
const right = (id) => {
  $("#p"+id).css("left", p1.left + sensibility);
  p1.left += sensibility;
}
const start = (id) => {

}
const select = (id) => {

}


const handleInput = (key) => {
let input = {
  key: key,
  id: 1
}
  switch (input.key) {
  //  case 38:
    case 'up':
      up(input.id);
      break;
  //  case 40:
    case 'down':
      down(input.id);
      break;
    case 37:
    case 'left':
      left(input.id);
      break;
   // case 39:
    case 'right':
      right(input.id);
      break;
  //  case 97:
    case 'start':
      start(input.id);
      break;
  //  case 122:
    case 'select':
      select(input.id);
      break;
    default:
      console.log('bad input');
  }
}
