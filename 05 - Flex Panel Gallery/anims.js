const panels = document.querySelectorAll('.panel');

var toggleOpen = function() {
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
