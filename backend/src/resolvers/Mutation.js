let idCount = 0;

const Mutations = {
    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     const newDog = { name: args.name, age: args.age, owner: args.owner, id: idCount++ };
    //     global.dogs.push(newDog);
    //     return newDog;
    // },

    // deleteDog(parent, args, ctx, info) {
    //     let dogToRemove = global.dogs.filter(dog => dog.id === args.id);
    //     let index = global.dogs.findIndex(dog => dog.id === args.id);
    //     // if(index !== -1) global.dogs.splice(index, -1);
    //     return global.dogs.splice(index, -1);
        
    // }
    async createItem(parents, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
           // title: args.title - to samo co wyzej, spread
            }
        }, info);
        return item;
    }
};

module.exports = Mutations;
