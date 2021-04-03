import axios from 'axios';
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/";


let habits = [
    // {
    //     id: 32434,
    //     name: 'morning run',
    //     category: {
    //         id: 1111,
    //         name: 'Sport',
    //         color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
    //     },
    //     activity: [1614938594588, 1615024994588, 1615111394588, 1615197794588, 1615284194588, 1615370594588, 1615456994588, 1615543394588, 1615629794588, 1615716194588, 1615802594588, 1615888994588, 1615888994588, 1615888994587, 1615975394587, 1616061794587, 1616148194587, 1616234594587, 1616320994587, 1616394114435, 1616402754467, 1616496385455, 1616582785455, 1616669185455]
    // }, //8 in row, other twice a day
    // {
    //     id: 4334,
    //     name: 'read english literature',
    //     category: {
    //         id: 5466,
    //         name: 'Spiritual',
    //         color: {value: 'forest', label: 'Forest', color: '#F6B09D', bgColor: '#EDC4BC'},
    //     },
    //     activity: [1616320994586, 1616402754433] //21mar,22mar
    // },
    // {
    //     id: 4335,
    //     name: 'swim twice a week',
    //     category: {
    //         id: 1111,
    //         name: 'Sport',
    //         color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
    //     },
    //     activity: [1615888994586, 1616496385459] //16mar, 23mar
    // },
];

let categories = [
//     {
//         id: 5466,
//         name: 'Spiritual',
//         color: {value: 'pink', label: 'Pink', color: '#F6B09D', bgColor: '#EDC4BC'},
//     },
//     {
//         id: 2222,
//         name: 'Study',
//         color: {value: 'purple', label: 'Purple', color: '#A2ACEB', bgColor: '#B2B7F6'},
//
//     },
//     {
//         id: 1111,
//         name: 'Sport',
//         color: {value: 'ocean', label: 'Ocean', color: '#B4D5F9', bgColor: '#B2F6F0'},
//     },
//     {
//         id: 6776,
//         name: 'Health',
//         color: {value: 'menthol', label: 'Menthol', color: '#B4F6A4', bgColor: '#C0EBC4'},
//
//     },
];

export default class HabitsService {

    doneHabit(id) {
        return axios.post(`${API_URL}habits/done`, {id}, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to done habit ${status}`);
            });
    }

    createHabit(newHabit) {
        console.log(newHabit);
        return axios.post(`${API_URL}habits`, {...newHabit}, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to create habit ${status}`);
            });
    }

    updateHabit(habit) {
        return axios.put(`${API_URL}habits`, {...habit}, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to update habit ${status}`);
            });
    }

    removeHabit(id) {
        return axios.delete(`${API_URL}habits?id=${id}`, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to create habit ${status}`);
            });
    }

    getHabits() {
        return axios.get(`${API_URL}habits`, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to get habits ${status}`);
            });
    }

    getCategories() {
        return axios.get(`${API_URL}categories`, {headers: authHeader()})
            .then((res => res.data));
    }

    createCategory(newCategory) {
        return axios.post(`${API_URL}categories`, {...newCategory}, {headers: authHeader()})
            .then(({data, status}) => {
                if (status >= 200 && status < 300) {
                    return data
                }
                throw new Error(`failed to create category ${status}`);
            });
    }
}