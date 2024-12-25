import React from 'react';
import { Repository } from '../types';
import { Star, GitFork, Code } from 'lucide-react';

interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  if (repositories.length === 0) return null;

  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">Latest Repositories</h3>
      <div className="space-y-4">
        {repositories.map(repo => (
          <div key={repo.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
              <div>
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
                )}
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              {repo.language && (
                <span className="flex items-center text-sm text-gray-600">
                  <Code size={16} className="mr-1" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center text-sm text-gray-600">
                <Star size={16} className="mr-1" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <GitFork size={16} className="mr-1" />
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}