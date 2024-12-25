import { useState } from 'react';
import { GitHubProfile, Repository } from '../types';
import { fetchGitHubProfile, fetchUserRepositories } from '../services/github';

export function useGitHubData() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const [profileData, reposData] = await Promise.all([
        fetchGitHubProfile(username),
        fetchUserRepositories(username)
      ]);
      setProfile(profileData);
      setRepositories(reposData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProfile(null);
      setRepositories([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profile,
    repositories,
    error,
    isLoading,
    fetchUserData
  };
}