function pageUpdate(change) {
  var i = $(".section:visible").index() + change;
  // showing appropriate section
  $(".section").hide();
  $("#tutorial .section_" + i).show();
  // showing/hiding nav buttons
  if (i) {
    $("#nav .previous").show();
  } else {
    $("#nav .previous").hide();
  } 
  if ($("#tutorial .section_" + (i + 1)).length) {
    $("#nav .next").show();
  } else {
    $("#nav .next").hide();
  }
};

$(document).ready(function () {
  $("#nav button").click(function (e) {
    pageUpdate($(e.target).hasClass('next') ? 1 : -1);
  });

  pageUpdate(0);
});
