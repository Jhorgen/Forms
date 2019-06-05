$(document).ready(function() {
 $("#blanks form").submit(function(event) {
    var adjectiveinput = $("input#adjective").val();
    var colorinput = $("input#color").val();
    var exclamationinput = $("input#exclamation").val();
    var pasttenseinput = $("input#past-tense-verb").val();
    var plural1input = $("input#plural-noun-1").val();
    var plural2input = $("input#plural-noun-2").val();
    var plural3input = $("input#plural-noun-3").val();
    var plural4input = $("input#plural-noun-4").val();
    var sillyinput = $("input#silly-word").val();
    var verb1input = $("input#verb-1").val();
    var verb2input = $("input#verb-2").val();

    $(".adjective").text(adjectiveinput);
    $(".color").text(colorinput);
    $(".exclamation").text(exclamationinput);
    $(".past-tense-verb").text(pasttenseinput);
    $(".plural-noun-1").text(plural1input);
    $(".plural-noun-2").text(plural2input);
    $(".plural-noun-3").text(plural3input);
    $(".plural-noun-4").text(plural4input);
    $(".silly-word").text(sillyinput);
    $(".verb-1").text(verb1input);
    $(".verb-2").text(verb2input);

    $("#story").show();

    event.preventDefault();
  });
});
