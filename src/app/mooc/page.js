import { Suspense } from "react";
import MoocContent from './MoocContent';

// Função para buscar arquivos do repositório
async function getRepoContents() {
  try {
    const response = await fetch('https://api.github.com/repos/matheussricardoo/java-programming1-mooc-helsinki/contents', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) throw new Error('Failed to fetch');
    
    const contents = await response.json();
    return contents.filter(item => item.type === 'dir');
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    return [];
  }
}

export default async function MoocPage() {
  const folders = await getRepoContents();
  
  return (
    <div className="min-h-full bg-white dark:bg-gray-950">
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Suspense fallback={<div>Carregando...</div>}>
          <MoocContent initialFolders={folders} />
        </Suspense>
      </main>
    </div>
  );
}
