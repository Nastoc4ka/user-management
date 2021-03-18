let habits = [
    {
        id: 32434,
        name: 'morning run',
        category: {
            id: 6776,
            name: 'Sport',
            color: ['color', 'background']
        },
        activity: []
    },
    {
        id: 4334,
        name: 'read',
        category: {
            id: 5466,
            name: 'Spiritual',
            color: ['color', 'background']
        },
        activity: []
    },
    {
        id: 4335,
        name: 'swim',
        category: {
            id: 6776,
            name: 'Sport',
            color: ['color', 'background']
        },
        activity: []
    },];

let categories = [
    {
        id: 5466,
        name: 'Spiritual',
        color: ['color', 'background']
    },
    {
        id: 6776,
        name: 'Sport',
        color: ['color', 'background']
    }];

export default class HabitsService {

    createHabit(newHabit) {
        newHabit.id = Date.now();
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
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // if(Math.random() > 0.75) {
                    //     reject(new Error('didn`t put new title'))
                    // } else {
                    const idx = habits.findIndex((h) => h.id === habit.id);
                    habits[idx] = habit;
                    resolve(habits)
                    //}
                }, 500)
            }
        )
    }

    removeHabit(id) {
        const idx = habits.findIndex((h) => h.id === id);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t put new title'))
                // } else {
                habits = [...habits.slice(0, idx), ...habits.slice(idx + 1)];
                resolve(habits)
                //}

            }, 500)
        })
    }

    getHabits() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t fetched'))
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
                //     reject(new Error('didn`t fetched'))
                // } else {
                resolve(categories)
                //}

            }, 500)
        })
    }

}