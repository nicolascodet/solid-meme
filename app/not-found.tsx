'use client';

import { Suspense } from 'react';
import Link from 'next/link';

// Static 404 component that doesn't use client hooks
function NotFoundContent() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-serif font-bold text-navy dark:text-white mb-6">404</h1>
        <h2 className="text-2xl font-medium text-navy dark:text-white mb-4">Page Not Found</h2>
        <p className="text-slate dark:text-slate-light mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          href="/"
          className="btn-primary inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

// Export with Suspense boundary
export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
} 