import React from 'react';
import { GitHubProfile } from '../types';
import { Users, MapPin, Link as LinkIcon } from 'lucide-react';

interface ProfileCardProps {
  profile: GitHubProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={profile.avatar_url}
          alt={`${profile.login}'s avatar`}
          className="w-32 h-32 rounded-full border-4 border-gray-100"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            {profile.name || profile.login}
          </h2>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 flex items-center justify-center md:justify-start gap-1 mt-1"
          >
            <LinkIcon size={16} />
            @{profile.login}
          </a>
          {profile.bio && (
            <p className="mt-2 text-gray-700">{profile.bio}</p>
          )}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
            <div className="flex items-center gap-1">
              <Users size={16} className="text-gray-600" />
              <span className="text-sm">
                <strong>{profile.followers}</strong> followers ·{' '}
                <strong>{profile.following}</strong> following
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-gray-600" />
              <span className="text-sm">
                <strong>{profile.public_repos}</strong> repositories
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}