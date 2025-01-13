document.addEventListener('DOMContentLoaded', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('userImage').src = user.picture.large;
            document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('userEmail').textContent = user.email;
            document.getElementById('userPhone').textContent = user.phone;
            document.getElementById('userLocation').textContent = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
