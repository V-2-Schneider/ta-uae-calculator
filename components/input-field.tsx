import { useEffect, useState } from 'react'
import styles from './input-field.module.css'
import validateInput from '@/scripts/validateInput'
import calculateInput from '@/scripts/calculateInput'
import { UnitsType } from './main-form'


interface InputFieldProps {
  id: string,
  label: string,
  selectedUnit: UnitsType,
  calculateAllParticipant: boolean
}


export default function InputField({
  id,
  label,
  selectedUnit,
  calculateAllParticipant
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem(id) || '0'
  )

  const calculate = () => {
    console.log('calculate all', inputValue, id, label)
    setInputValue(calculateInput(inputValue, selectedUnit))
  }

  useEffect(() => {
    if (calculateAllParticipant) {
      document.addEventListener('calculateAll', calculate)
    }

    return () => document.removeEventListener('calculateAll', calculate)
  }, [inputValue])

  useEffect(() => {
    localStorage.setItem(id, inputValue)
  }, [inputValue])

  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        autoComplete="off"
        type="text"
        value={inputValue}
        onChange={(e) => {
          return setInputValue(validateInput(e.target.value, selectedUnit))
        }}
      />
      <button
        className={styles.calculateButton}
        tabIndex={-1}
        onClick={() => calculate()}
      ></button>
    </div>
  )
}
