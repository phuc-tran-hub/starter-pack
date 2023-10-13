import $ from 'jquery';
import './style.scss';

let x = 0;
function counter() {
  x += 1;
  $('#main').html(`You have been here for ${x.toString()} seconds`);
}

setInterval(counter, 1000);
