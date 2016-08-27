var currentPage = 0;

function pageUpdate() {
  //alert("works");
  for (var i = 0; i < 13; i++) {
    if (i == currentPage) {
      $("#section_" + i).removeClass("section");
    }
    else {
      $("#section_" + i).addClass("section");
    }


  }
};

window.onload = pageUpdate;

$(document).ready(function () {
  $("#next").click(function () {
    currentPage += 1;
    pageUpdate();
  });

  $("#previous").click(function () {
    currentPage -= 1;
    pageUpdate();
  });

});


