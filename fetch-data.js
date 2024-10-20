document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        const users = await response.json();

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

    } catch (error) {
        // Handle errors
        dataContainer.textContent = 'Failed to load user data.';
    }
});
