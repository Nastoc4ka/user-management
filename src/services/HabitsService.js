let habits = [
    {
        id: 32434,
        name: 'morning run',
        category: {
            id: 1111,
            name: 'Sport',
            color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},

        },
        activity: [1614938594588, 1615024994588, 1615111394588, 1615197794588, 1615284194588, 1615370594588, 1615456994588, 1615543394588, 1615629794588, 1615716194588, 1615802594588, 1615888994588, 1615888994588, 1615888994587, 1615975394587, 1616061794587, 1616148194587, 1616234594587, 1616320994587, 1616394114435, 1616402754467, 1616496385455, 1616582785455, 1616669185455]
    }, //8 in row, other twice a day
    {
        id: 4334,
        name: 'read english literature',
        category: {
            id: 5466,
            name: 'Spiritual',
            color: {value: 'forest', label: 'Forest', color: '#F6B09D', bgColor: '#EDC4BC'},
        },
        activity: [1616320994586, 1616402754433] //21mar,22mar
    },
    {
        id: 4335,
        name: 'swim twice a week',
        category: {
            id: 1111,
            name: 'Sport',
            color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
        },
        activity: [1615888994586, 1616496385459] //16mar, 23mar
    },];

let categories = [
    {
        id: 5466,
        name: 'Spiritual',
        color: {value: 'pink', label: 'Pink', color: '#F6B09D', bgColor: '#EDC4BC'},
    },
    {
        id: 2222,
        name: 'Study',
        color: {value: 'purple', label: 'Purple', color: '#A2ACEB', bgColor: '#B2B7F6'},

    },
    {
        id: 1111,
        name: 'Sport',
        color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
    },
    {
        id: 6776,
        name: 'Health',
        color: {value: 'menthol', label: 'Menthol', color: '#B4F6A4', bgColor: '#C0EBC4'},

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