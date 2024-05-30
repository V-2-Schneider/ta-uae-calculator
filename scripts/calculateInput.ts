import { UnitsType } from "@/components/main-form"

export default function calculateInput(
    value: string,
    selectedUnit: UnitsType
): string {
    const metersToFootsRatio = 10.7639104

    let ratio = 0;

    switch(selectedUnit) {
        case 'm':
            ratio = metersToFootsRatio
            break
        case 'cm':
            ratio = metersToFootsRatio / (100 * 100)
            break
        case 'mm':
            ratio = metersToFootsRatio / (1000 * 1000)
            break
    }

    if (value.includes(' ')) {
        return (value
            .replaceAll(/  +/g, ' ')
            .split(' ')
            .map((chunk) => calculateInput(chunk, selectedUnit))
            .reduce((a, b) => `${a}+${b}`)
        )
    }

    try {
        const result = eval(value) * ratio
        return String(Math.round(result * 100) / 100)
    } catch (e) {
        let message = e instanceof Error ? e.message : e
        console.log(message)
        return value
    }
}