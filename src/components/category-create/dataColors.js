export const colourOptions = [
    {value: 'blue', label: 'Blue', color: '#0052CC', bgColor: '#ABD9F6'},
    {value: 'orange', label: 'Orange', color: '#FF8B00', bgColor: '#FCC201'},
    {value: 'yellow', label: 'Yellow', color: '#FFC400', bgColor: '#FFFCC3'},
    {value: 'green', label: 'Green', color: '#36B37E', bgColor: '#ABCB9A'},
];

export const flavourOptions = [
    {value: 'vanilla', label: 'Vanilla', rating: 'safe'},
    {value: 'chocolate', label: 'Chocolate', rating: 'good'},
    {value: 'strawberry', label: 'Strawberry', rating: 'wild'},
    {value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy'},
];

export const optionLength = [
    {value: 1, label: 'general'},
    {
        value: 2,
        label:
            'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
        value: 3,
        label:
            "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
];

export const dogOptions = [
    {id: 1, label: 'Chihuahua'},
    {id: 2, label: 'Bulldog'},
    {id: 3, label: 'Dachshund'},
    {id: 4, label: 'Akita'},
];

export const groupedOptions = [
    {
        label: 'Colours',
        options: colourOptions,
    },
    {
        label: 'Flavours',
        options: flavourOptions,
    },
];
