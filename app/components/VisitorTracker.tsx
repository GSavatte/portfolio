'use client'
import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const hasVisited = localStorage.getItem('has_visited');

    if (!hasVisited) {
      fetch('/api/notify', { method: 'POST' })
        .then(response => {
          if (response.ok) {
            localStorage.setItem('has_visited', 'true');
          }
        });
    }
  }, []);

  return null; 
}