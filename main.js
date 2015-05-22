$(document).ready ( function(){
  $("#lappy").css('display', 'inherit');
  window.setTimeout(function() {
    $("#airbnb").css('display', 'inherit');
    window.setTimeout(function() {
      $("#brown").css('display', 'inherit');
      window.setTimeout(function() {
        $("#effectivejava").css('display', 'inherit');
        window.setTimeout(function() {
          $("#bananagrams").css('display', 'inherit');
          window.setTimeout(function() {
            $("#facebook").css('display', 'inherit');
            window.setTimeout(function() {
              $("#lobster").css('display', 'inherit');
              window.setTimeout(function() {
                $("#gameinventors").css('display', 'inherit');
                window.setTimeout(function() {
                  $("#music").css('display', 'inherit');
                  window.setTimeout(function() {
                    $("#tripadvisor").css('display', 'inherit');
                    window.setTimeout(function() {
                      $("#dannyboy").css('display', 'inherit');
                      window.setTimeout(function() {
                        $("#beer").css('display', 'inherit');
                        window.setTimeout(function() {
                          $("#desk").css('display', 'inherit');
                          start();
                        }, 30);
                      }, 12);
                    }, 12);
                  }, 12);
                }, 12);
              }, 15);
            }, 20);
          }, 25);
        }, 32);
      }, 35);
    }, 35);
  }, 50);
});

window.onmousemove = function(e) {
  if (mouseSide == 'left') {
    $('.text-back').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX + 5) + 'px'});
    $('.flavor-text').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX + 5) + 'px'});
  } else {
    var backWidth = $('.text-back').width();
    $('.text-back').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX - backWidth) + 'px'});
    $('.flavor-text').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX - backWidth) + 'px'});
  }
}

var items = ['lappy', 'airbnb', 'brown', 'effectivejava', 'bananagrams', 'facebook', 'lobster', 'gameinventors', 'music', 'tripadvisor', 'dannyboy', 'beer'];
var left = ['brown', 'bananagrams', 'lobster', 'music', 'dannyboy'];
var flashing = "";
var flashTime = 0;
var flashHold = false;
var mouseSide = 'left';

function start() {
  // hide each item
  items.forEach(function (element) {
    $('#' + element).css('display', 'none');
  }); 
  // add rollover listeners for each item
  items.forEach(function (element) {
    $('#b-' + element)[0].onmouseover = (function(el) { select(el); }).bind(this, element);
    $('#b-' + element)[0].onmouseout = function(el) { unflash(); };
  }); 
  // show welcome
  $('.topper-text').css('display', 'inherit');
  $('#welcome').fitText(2);
  flickerTimeout = startflicker();
  highlightUpdateTimout = setInterval(watchUpdate, 33);
}

function startflicker() {
  return setInterval(flicker, 2800); 
}

function watchUpdate() {
  if (flashing == '') {
    return;
  }
  flashTime += 1;
  if (flashTime < 15) {
    setBrightness(flashing, 1.3 + (flashTime / 15) * 1.2);
  } else if (flashTime < 30 && flashHold == false) {
    setBrightness(flashing, 1.3 + ((37 - flashTime) / 22) * 1.2);
  } else if (flashHold == false) {
    unflash(); 
  }
}

function select(element) {
  // deselect the current flashing element 
  unflash();
  flashTime = 0;
  flashing = element;
  flashHold = true;
  $('.text-back').css({'opacity': '1', '-webkit-animation': 'fadein .33s', '-moz-animation': 'fadein .33s', '-ms-animation': 'fadein .33s', '-o-animation': 'fadein .33s', 'animation': 'fadein .33s'});
  $('.flavor-text').css({'opacity': '1', '-webkit-animation': 'fadein .33s', '-moz-animation': 'fadein .33s', '-ms-animation': 'fadein .33s', '-o-animation': 'fadein .33s', 'animation': 'fadein .33s'});
  mouseSide = left.indexOf(element) > -1 ? 'left' : 'right';
}

function flicker() {
  if (flashing != '') {
    return;
  }
  var element = items[Math.floor(Math.random() * items.length)];
  flashing = element;
  flashTime = 0;
  setTimeout(unflicker, 1500); 
}

function unflicker() {
  if (flashHold != true) {
    unflash();
  }
}

function setBrightness(element, brightness) {
  $('#' + element).css({'display': 'inherit', '-webkit-filter': 'brightness(' + brightness + ')', '-moz-filter': 'brightness(' + brightness + ')', '-ms-filter': 'brightness(' + brightness + ')', '-o-filter': 'brightness(' + brightness + ')', 'filter': 'brightness(' + brightness + ')'});
}

function unflash() {
  if (flashing == '') {
    return;
  }
  $('.text-back').css({'opacity': '0', '-webkit-animation': 'fadeout .33s', '-moz-animation': 'fadeout .33s', '-ms-animation': 'fadeout .33s', '-o-animation': 'fadeout .33s', 'animation': 'fadeout .33s'});
  $('.flavor-text').css({'opacity': '0', '-webkit-animation': 'fadeout .33s', '-moz-animation': 'fadeout .33s', '-ms-animation': 'fadeout .33s', '-o-animation': 'fadeout .33s', 'animation': 'fadeout .33s'});
  flashHold = false;
  flashSide = '';
  brightness = 0;
  $('#' + flashing).css({'display': 'none', '-webkit-filter': 'brightness(' + brightness + ')', '-moz-filter': 'brightness(' + brightness + ')', '-ms-filter': 'brightness(' + brightness + ')', '-o-filter': 'brightness(' + brightness + ')', 'filter': 'brightness(' + brightness + ')'});
  flashing = '';
}
