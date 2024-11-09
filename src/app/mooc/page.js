import { Suspense } from "react";
import MoocContent from './MoocContent';

export default function MoocPage() {
  return (
    <div className="min-h-full bg-white dark:bg-gray-950">
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Suspense fallback={<div>Carregando...</div>}>
          <MoocContent />
        </Suspense>
      </main>
    </div>
  );
}
