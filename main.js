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
                        }, 300);
                      }, 120);
                    }, 120);
                  }, 120);
                }, 120);
              }, 150);
            }, 200);
          }, 250);
        }, 320);
      }, 350);
    }, 350);
  }, 500);
});

window.onmousemove = function(e) {
  if (mouseSide == 'left') {
    $('.text-container').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX + 5) + 'px'});
  } else {
    var backWidth = $('.text-container').width();
    $('.text-container').css({'top': (e.clientY + 5) + 'px', 'left': (e.clientX - backWidth) + 'px'});
  }
}

var items = ['lappy', 'airbnb', 'brown', 'effectivejava', 'bananagrams', 'facebook', 'lobster', 'gameinventors', 'music', 'tripadvisor', 'dannyboy', 'beer'];

var maxBrightness = {
  'lappy': .8,
  'airbnb': .70,
  'brown': .9,
  'effectivejava': .6,
  'bananagrams': .65,
  'facebook': .75,
  'lobster': .6,
  'gameinventors': .7,
  'music': .6,
  'tripadvisor': 1,
  'dannyboy': .6,
  'beer': 1
};

var flavorText = {
  'lappy': "Hi, and welcome to my personal site! I'm currently a Computer Science student at Brown University. This is my interactive desk- a combination art project and resume. If you want to chat, send me an email at gabriel_lyons@brown.edu.",
  'airbnb':"This summer, I'll be interning with Airbnb on the Data Engineering team. Since they haven't give me any properly-sized swag yet, I made a little Airbnb coaster for this photo.",
  'brown':"I'm currently studying Computer Science at Brown University. I'll be graduating in 2016 with a Sc.B. I've been a Undergrad TA for 6 semesters and this coming Fall I'll be serving my seventh term TAing for our Advanced Algorithms class. My interests include Web Development, Algorithms, and pass/fail English classes.",
  'effectivejava': "In my Junior Spring, I was a Head TA for the Software Engineering class at Brown. I worked on changing the course from teaching Java Swing to HTML/CSS/JS for frontend development. The backend stayed in Java, so naturally Effective Java was our semi-official textbook.",
  'bananagrams': "I will throw down Bananagrams at any time. Favorite bgrams word: 'qat'. My personal house rule is, you can peel with two letter words but you can't win with any. It keeps the pace up but adds a little challenge.",
  'facebook':"After my Sophomore year, I interned at Facebook on the Service Infrastructure team. There I redesigned and implemented a tool called Gatekeeper, with the help of a designer. Gatekeeper is used by Engineers and PMs throughout the company to release features to a specific population, based on about a zillion different parameters. I also helped run a basic programming class at Facebook's Bring Your Teen to Work Day.",
  'lobster':"I actually finished Consider the Lobster (by David Foster Wallace) almost a year before taking this photo, but included it because it's so darn good! Other things I've enjoyed recently, 10:04 by Ben Lerner, Borthers Karmazov by Dostoevsky, and the Sharpe series by Bernard Cornwell. ",
  'gameinventors':"Since nobody would play the board games I made up anymore, I started teaching myself to make Flash games in middle school. I never expected my interest in CS to extend beyond game development, but as they say, 'what a happy accident!' Click on the book for a link to my flash games. And if you're on desktop, maybe play one.",
  'music':"I graduated from New Providence High School in 2012. I played flute in the marching band for four years and never learned how to keep time. In fact, I still can't. Here is my most-improved award, which I received after my freshman season for being a good sport. Go Pioneers!",
  'tripadvisor':"After my Freshman year, I interned on the mobile-web team at TripAdvisor. Here is my branded TripAdvisor mug. During the summer, I shipped an image carousel that substantially increased engagement but caused Apple to threaten legal action. Later, my team won first in the intern hackathon for detecting whether an eatery was best for breakfast, lunch, dinner or brunch using check-in data.",
  'dannyboy':"I lived in Ireland from 2005-2006. Most of my memories are either of eating fish and chips, vegetable soup, anything Cadbury, or misunderstanding people's accents.",
  'beer': "I made a site called BrewReport with my friend Vinh Tran that gives summaries of beer reviews. It's currently down as we're switching data providers, but you can check out the old version at brewreport-staging.herokuapp.com, or click on the beer bottle! I also enjoy craft beer and homebrewing in my unstructured time."
}

var left = ['brown', 'bananagrams', 'lobster', 'music', 'dannyboy'];
var clickElement = '';
var flashing = "";
var flashTime = 0;
var flashHold = false;
var mouseSide = 'left';
var clickables = {
  'lappy': 'mailto:gabriel_lyons@brown.edu',
  'effectivejava': 'http://www.amazon.com/Effective-Java-Edition-Joshua-Bloch/dp/0321356683',
  'lobster': 'http://en.wikipedia.org/wiki/Consider_the_Lobster',
  'gameinventors': 'http://discipleoffred.newgrounds.com/games/',
  'beer': 'http://brewreport-staging.herokuapp.com/'
}

function start() {
  // make the document clickable for desktop mode
  document.body.addEventListener('click', function () {
    if (clickElement in clickables) {
      var win = window.open(clickables[clickElement], '_blank');
      win.focus();
    }
  }, true)
  // add clickables for mobile
  for (var key in clickables) {
    $('.mi-' + key).html('<a href="' + clickables[key] + '">' + $('.mi-' + key).html() + '</a>');
  }
  // add clickables for mobile
  items.forEach(function (element) {
    $('.m-' + element).html(flavorText[element]);
  });
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
  $('#welcome').fitText(1.4);
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
  $('.flavor-text').css({'opacity': '1', '-webkit-animation': 'fadein .33s', '-moz-animation': 'fadein .33s', '-ms-animation': 'fadein .33s', '-o-animation': 'fadein .33s', 'animation': 'fadein .33s'});
  $('.flavor-text').html(flavorText[element]);
  textHeight = $('.flavor-text').height() + 15;
  $('.text-back').css({'min-height': textHeight, 'opacity': '1', '-webkit-animation': 'fadein .33s', '-moz-animation': 'fadein .33s', '-ms-animation': 'fadein .33s', '-o-animation': 'fadein .33s', 'animation': 'fadein .33s'});
  mouseSide = left.indexOf(element) > -1 ? 'left' : 'right';
  addMouseClick(element);
}


function addMouseClick(element) {
  if (element in clickables) {
    $('body').css('cursor', 'pointer');
  }
  clickElement = element;
}

function clearMouseEvents() {
  $('body').css('cursor', 'auto');
  clickelement = '';
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
  brightness = brightness * maxBrightness[element];
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
  clearMouseEvents();
}
