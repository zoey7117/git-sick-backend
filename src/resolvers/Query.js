const { forwardTo } = require('prisma-binding');

const Query = {
	items: forwardTo('db'),
	item: forwardTo('db'),
	itemsConnection: forwardTo('db')

	// items(parent, args, ctx, info) {
	//   return ctx.db.query.items();
	// }
	// dogs(parent, args, ctx, info) {
	//   return [{ name: "snickers" }, { name: "lola" }];
	// }
};

module.exports = Query;
