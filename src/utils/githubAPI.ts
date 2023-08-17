interface GitHubUser {
    avatar_url: string;
    login: string;
    bio: string;
    html_url: string;
  }
  
  async function fetchUserData(username: string): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const userData = await response.json();
      return userData as GitHubUser;
    } else {
      throw new Error('User not found');
    }
  }
  
  export { fetchUserData };
  