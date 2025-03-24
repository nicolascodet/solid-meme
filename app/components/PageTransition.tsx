'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Client-side component that uses useSearchParams
function PageTransitionInner() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    // When the path or search params change, show the loading indicator
    handleStart();

    // After a short delay, hide the loading indicator
    const timer = setTimeout(() => {
      handleComplete();
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div className="h-full bg-gold animate-loading-bar" />
    </div>
  );
}

// Wrapper component with Suspense
export default function PageTransition() {
  return (
    <Suspense fallback={null}>
      <PageTransitionInner />
    </Suspense>
  );
} 