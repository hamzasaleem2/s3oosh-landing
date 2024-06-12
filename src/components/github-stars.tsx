"use client";
import React, { useState, useEffect } from 'react';
import Github from './icons/Github';

export default function GithubStar({ repo }: { repo: string }) {
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error(error);
      }
    };

    if (repo) {
      fetchStarCount();
    }
  }, [repo]);

  return (
    <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer" className="flex items-center group text-white">
    <div className="flex items-center space-x-2 rounded-md bg-gray-800 p-2 sm:p-3 transition duration-300 ease-in-out transform hover:scale-105">
      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
      <p className="font-medium">Star</p>
    </div>
    <div className="relative flex items-center p-2 sm:p-3 rounded-md bg-gray-500 ml-2">
      <p className="font-display font-medium">⭐ {starCount}</p>
    </div>
  </a>
  );
}
