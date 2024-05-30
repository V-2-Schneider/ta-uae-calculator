import { UnitsType } from "@/components/main-form"
import calculateInput from "./calculateInput"


export default function validateInput(value: string, selectedUnit: UnitsType) {
    if (value.includes('=')) {
      return calculateInput(value.replaceAll('=', ''), selectedUnit)
    }

    const matchStr = '0123456789,.+-/*()[xXчЧхХ '
    let result = ''

    for (const letter of value) {
      if (matchStr.includes(letter)) {
        result += letter
      }
    }

    return (result
      .trimStart()
      .replace(/^0/, '')
      .replaceAll(',', '.')
      .replaceAll('..', '.')
      .replaceAll(/[[xXчЧхХ]/g, '*')
      .replaceAll('**', '*')
      .replaceAll('  ', ' ')
      .replace(/^$/, '0')
      .replace(/^\./, '0\.')
    )
  }