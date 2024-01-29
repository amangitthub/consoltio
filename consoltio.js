// header js
window.onscroll = () => {
    const header = document.querySelector('#headbar');
    if(this.scrollY <= 10) header.className = ''; else header.className = 'scroll';
  };


  // parallax ja      
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  




