hideNaslov = () => {
  naslov1 = document.getElementById("main-heading1");
  naslov2 = document.getElementById("main-heading2");

  if (naslov1.style.display === "none") {
    naslov1.style.display = "block";
    naslov2.style.display = "none";
  } else {
    naslov1.style.display = "none";
    naslov2.style.display = "block";
  }
};
