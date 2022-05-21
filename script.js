'use strict';

//1.

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $('#container').append("<div class='grid'></div>");
    }
  }
  $('.grid').width(600 / x);
  $('.grid').height(600 / x);
}

//2.

function clearGrid() {
  $('.grid').remove();
}

//********************************************* */

//3.

function refreshGrid() {
  var z = prompt('How many boxes per side?');
  clearGrid();
  createGrid(z);
}

//**************************************************** */
$(document).ready(function () {
  createGrid(5);

  $('.grid').mouseover(function () {
    $(this).css('background-color', 'blue');
  });

  $('.grid').bind('mouseover', function () {
    var color = $(this).css('background-color');

    $(this).css('background-color', 'blue');

    $(this).bind('mouseenter', function () {
      $(this).css('background-color', 'white');
    });
  });

  //********************************************** */
  $('.newG').click(function () {
    refreshGrid();

    $('.grid').mouseover(function () {
      $(this).css('background-color', 'blue');
    });

    $('.grid').bind('mouseover', function () {
      var color = $(this).css('background-color');

      $(this).css('background-color', 'blue');

      $(this).bind('mouseenter', function () {
        $(this).css('background-color', 'white');
      });
    });
  });
});
