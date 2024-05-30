import { useEffect } from 'react'
import styles from './calculate-all-button.module.css'


export default function CalculateAllButton() {
  const calculateAll = () => {
    const event = new Event('calculateAll')
    document.dispatchEvent(event)
  }

  useEffect(() => {
    const calculateOnHotKey = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key == 'Enter') {
        calculateAll()
      }
    }

    window.addEventListener('keypress', calculateOnHotKey)

    return () => window.removeEventListener('keypress', calculateOnHotKey)
  }, [])

  return (
    <div className={styles.calculateAllButton}>
      <label htmlFor={'calculateAll'}>{'рассчитать'}</label>
      <button onClick={() => calculateAll()}>
        Рассчитать
      </button>
    </div>
  )
}
