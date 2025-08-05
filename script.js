

async function apiData(url) {
   try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
       
       const card = `
  <div class="card">
    <img src="${data.avatar_url}" alt="${data.login}'s avatar" class="avatar">
    <h2>${data.name || data.login}</h2>
    <p>${data.bio || 'No bio available'}</p>
    <div class="stats">
      <p>👥 Followers: <strong>${data.followers}</strong></p>
      <p>🔄 Following: <strong>${data.following}</strong></p>
      <p>📦 Public Repos: <strong>${data.public_repos}</strong></p>
    </div>
    <a href="${data.html_url}" target="_blank" class="profile-link">View Profile</a>
  </div>
`;




      
        document.getElementById('user-card').innerHTML = card;
   } catch (error) {
       console.error('There was a problem with the fetch operation:', error);
   }
}




const input = document.getElementById('github-url');
const button = document.getElementById('fetch-button');

button.addEventListener('click', () => {
    const url = input.value;
    apiData(url);
});
