let habits = [
    {
        id: 32434,
        name: 'morning run',
        category: {
            id: 1111,
            name: 'Sport',
            color: {value: 'ocean', label: 'Ocean', color: '#00B8D9'},

        },
        activity: [1615888994588, 1615888994587, 1615975394587, 1616061794587, 1616148194587, 1616234594587, 1616320994587, 1616394114435, 1616402754467, 1616496385455]
    }, //8 in row, other twice a day
    {
        id: 4334,
        name: 'read english literature',
        category: {
            id: 5466,
            name: 'Spiritual',
            color: {value: 'forest', label: 'Forest', color: '#00875A'},
        },
        activity: [1616320994586, 1616402754433] //21mar,22mar
    },
    {
        id: 4335,
        name: 'swim twice a week',
        category: {
            id: 1111,
            name: 'Sport',
            color: {value: 'ocean', label: 'Ocean', color: '#00B8D9'},
        },
        activity: [1615888994586, 1616496385459] //16mar, 23mar
    },];

let categories = [
    {
        id: 5466,
        name: 'Spiritual',
        color: {value: 'forest', label: 'Forest', color: '#00875A'},
    },
    {
        id: 2222,
        name: 'Study',
        color: {value: 'red', label: 'Red', color: '#FF5630'},

    },
    {
        id: 1111,
        name: 'Sport',
        color: {value: 'ocean', label: 'Ocean', color: '#00B8D9'},
    },
    {
        id: 6776,
        name: 'Health',
        color: {value: 'silver', label: 'Silver', color: '#666666'},

    },
];

export default class HabitsService {

    doneHabit(id) {
        console.log(id);
        const doneHabit = habits.find(habit => habit.id === id);
        console.log(doneHabit);

        doneHabit.activity.push(Date.now());
        //new Date(doneHabit.activity[doneHabit.activity.length - 1]);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t put new title'))
                // } else {
                resolve(doneHabit)
                //}
            }, 500)
        })

    }

    createHabit(newHabit) {
        newHabit.id = Date.now();
        newHabit.activity = [];

        console.log(newHabit);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t put new title'))
                // } else {
                habits.push(newHabit);
                resolve(habits)
                //}
            }, 500)
        })
    }

    updateHabit(habit) {
        const idx = habits.findIndex((h) => h.id === habit.id);
        habits[idx] = habit;
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // if(Math.random() > 0.75) {
                    //     reject(new Error('didn`t put new title'))
                    // } else {
                    resolve(habit)
                    //}
                }, 500)
            }
        )
    }

    removeHabit(id) {
        const idx = habits.findIndex((h) => h.id === id);
        habits = [...habits.slice(0, idx), ...habits.slice(idx + 1)];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                // reject(new Error('didn`t delete'));
                // } else {
                resolve(id)
                //}

            }, 500)
        })
    }

    getHabits() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //reject(new Error('didn`t fetched habits'))
                // } else {
                resolve(habits)
                //}

            }, 500)
        })
    }

    getCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t fetched categories'))
                // } else {
                resolve(categories)
                //}

            }, 500)
        })
    }

    createCategory(newCategory) {
        newCategory.id = Date.now();
        console.log(newCategory);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t put new title'))
                // } else {
                categories.push(newCategory);
                console.log(categories);
                resolve(categories)
                //}
            }, 500)
        })
    }
}