document.getElementById('simForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const simNumber = document.getElementById('simNumber').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    fetch('/api/activate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber, phoneNumber }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.message || 'SIM activated successfully!';
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Error activating SIM.';
        console.error('Error:', error);
    });
});

document.getElementById('deactivateForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const simNumber = document.getElementById('deactivateSimNumber').value;

    fetch('/api/deactivate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.message || 'SIM deactivated successfully!';
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Error deactivating SIM.';
        console.error('Error:', error);
    });
});
