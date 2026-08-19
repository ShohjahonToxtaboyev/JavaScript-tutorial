const sunToggle = document.getElementById('sunToggle');

sunToggle.addEventListener('click', () => {
  // Klasni qo'shadi yoki o'chiradi
  document.body.classList.toggle('dark-mode');
  
  // Rejimga qarab ikonkani almashtiradi
  if (document.body.classList.contains('dark-mode')) {
    sunToggle.textContent = '🌙'; // Qorong'u bo'lsa oy
  } else {
    sunToggle.textContent = '☀️'; // Yorug' bo'lsa quyosh
  }
});
