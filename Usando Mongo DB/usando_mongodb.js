//Cree una base de datos llamada 'my_first_db'.
use my_first_db

//Crear colección de estudiantes.
db.createCollection("estudiantes")

//Cada documento que inserte en esta colección debe tener el siguiente formato:({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

//Crea 5 estudiantes con la información adecuada.
db.estudiantes.insertOne({nombre:"Cristian", Provincia:"San Jose", número_de_la_suerte:3,Fecha_de_nacimiento:{mes:5, día:18, año:1991}})
db.estudiantes.insertOne({nombre:"Geiner", Provincia:"Limón", número_de_la_suerte:7,Fecha_de_nacimiento:{mes:11, día:17, año:1959}})
db.estudiantes.insertOne({nombre:"Flory", Provincia:"Cartago", número_de_la_suerte:4,Fecha_de_nacimiento:{mes:11, día:17, año:1959}})
db.estudiantes.insertOne({nombre:"Esteban", Provincia:"Heredia", número_de_la_suerte:2,Fecha_de_nacimiento:{mes:6, día:1, año:1959}})
db.estudiantes.insertOne({nombre:"Junior", Provincia:"Limón", número_de_la_suerte:8,Fecha_de_nacimiento:{mes:10, día:22, año:1991}})

//Consigue todos los estudiantes.
db.estudiantes.find()

//Recupera a todos los estudiantes que son de California (Limón) o Washington (San Jose).
db.estudiantes.find({$or:[{Provincia:"Limón"},{Provincia:"San Jose"}]})

//Obten todos los estudiantes cuyo número de la suerte sea mayor que 3
db.estudiantes.find({número_de_la_suerte: {$gt:3}})

//Obten todos los estudiantes cuyo número de la suerte sea menor o igual a 10
db.estudiantes.find({número_de_la_suerte:{$lte:10}})

//Obten todos los estudiantes cuyo número de la suerte esté entre 1 y 9 (inclusive)
db.estudiantes.find({$and:[{número_de_la_suerte: {$gt:1}},{número_de_la_suerte: {$lte:9}}]})

//Agrega un campo a cada colección de estudiantes llamado 'intereses' que es un ARRAY. Debe contener las siguientes entradas: 'codificación', 'brunch', 'MongoDB'. Haz esto en UNA operación.
db.estudiantes.updateMany({}, {$set: {intereses: ['codificación', 'brunch', 'MongoDB']}})

//Agrega algunos intereses únicos para cada estudiante en particular en cada una de sus matrices de intereses.
db.estudiantes.updateOne({nombre:"Cristian" },{ $push: { intereses:"Informática"}})
db.estudiantes.updateOne({nombre:"Geiner" },{ $push: { intereses:"Abogacía"}})
db.estudiantes.updateOne({nombre:"Flory" },{ $push: { intereses:"Diseño de Interiores"}})
db.estudiantes.updateOne({nombre:"Esteban" },{ $push: { intereses:"Notariado"}})
db.estudiantes.updateOne({nombre:"Junior" },{ $push: { intereses:"Cisco"}})

//Agrega los 'impuestos' de intereses a la matriz de intereses de alguien.
db.estudiantes.updateOne({nombre:"Cristian"},{$push:{intereses: 'impuestos'}})

//Elimina los intereses de 'impuestos' que acaba de agregar.
db.estudiantes.updateOne({nombre:"Cristian"},{$pull:{intereses: "impuestos"}})

//Eliminar a todos los estudiantes que son de California(Limón).
db.estudiantes.remove({Provincia:"Limón"})

//Eliminar a un alumno por su nombre.
db.estudiantes.remove({nombre:"Esteban"})

//Retira a un estudiante cuyo número de la suerte sea mayor que 3 (SOLO UNO)
db.estudiantes.remove({número_de_la_suerte:{$gt:3}},true)

//Agrega un campo a cada colección de estudiantes llamado 'number_of_belts' y configúralo en 0.
db.estudiantes.update({}, {$set: {number_of_belts:0}}, false, true)

//Incrementa este campo en 1 para todos los estudiantes en Washington (San Jose).
db.estudiantes.update({Provincia:"San Jose"}, {$inc: {number_of_belts:1}}, false, true)

//Cambia el nombre del campo 'number_of_belts' a 'belts_earned'
db.estudiantes.update({},{$rename:{'number_of_belts': 'belts_earned'}},false,true)

//Elimina el campo 'lucky_number'.
db.estudiantes.update({},{$unset:{número_de_la_suerte: ""}},false,true)

//Agrega un campo 'updated_on' y establece el valor como la fecha actual.
db.estudiantes.update({},{$currentDate:{Fecha_actual: true}},false,true)