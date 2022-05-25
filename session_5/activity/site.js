$(document).ready(function () {
  var card_types = ["diams", "spades", "clubs", "hearts"];
  var card_vals = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  $(".auto-card").each(function (idx) {
    var type = card_types[Math.floor(Math.random() * (3 - 0 + 0) + 0)];
    var val = card_vals[Math.floor(Math.random() * (12 - 0 + 0) + 0)];

    if (type == "spades" || type == "clubs") {
      var color = "black";
    } else {
      var color = "red";
    }
    /* Set the card */
    var index = idx + 1;
    $("#card-" + index).addClass(color);
    $("#card-" + index + " .top-left .number").html(val);
    $("#card-" + index + " .bottom-right .number").html(val);
    $("#card-" + index + " .top-left .symbol").html("&" + type + ";");
    $("#card-" + index + " .bottom-right .symbol").html("&" + type + ";");
    $("#card-" + index + " .center .center-symbol").html("&" + type + ";");
  });
});