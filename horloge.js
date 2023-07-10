//Appeler l'heure
clock();

//Afficher l'heure
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();
  const hour = hours * 30; //360/12 = 30
  const minute = minutes * 6;
  const second = secondes * 6;

  document.querySelector('.hours').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.second').style.transform = `rotate(${second}deg)`;
}

// Interval

setInterval(clock, 1000);
