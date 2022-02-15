const panels = document.querySelectorAll('.panel');

let toggleOpen = function() {
  this.classList.toggle('open');
}

let toggleActive = function(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(act => act.addEventListener('transitionend', toggleActive));
