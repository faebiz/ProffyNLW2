//Dados
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Funcionalidades
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function convertHoursToMinute(time){
    const [hour, minutes] = time.split(':')
    return Number((hour * 60)) + minutes
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
}