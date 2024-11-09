import { Suspense } from "react";
import BeecrowdContent from './BeecrowdContent';

export default function BeecrowdPage() {
  return (
    <div className="min-h-full bg-white dark:bg-gray-950">
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Suspense fallback={<div>Carregando...</div>}>
          <BeecrowdContent />
        </Suspense>
      </main>
    </div>
  );
}
