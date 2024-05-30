interface Field {
    id: string,
    label: string,
    calculateAllParticipant: boolean
}

export const fields: Field[] = [
    {
        id: 'areaGross',
        label: 'площадь GROSS, фут²',
        // label: 'площадь GROSS',
        calculateAllParticipant: false
    },
    {
        id: 'areaNet',
        label: 'площадь NET, фут²',
        // label: 'площадь NET',
        calculateAllParticipant: false
    },
    {
        id: 'bedrooms',
        label: 'жилая площадь: сумма площадей',
        calculateAllParticipant: true
    },
    {
        id: 'kitchen',
        label: 'площадь кухни',
        calculateAllParticipant: true
    },
    {
        id: 'corridors',
        label: 'площадь коридоров',
        calculateAllParticipant: true
    },
    {
        id: 'pantry',
        label: 'площадь кладовки',
        calculateAllParticipant: true
    },

]