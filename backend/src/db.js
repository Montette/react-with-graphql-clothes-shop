const { Prisma } = require('prisma-binding');

//Prisma - sama baza danych. Żeby zająć się logiką, trzeba zaimplementować jogę
// db.json jest plkiem, dzięki ktoremu możemy nawiązać połączenie z prismą
//nie da się wykonać operacji na db bezpośrednio w JS, dlatego używamy prisma-binding, dzięki czemu będziemy mogli robić mutacje w JS (query data with JS)
const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql', //definicja wszystkich operacji, jakie możemy wykonać, jakie mamy query, jakie mamy mutacje - po to plik został ty wstrzyknięnty przez prismę
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db;