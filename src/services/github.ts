import { GitHubProfile, Repository } from '../types';

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(response.status === 404 ? 'User not found' : 'Failed to fetch profile');
  }
  return response.json();
}

export async function fetchUserRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
}