const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db')
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items();
    //     return items;
    // }

};
//no logic, no additional things. If query is the same in yoga and prisma, we can just forward from yoga to prisma

module.exports = Query;



