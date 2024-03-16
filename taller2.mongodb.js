db.createCollection('users3')

db.users3.find();

db.users3.insertMany([
    {
        nombre: 'Juan',
        apellido: 'Perez',
        correo: 'xtz@example.com',
        ciudad: 'New York',
        pais: 'Estados Unidos',
        salario: 3500,
        edad: 22,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Andrés',
        apellido: 'Trujillo',
        correo: 'truji@example.com',
        ciudad: 'Madrid',
        pais: 'Spain',
        salario: 2500,
        edad: 22,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Juan',
        apellido: 'García',
        correo: 'juan.garcia@example.com',
        ciudad: 'Barcelona',
        pais: 'España',
        salario: 2800,
        edad: 22,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Maria',
        apellido: 'López',
        correo: 'maria.lopez@example.com',
        ciudad: 'Madrid',
        pais: 'España',
        salario: 3000,
        edad: 22,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Pedro',
        apellido: 'Martínez',
        correo: 'pedro.martinez@example.com',
        ciudad: 'Santiago',
        pais: 'Chile',
        salario: 3200,
        edad: 22,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Laura',
        apellido: 'Fernández',
        correo: 'laura.fernandez@example.com',
        ciudad: 'Bogotá',
        pais: 'Colombia',
        salario: 2900,
        edad: 22,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Carlos',
        apellido: 'Rodríguez',
        correo: 'carlos.rodriguez@example.com',
        ciudad: 'Lima',
        pais: 'Perú',
        salario: 3100,
        edad: 22,
        altura: 172,
        peso: 155
    },
    {
        nombre: 'Ana',
        apellido: 'Pérez',
        correo: 'ana.perez@example.com',
        ciudad: 'México DF',
        pais: 'México',
        salario: 3300,
        edad: 22,
        altura: 168,
        peso: 145
    },
    {
        nombre: 'Diego',
        apellido: 'Hernández',
        correo: 'diego.hernandez@example.com',
        ciudad: 'Lisboa',
        pais: 'Portugal',
        salario: 2800,
        edad: 22,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Sara',
        apellido: 'González',
        correo: 'sara.gonzalez@example.com',
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        salario: 2900,
        edad: 22,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Lucas',
        apellido: 'Sánchez',
        correo: 'lucas.sanchez@example.com',
        ciudad: 'Rio de Janeiro',
        pais: 'Brasil',
        salario: 3000,
        edad: 22,
        altura: 175,
        peso: 155
    },
    {
        nombre: 'Elena',
        apellido: 'Martín',
        correo: 'elena.martin@example.com',
        ciudad: 'Paris',
        pais: 'Francia',
        salario: 3100,
        edad: 22,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'John',
        apellido: 'Doe',
        correo: 'john.doe@example.com',
        ciudad: 'New York',
        pais: 'Estados Unidos',
        salario: 3500,
        edad: 25,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Jane',
        apellido: 'Doe',
        correo: 'jane.doe@example.com',
        ciudad: 'Los Angeles',
        pais: 'Estados Unidos',
        salario: 3800,
        edad: 30,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Alex',
        apellido: 'Smith',
        correo: 'alex.smith@example.com',
        ciudad: 'Toronto',
        pais: 'Canadá',
        salario: 4000,
        edad: 35,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Emily',
        apellido: 'Johnson',
        correo: 'emily.johnson@example.com',
        ciudad: 'Vancouver',
        pais: 'Canadá',
        salario: 4200,
        edad: 40,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Luis',
        apellido: 'García',
        correo: 'luis.garcia@example.com',
        ciudad: 'Madrid',
        pais: 'España',
        salario: 3500,
        edad: 45,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Marta',
        apellido: 'Martínez',
        correo: 'marta.martinez@example.com',
        ciudad: 'Barcelona',
        pais: 'España',
        salario: 3300,
        edad: 50,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Andrés',
        apellido: 'López',
        correo: 'andres.lopez@example.com',
        ciudad: 'Santiago',
        pais: 'Chile',
        salario: 3200,
        edad: 55,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Lucía',
        apellido: 'Fernández',
        correo: 'lucia.fernandez@example.com',
        ciudad: 'Bogotá',
        pais: 'Colombia',
        salario: 3100,
        edad: 60,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Javier',
        apellido: 'González',
        correo: 'javier.gonzalez@example.com',
        ciudad: 'Lima',
        pais: 'Perú',
        salario: 3000,
        edad: 65,
        altura: 172,
        peso: 155
    },
    {
        nombre: 'Carolina',
        apellido: 'Pérez',
        correo: 'carolina.perez@example.com',
        ciudad: 'México DF',
        pais: 'México',
        salario: 2900,
        edad: 70,
        altura: 168,
        peso: 145
    },
    {
        nombre: 'Daniel',
        apellido: 'Hernández',
        correo: 'daniel.hernandez@example.com',
        ciudad: 'Lisboa',
        pais: 'Portugal',
        salario: 2800,
        edad: 70,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Gabriel',
        apellido: 'González',
        correo: 'gabriel.gonzalez@example.com',
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        salario: 3200,
        edad: 24,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Isabella',
        apellido: 'Silva',
        correo: 'isabella.silva@example.com',
        ciudad: 'Rio de Janeiro',
        pais: 'Brasil',
        salario: 3400,
        edad: 27,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Liam',
        apellido: 'Brown',
        correo: 'liam.brown@example.com',
        ciudad: 'Toronto',
        pais: 'Canadá',
        salario: 3600,
        edad: 30,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Sophia',
        apellido: 'Miller',
        correo: 'sophia.miller@example.com',
        ciudad: 'Vancouver',
        pais: 'Canadá',
        salario: 3800,
        edad: 32,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Noah',
        apellido: 'Wilson',
        correo: 'noah.wilson@example.com',
        ciudad: 'Madrid',
        pais: 'España',
        salario: 4000,
        edad: 35,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Emma',
        apellido: 'Moore',
        correo: 'emma.moore@example.com',
        ciudad: 'Barcelona',
        pais: 'España',
        salario: 4200,
        edad: 38,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Oliver',
        apellido: 'Taylor',
        correo: 'oliver.taylor@example.com',
        ciudad: 'Santiago',
        pais: 'Chile',
        salario: 4400,
        edad: 40,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Ava',
        apellido: 'Anderson',
        correo: 'ava.anderson@example.com',
        ciudad: 'Bogotá',
        pais: 'Colombia',
        salario: 4600,
        edad: 42,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'William',
        apellido: 'Thomas',
        correo: 'william.thomas@example.com',
        ciudad: 'Lima',
        pais: 'Perú',
        salario: 4800,
        edad: 45,
        altura: 172,
        peso: 155
    },
    {
        nombre: 'Mia',
        apellido: 'Jackson',
        correo: 'mia.jackson@example.com',
        ciudad: 'México DF',
        pais: 'México',
        salario: 5000,
        edad: 48,
        altura: 168,
        peso: 145
    },
    {
        nombre: 'James',
        apellido: 'White',
        correo: 'james.white@example.com',
        ciudad: 'Lisboa',
        pais: 'Portugal',
        salario: 5200,
        edad: 50,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Charlotte',
        apellido: 'Harris',
        correo: 'charlotte.harris@example.com',
        ciudad: 'Paris',
        pais: 'Francia',
        salario: 5400,
        edad: 52,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Ethan',
        apellido: 'Martin',
        correo: 'ethan.martin@example.com',
        ciudad: 'New York',
        pais: 'Estados Unidos',
        salario: 5600,
        edad: 55,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Amelia',
        apellido: 'Thompson',
        correo: 'amelia.thompson@example.com',
        ciudad: 'Los Angeles',
        pais: 'Estados Unidos',
        salario: 5800,
        edad: 58,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Logan',
        apellido: 'Roberts',
        correo: 'logan.roberts@example.com',
        ciudad: 'Toronto',
        pais: 'Canadá',
        salario: 6000,
        edad: 60,
        altura: 175,
    },
    {
        nombre: 'Sophie',
        apellido: 'Hernández',
        correo: 'sophie.hernandez@example.com',
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        salario: 900,
        edad: 23,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Lucas',
        apellido: 'Silva',
        correo: 'lucas.silva@example.com',
        ciudad: 'Rio de Janeiro',
        pais: 'Brasil',
        salario: 1000,
        edad: 26,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Aiden',
        apellido: 'Brown',
        correo: 'aiden.brown@example.com',
        ciudad: 'Toronto',
        pais: 'Canadá',
        salario: 1200,
        edad: 29,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Olivia',
        apellido: 'Miller',
        correo: 'olivia.miller@example.com',
        ciudad: 'Vancouver',
        pais: 'Canadá',
        salario: 1400,
        edad: 31,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Mason',
        apellido: 'Wilson',
        correo: 'mason.wilson@example.com',
        ciudad: 'Madrid',
        pais: 'España',
        salario: 1600,
        edad: 34,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Amelia',
        apellido: 'Moore',
        correo: 'amelia.moore@example.com',
        ciudad: 'Barcelona',
        pais: 'España',
        salario: 1800,
        edad: 37,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Liam',
        apellido: 'Taylor',
        correo: 'liam.taylor@example.com',
        ciudad: 'Santiago',
        pais: 'Chile',
        salario: 2000,
        edad: 39,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Isabella',
        apellido: 'Anderson',
        correo: 'isabella.anderson@example.com',
        ciudad: 'Bogotá',
        pais: 'Colombia',
        salario: 2100,
        edad: 41,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Noah',
        apellido: 'Thomas',
        correo: 'noah.thomas@example.com',
        ciudad: 'Lima',
        pais: 'Perú',
        salario: 2000,
        edad: 44,
        altura: 172,
        peso: 155
    },
    {
        nombre: 'Emma',
        apellido: 'Jackson',
        correo: 'emma.jackson@example.com',
        ciudad: 'México DF',
        pais: 'México',
        salario: 1800,
        edad: 47,
        altura: 168,
        peso: 145
    }
])

