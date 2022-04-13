let numberSection = 1;

function handleNavigation(direction) {
  numberSection = numberSection + direction;

  if(numberSection < 1) numberSection = 1;
  else if(numberSection > 3) numberSection = 3;

  document.getElementById('sections-counter').innerHTML = `${numberSection}/3`;
  document.getElementById('bar').style.height = `${numberSection * 34}%`;
  document.getElementById(`section-${numberSection}`).scrollIntoView();
}