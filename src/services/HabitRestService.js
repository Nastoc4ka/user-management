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

const urlHabit = 'https://personal-happier-api.herokuapp.com/habits';
const urlCategories = 'https://personal-happier-api.herokuapp.com//categories';

export default class HabitsService {

    makeEditHabit({name, category_id, id}) {

        const actualId = id ? id : Date.now(); //change id formation

        const habit = {
            category_id,
            created_by: 1,
            id: actualId,
            name,
        };

        const options = {
            method: actualId === id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
            body: JSON.stringify(habit),
        };

        return fetch(urlHabit, options).then(response => {
            if (response.ok) return this.getHabits();

            return response.json().then(err => {
                const e = new Error('didn`t insert habits');
                console.log(e.message);
                e.data = err;
                throw e
            })
        })
    }

    removeHabit(id) {
        const urlDelete = `${urlHabit}/${id}`;
        console.log(urlDelete);
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
        };

        return fetch(urlDelete, options).then(response => {
            if (response.ok) return this.getHabits();

            return response.json().then(err => {
                const e = new Error('didn`t delete habit');
                e.data = err;
                throw e
            })
        })
    }

    getHabits() {

        return fetch(urlHabit).then(response => {
            if (response.ok) return response.json();

            return response.json().then(err => {
                const e = new Error('didn`t fetch habits');
                e.data = err;
                throw e
            })
        })
    }

    getCategories() {

        return fetch(urlCategories).then(response => {
            if (response.ok) return response.json();

            return response.json().then(err => {
                const e = new Error('didn`t fetched categories');
                e.data = err;
                throw e
            })
        })
    }

}