db.users3.drop();


db.users.updateOne(
    {_id: Obj}
)



db.users2.deleteMany({
    edad:22
})

db.users3.find();



//TALLER 2

//Actualizar
//1. Incrementar salario 10%

db.users3.updateOne({}, [
    {
      $set: {
        salario: {
          $add: ["$salario", { $multiply: ["$salario", 0.1] }]
        }
      }
    }
  ])
  


//2. Cambiar ciudad de "New York" a "Los Ángeles".

db.users3.updateMany(
    { ciudad: "New York" },
    { $set: { ciudad: "Los Ángeles" } }
)


//3. Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".

db.users3.updateOne(
    { nombre: "Juan", apellido: "Perez" },
    { $set: { correo: "nuevo@correo.com" } }
)


//4. Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

db.users3.updateOne(
    { correo: "ejemplo@correo.com" },
    { $set: { edad: 35 } }
)


//5. Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users3.updateMany(
    { pais: "Mexico" },
    { $set: { pais: "Canada" } }
)


//6. Aumentar la altura de todos los usuarios en 5 centímetros.

db.users3.updateMany({}, { $inc: { altura: 5 } })


//7. Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

db.users3.updateOne(
    { correo: "otro@ejemplo.com" },
    { $set: { apellido: "González" } }
)


//8. Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.users3.updateOne(
    { nombre: "Maria" },
    { $set: { peso: 140 } }
)


