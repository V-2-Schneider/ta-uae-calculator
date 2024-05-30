'use client'

import { useRef, useEffect } from 'react'


export default function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLElement>()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return ref
}
