import { useState, useEffect } from 'react'

/**
 * Hook simples para persistir um valor no LocalStorage.
 * Usado na Tela 5 para guardar o nome escolhido para a nossa estrela.
 */
export function useLocalStorage(key, initialValue = '') {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? stored : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      // LocalStorage indisponível (modo privado, etc.) — falha silenciosamente.
    }
  }, [key, value])

  return [value, setValue]
}