//9. Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

db.users3.updateMany(
    { pais: "Estados Unidos" },
    { $mul: { salario: 1.15 } }
)


//10. Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

db.users3.updateOne(
    { nombre: "Pedro" },
    { $set: { correo: "nuevo_correo@riwi.co" } }
)


//11. Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.users3.updateMany(
    { edad: { $lt: 30 } },
    { $set: { edad: 30 } }
)


//12. Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.



//13. Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".



//14. Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".



//15. Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.



//16. Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.



//17. Incrementar el salario de los usuarios que viven en "London" en un 25%.



//18. Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".



//19. Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".



//20. Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".




//Eliminar
//1
.db.users3.deleteMany({
    salario:{$lt:2000}
})
//2
.db.users3.deleteMany({
    edad:{$lt:25}
})
//3
.db.users3.deleteMany({
    ciudad:"Paris"
})
//4
.db.users3.deleteMany({
    peso:{$gt:180}
})
//5
.db.users3.deleteMany({
    altura:{$lt:160}
})
//6
.db.users3.deleteMany({
    nombre:"Jhon",
    apellido:"Doe"
})
//7
.db.users3.deleteMany({
    correo:"borrar@riwi.com"
})
//8
.db.users3.deleteMany({
    correo:{exists:false}
})
//9
.db.users3.deleteMany({
    ciudad:"Tokio"
})
//10.
db.users3.deleteMany({
    edad:{$lt:18}
})
//11.
db.users3.deleteMany({
    salario:{$eq:0}
})
//12.
db.users3.deleteMany({
    ciudad:"New York",
    salario:{$gt:5000}
})
//13.
db.users3.deleteMany({
    correo:/spam/
})
//14.
db.users3.deleteMany({
    ciudad:"Bello",
    edad:{$gt:50}
})

//15.
db.users3.deleteMany({
    apellido : "González"
})
//16.
db.users3.deleteMany({
    edad : {$gt:70}
})
//17.
db.users3.deleteMany({
    país : "Canada",
    salario:{$lt:4000}
})
//18.
db.users3.deleteMany({
    salario:{$gte:1000},
    salario:{$lte:2000}
})
//19.
db.users3.deleteMany({
    edad:{$eq:30}
})
//20.
db.users3.deleteMany({
    altura:{$gt:190}
})