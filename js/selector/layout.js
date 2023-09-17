document.addEventListener("DOMContentLoaded", function() {
    let menuSelector = document.getElementById("menu-selector");
  
    /* Set page one */
    let pageOne = document.createElement("a");
    pageOne.textContent = "Exercise 1";
    pageOne.href = "../../html/pages/page_1.html";

  
    menuSelector.appendChild(pageOne);

    /* Set page two */ 
    let pageTwo = document.createElement("a");
    pageTwo.textContent = "Exercise 2";
    pageTwo.href = "../../html/pages/page_2.html";

    menuSelector.appendChild(pageTwo);

     /* Set page three*/ 
    let pageThree = document.createElement("a");
    pageThree.textContent = "Exercise 3";
    pageThree.href = "../../html/pages/page_3.html";

    menuSelector.appendChild(pageThree);

    /* Set page four */ 
    let pageFour = document.createElement("a");
    pageFour.textContent = "Exercise 4";
    pageFour.href = "../../html/pages/page_4.html";

    menuSelector.appendChild(pageFour);
});
