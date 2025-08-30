function login() {
  const user = document.getElementById('username').value;
  if(user) {
    document.getElementById('userDisplay').textContent = user;
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appScreen').style.display = 'block';
  } else {
    alert('Ingresá un usuario');
  }
}

function logout() {
  document.getElementById('loginScreen').style.display = 'block';
  document.getElementById('appScreen').style.display = 'none';
}

// Función para editar DNI con toque largo
let pressTimer;
const dniCard = document.getElementById('dniCard');

dniCard.addEventListener('mousedown', () => {
  pressTimer = window.setTimeout(editDNI, 2000);
});
dniCard.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});
dniCard.addEventListener('touchstart', () => {
  pressTimer = window.setTimeout(editDNI, 2000);
});
dniCard.addEventListener('touchend', () => {
  clearTimeout(pressTimer);
});

function editDNI() {
  const name = prompt('Nombre:', document.getElementById('dniName').textContent);
  const dni = prompt('DNI:', document.getElementById('dniNumber').textContent);
  const birth = prompt('Fecha de nacimiento:', document.getElementById('dniBirth').textContent);
  if(name && dni && birth) {
    document.getElementById('dniName').textContent = name;
    document.getElementById('dniNumber').textContent = dni;
    document.getElementById('dniBirth').textContent = birth;
    alert('Datos actualizados ✅');
  }
}
