import { useState } from 'react'
import styles from './units-dropdown.module.css'
import clsx from 'clsx'
import { UnitsType } from './main-form'
import useOutsideClick from '@/hooks/useOutsideClick'


interface UnitsDropdownProps {
  selectedUnit: UnitsType,
  setSelectedUnit: React.Dispatch<React.SetStateAction<UnitsType>>
}


const options: {unit: UnitsType, unitName: string}[] = [
  { unit: 'm', unitName: 'Метры'} ,
  { unit: 'cm', unitName: 'Сантиметры' },
  { unit: 'mm', unitName: 'Миллиметры' }
]


export default function UnitsDropdown({
  selectedUnit,
  setSelectedUnit
}: UnitsDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const outsideClickRef = useOutsideClick(() => setIsExpanded(false))

  return (
    <div
      className={styles.unitsDropdown}
      ref={outsideClickRef as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <label htmlFor="units">единица измерения</label>
      <button
        className={clsx(
          styles.dropdownMenu,
          isExpanded && styles.expanded
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {options.find((option) => option.unit == selectedUnit)?.unitName}
        <ExpandSign />
      </button>

      <div className={clsx(
          styles.options,
          isExpanded && styles.expanded
        )}>
          {options.map((option) => (
            <Option
              key={option.unit}
              unit={option.unit}
              unitName={option.unitName}
              selectedUnit={selectedUnit}
              setSelectedUnit={setSelectedUnit}
              setIsExpanded={setIsExpanded}
            />
          ))}
        </div>
    </div>
  )
}


function Option({
  unit,
  unitName,
  selectedUnit,
  setSelectedUnit,
  setIsExpanded
}: {
  unit: UnitsType,
  unitName: string,
  selectedUnit: UnitsType,
  setSelectedUnit: React.Dispatch<React.SetStateAction<UnitsType>>,
  setIsExpanded:  React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <button
      className={clsx(
        styles.option,
        (selectedUnit == unit) && styles.selected
      )}
      onClick={() => {
        setSelectedUnit(unit)
        localStorage.setItem('selectedUnit', unit)
        setIsExpanded(false)
      }}

    >{unitName}</button>
  )
}


function ExpandSign() {
  return (
    <svg
      className={styles.expandSign}
      viewBox="0 0 11 6"
      width="11"
      height="6"
    >
      <path d="M.16.998l4.546 4.67c.429.442 1.125.442 1.555 0L10.839.965a.576.576 0 0 0 .006-.793.54.54 0 0 0-.784-.006L5.872 4.471a.54.54 0 0 1-.778 0L.938.2a.539.539 0 0 0-.777 0 .576.576 0 0 0 0 .798z"></path>
    </svg>
  )
}