'use client'

import InputField from './input-field'
import styles from './main-form.module.css'
import { fields } from './fields'
import UnitsDropdown from './units-dropdown'
import { useEffect, useState } from 'react'
import CalculateAllButton from './calculate-all-button'


export type UnitsType = 'm' | 'mm' | 'cm'


export default function MainForm() {
  const [
    selectedUnit,
    setSelectedUnit
  ] = useState<UnitsType>('' as UnitsType)

  useEffect(() => {
    setSelectedUnit(localStorage.getItem('selectedItem') as UnitsType || 'm')
  }, [])

  return (
    <div className={styles.mainForm}>
      <header  className={styles.header}>
        <div className={styles.title}>ТИП 1-1 1-1</div>
        <div className={styles.actions}>
          <button className={styles.close}></button>
          <button className={styles.submit}>Сохранить</button>
        </div>
      </header>

      <div className={styles.mainFormBody}>
        <UnitsDropdown
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
        <CalculateAllButton />
        {fields.map((field) => {
          return (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              selectedUnit={selectedUnit}
              calculateAllParticipant={field.calculateAllParticipant}
            />
          )
        })}
      </div>
    </div>
  )
}
