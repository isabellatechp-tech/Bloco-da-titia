/**
 * Utilitário para obter a URL base da API
 * Funciona tanto em desenvolvimento quanto em produção
 */
export function getApiUrl() {
  // Em produção (Vercel), usa a variável de ambiente
  if (typeof window !== 'undefined') {
    // Client-side: usa a URL da API definida ou fallback
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  }
  
  // Server-side: usa a URL da API ou localhost
  return process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
}

/**
 * Função helper para fazer requisições à API
 */
export async function apiRequest(endpoint, options = {}) {
  const apiUrl = getApiUrl();
  const url = `${apiUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição API:', error);
    throw error;
  }
}

