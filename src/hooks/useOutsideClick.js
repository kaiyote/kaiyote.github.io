import { useEffect } from 'preact/hooks'

export const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = event => !ref?.current?.contains(event.target) && handler(event)
    document.addEventListener('mousedown', listener)
    return () => document.removeEventListener('mousedown', listener)
  }, [ref, handler])
}
