let line1 = "Hello, I'm Eric.";
let line2 = "I'm a software engineer.";
var i = 0;
var j = 0;

function startTypeWriter() {
  if (i < line1.length) {
    $('#typing1').append(line1.charAt(i));
    i++;
    if (i == 6) {
      setTimeout(startTypeWriter, 1050);
    } else if (i == 16) {
      setTimeout(startTypeWriter, 1050);
    } else {
      setTimeout(startTypeWriter, 80);
    }
  } else {
    $('#typing1').css('border', 'none');
    if (j < line2.length) {
      $('#typing2').append(line2.charAt(j));
      j++;
      setTimeout(startTypeWriter, 80);
    }
  }
}

function showMore() {
  $('#more').fadeIn(4000);
}

function submitForm() {
  var frm = document.getElementsByName('contact-form')[0];
  frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
  return false; // Prevent page refresh
}

$(document).ready(function () {
  if ($(document).width() >= 765) {
    $('#navbar').fadeIn(1500);
    startTypeWriter();
    setTimeout(showMore, 6500);
  } else {
    $('#typing2').remove();
    $('#typing1').html(
      "<h1>Hello, I'm <span>Eric</span>.</br>I'm a software engineer.</h1>"
    );
    $('#more').fadeIn(2000);
    $('#navbar').fadeIn(2000);
  }
});
