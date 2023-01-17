function toggleCollapse(entryNum) {
  var entry = document.getElementById("entry" + entryNum);
  var content = entry.getElementsByTagName("p")[0];
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
