
let habits = [
    {
        id: 1,
        title: 'morning run',
        category: 'Sport'
    },
    {
        id: 2,
        title: 'read 30 minutes',
        category: 'Spiritual'
    }];

let week = ['Mn', 'Tu', 'Wd', 'Th', 'St',];

export default class HabitsService {

    makeEditHabit({idx = habits.length, title, category, id}) {

        const actualId = id ? id : Math.floor(Math.random() * 10000); //change id formation

        const newHabit = {
            id: actualId,
            title,
            category
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //      reject(new Error('mistake in making habit'));
                // } else {
                    habits[idx] = newHabit;
                    resolve(habits)
                //}

            }, 700)
        })
    }

    removeHabit(idx) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75) {
                //     reject(new Error('didn`t put new title'))
                // } else {
                habits = [...habits.slice(0, idx), ...habits.slice(idx + 1)];
                resolve(habits)
                //}

            }, 700)
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

            }, 700)
        })
    }

}