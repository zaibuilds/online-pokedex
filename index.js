let firstHeader = document.getElementById('first_heading');

firstHeader.addEventListener("mouseover", function() {

    const container = document.getElementById("intro_div");

   
    container.style.visibility = "visible";
    container.style.transition = 'ease-in-out 800ms'
    container.style.transform = 'ease-in-out'

  });
