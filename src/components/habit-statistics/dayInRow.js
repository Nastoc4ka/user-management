import moment from "moment/moment";

const isNextElInRow = (current, next) => moment(current).add(1, 'days').format('MM/DD') === next;

const dayInRow = (habits) => {

    return habits.map((habit) => {
        const activity = Array.from(new Set(habit.activity.map(date => moment(date).format('MM/DD'))));
        let max = {
            maxDays: 1,
            startDate: '',
            endDate: activity[activity.length - 1]
        };
        let current = 1;
        for (let i = 0; i < activity.length - 1; i++) {
            const el = activity[i];
            const elNext = activity[i + 1];

            if (isNextElInRow(el, elNext)) {
                current++;
                if (current > max.maxDays) {
                    max.maxDays = current;
                    max.endDate = activity[i + 1];
                }
            } else {
                current = 1;
            }
        }
        max.startDate = moment(max.endDate).subtract(max.maxDays - 1, 'days').format('MM/DD');
        return {
            max,
            habit,
        }
    }).sort((a, b) => b.max.maxDays - a.max.maxDays)
};

export default dayInRow;