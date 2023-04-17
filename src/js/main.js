const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

function drawOnCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    // You can customize the drawing code here for each project
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

  }
  
  window.addEventListener("DOMContentLoaded", () => {
    drawOnCanvas("project-1-canvas");
    drawOnCanvas("project-2-canvas");
    drawOnCanvas("project-3-canvas");
  });


  
