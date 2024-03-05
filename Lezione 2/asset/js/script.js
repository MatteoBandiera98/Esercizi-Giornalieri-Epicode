// Funzione per salvare il nome nell'localStorage
function saveName() {
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
      localStorage.setItem('NomeUtente', name);
      document.getElementById('savedName').innerText = 'Nome salvato: ' + name;
    } else {
      alert('Inserisci un nome valido.');
    }
  }
  
  function removeName() {
    localStorage.removeItem('userName');
    document.getElementById('savedName').innerText = '';
  }
  
  // Funzione per avviare il contatore
  function startCounter() {
    let startTime = sessionStorage.getItem('startTime');
    if (!startTime) {
      startTime = new Date().getTime(); 
      sessionStorage.setItem('startTime', startTime);
    }
    
    // Aggiorna il contatore ogni secondo
    setInterval(updateCounter, 1000);
  }
  
  // Funzione per aggiornare il contatore
  function updateCounter() {
    let startTime = sessionStorage.getItem('startTime');
    let currentTime = new Date().getTime(); 
    let elapsedTime = Math.floor((currentTime - startTime) / 1000); 
    document.getElementById('timer').innerText = elapsedTime;
  }
  
  // Mostra il nome precedentemente salvato sopra l'input field, se presente
  window.onload = function() {
    let savedName = localStorage.getItem('NomeUtente');
    if (savedName) {
      document.getElementById('savedName').innerText = 'Nome salvato: ' + savedName;
      document.getElementById('nameInput').value = savedName;
    }
  
    
    document.getElementById('saveButton').addEventListener('click', saveName);
    document.getElementById('removeButton').addEventListener('click', removeName);
  
    startCounter(); 
  }
  