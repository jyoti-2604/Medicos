// Modal functionality
function openModal() {
    document.getElementById('appointmentModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    document.getElementById('appointmentModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically collect the form data and send it to your server
    const formData = {
        name: document.getElementById('patientName').value,
        email: document.getElementById('patientEmail').value,
        phone: document.getElementById('patientPhone').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        department: document.getElementById('department').value,
        message: document.getElementById('message').value
    };
    
    // For demonstration purposes, log the data
    console.log('Appointment Form Data:', formData);
    
    // You would typically send this data to your server here
    
    // Close the modal and show success message
    alert('Appointment request submitted successfully!');
    closeModal();
    this.reset();
});