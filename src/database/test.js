const database = require('./db.js')
const creatProffy = require('./createProffy.js')


database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Rafael Lima",
        avatar: "https://avatars3.githubusercontent.com/u/59738066?s=460&u=f9d204b99fa32c8c1bfa4e8c04ef08027b8f6ad0&v=4",
        whatsapp: "987038647",
        bio: "Instrutor de Física"
    }

    classValue = {
        subject: 5,
        cost: "20,00"
        //proffy_id virá do banco de dados        
    }

    classScheduleValues = [
        {
        weekday: 1,
        time_from: 2130,
        time_to: 2200
        //class_id virá a partir do banco de dados
        },
        {
        weekday: 2,
        time_from: 2030,
        time_to: 2200
        //class_id virá a partir do banco de dados
        }
    ]

    //createProffy
    //await creatProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos
        //todos os proffys
      const selectedProffys = await db.all("SELECT * FROM proffys")
      //console.log(selectedProffys)

    //Consultar as classes de um determinado proffy
    const  selectedClassesProffys = await db.all(`
              SELECT c.*, p.*
                FROM classes c
                JOIN proffys p
                  ON (p.id = c.proffy_id)
               WHERE p.id = 1;        
    `)
    //console.log(selectedClassesProffys)

    //o horario em o que o proffy trabalha é das 08h as 18h
    //o time_from precisa ser menor ou igual ao solicitado
    //já o time_to precisa ser menor que 
    const  selectedClassesSchedules = await db.all(`
            SELECT cs.*
              FROM class_schedule cs
             WHERE cs.class_id = 1
               AND cs.weekday = 2
               AND cs.time_from <= "2300"
               AND cs.time_to > "2300"
    `)
    console.log(selectedClassesSchedules)
})