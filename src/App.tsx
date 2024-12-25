import React from 'react';
import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { RepositoryList } from './components/RepositoryList';
import { useGitHubData } from './hooks/useGitHubData';
import { Github } from 'lucide-react';

function App() {
  const { profile, repositories, error, isLoading, fetchUserData } = useGitHubData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Github size={32} className="text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">ProfileCred</h1>
            </div>
            <p className="text-gray-600">
              Enter a GitHub username to view their profile
            </p>
          </div>

          <SearchBar onSearch={fetchUserData} isLoading={isLoading} />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {profile && <ProfileCard profile={profile} />}
          {repositories.length > 0 && <RepositoryList repositories={repositories} />}
        </div>
      </div>
    </div>
  );
}

export default App;