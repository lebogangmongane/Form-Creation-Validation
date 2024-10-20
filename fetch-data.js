document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    // Define the fetchUserData function
    async function fetchUserData() {
        try {
            // Fetch user data
            const response = await fetch(apiUrl);
            const users = await response.json();
            
            // Return the fetched user data
            return users;
        } catch (error) {
            // Handle errors
            console.error('Failed to fetch user data:', error);
            return null;
        }
    }

    // Call fetchUserData and handle the result
    const users = await fetchUserData();
    
    if (users) {
        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list of users
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } else {
        // If fetching users failed
        dataContainer.textContent = 'Failed to load user data.';
    }
});
