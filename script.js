document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-button");
  const body = document.body;

  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  //change to your user here
  const username = "guilhermesenci";

  fetchRepos = async () => {
    const url = `https://api.github.com/users/${username}/repos`;

    const response = await fetch(url);

    if (response.ok) {
      const repos = await response.json();
      displayRepos(repos);
    } else {
      console.error("Erro ao acessar a API:", response.status);
    }
  };

  displayRepos = (repos) => {
    const reposContainer = document.getElementById("projects");
    repos.forEach((repo) => {
      const repoElement = document.createElement("div");
      repoElement.innerHTML = `
    <div class="experiences-box mobile">
      <div class="experiences-box-content">
        <a href=${repo.html_url} target="_blank" class="external-link">
          <p class="description-title">${repo.name}</p>
          <img src="./assets/external-link.png" alt="external icone" class="small-icon">
          <img src="./assets/icons-external-link-white.png" alt="external icone" class="small-icon-white">
        </a>
        <span class="text-box">${repo.description || ""}</span>
      <div class="tec-used">${repo.language}</div>
      </div>
    </div>
    `;
      reposContainer.appendChild(repoElement);
    });
  };
  fetchRepos();
});