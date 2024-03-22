function toggleSettings() {
  var settingsFrame = document.getElementById("settingsFrame");
  // Toggle visibility of the settings frame
  if (settingsFrame.style.display === "none") {
    settingsFrame.style.display = "block";
  } else {
    settingsFrame.style.display = "none";
  }
}
