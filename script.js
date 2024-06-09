document.addEventListener("DOMContentLoaded", function() {
  const leftContentDiv = document.querySelector(".left_content div");
  const left1 = document.querySelector(".x");
  const left2 = document.querySelector(".y");
  const leftContent = document.querySelector(".left_content");
  const expandedContentTop = document.querySelector(".expanded_content_top");
  const expandedContentBtm = document.querySelector(".expanded_content_btm");
  expandedContentTop.style.display = "none";
  expandedContentBtm.style.display = "none";

  leftContentDiv.addEventListener("click", function() {
    if (left1.classList.contains("expanded_1")) {
      left1.classList.remove("expanded_1");
      left2.classList.remove("expanded_2");
      leftContent.style.display = "block";
      expandedContentTop.style.display = "none";
      expandedContentBtm.style.display = "none";
    } else {
      left1.classList.add("expanded_1");
      left2.classList.add("expanded_2");
      leftContent.style.display = "none";
      expandedContentTop.style.display = "flex";
      expandedContentBtm.style.display = "block";
    }
  });

  const expanded1Close = document.querySelector(".expanded_content_top img");
  expanded1Close.addEventListener("click", function() {
    left1.classList.remove("expanded_1");
    left2.classList.remove("expanded_2");
    leftContent.style.display = "block";
    expandedContentTop.style.display = "none";
    expandedContentBtm.style.display = "none";
  });
});
