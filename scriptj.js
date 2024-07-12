let guests = [];

document.getElementById('rsvpButton').addEventListener('click', function() {
    document.getElementById('rsvpForm').classList.remove('hidden');
});

document.getElementById('submitRSVP').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        guests.push({ name, phone });
        document.getElementById('rsvpMessage').textContent = `¡Gracias ${name} por confirmar tu asistencia! Te contactaremos al ${phone}.`;
        document.getElementById('rsvpForm').classList.add('hidden');
        console.log('Lista de invitados:', guests); // Solo visible en la consola del navegador
    } else {
        document.getElementById('rsvpMessage').textContent = 'Por favor, completa ambos campos.';
        document.getElementById('rsvpMessage').style.color = '#dc3545';
    }
});
