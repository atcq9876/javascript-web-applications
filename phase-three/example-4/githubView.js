class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.repoImageEl = document.createElement('img');

    document.querySelector('div').append(this.repoImageEl);

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    
    this.repoImageEl.setAttribute('src', repoData.organization.avatar_url);
    repoNameEl.textContent = repoData.full_name;
    repoDescriptionEl.textContent = repoData.description;
  }
}

module.exports = GithubView;