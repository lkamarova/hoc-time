export const getDifferenceTime = (duration) => {
    if(duration.years() > 0) {
        return `${duration.years()} год(лет) назад`
    }
    if(duration.months() > 0) {
        return `${duration.months()} месяц(ев) назад`
    }
    if(duration.days() > 0) {
        return `${duration.days()} дня(ей) назад`
    }
    if(duration.hours() > 0) {
        return `${duration.hours()} час(ов) назад`
    }
    if(duration.minutes() > 0) {
        return `${duration.minutes()} минут(ы) назад`
    }
}

