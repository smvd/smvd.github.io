const topButtonTrigger = 100;
const topButton = document.getElementById('topButton')
const header = document.getElementById('header')

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > topButtonTrigger) {
    topButton.classList.remove('fade');
    header.classList.add('slide');
  } else {
    topButton.classList.add('fade');
    header.classList.remove('slide');
  }
})

function UpdateMenu() {
    let items = document.getElementsByClassName("menuIcon")
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("change");
    }

    if (document.getElementById("menuOverlay").style.height == "100vh") {
        document.getElementById("menuOverlay").style.height = "0vh";
    } else {
        document.getElementById("menuOverlay").style.height = "100vh";
    }
}
