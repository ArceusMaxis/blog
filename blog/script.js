function toggleCollapse(entryNum) {
  var entry = document.getElementById("entry" + entryNum);
  var content = entry.getElementsByTagName("p")[0];
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
