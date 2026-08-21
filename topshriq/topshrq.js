const sunToggle = document.getElementById('sunToggle');

sunToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    sunToggle.textContent = '🌙'; 
  } else {
    sunToggle.textContent = '☀️'; 
  }
});
