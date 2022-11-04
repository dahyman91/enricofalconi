const current = document.getElementById("current");
const carImages = document.getElementsByClassName("carImage");
for (test of carImages) {
  test.addEventListener("click", (e) => {
    current.src = e.target.src;
  });
}
