export const filterShops = async (shops, filters) => {
	return await shops.filter((shop) => {
		let isFiltered = true;
		if (filters.search !== undefined && filters.search.length > 2) {
			const name = shop.name.toLowerCase();
			const search = filters.search.toLowerCase();
			if (!name.includes(search)) return null;
		}

		if (filters.freeDelivery) {
			if (shop.minimum_order > 0) return null;
		}

		if (filters.new) {
			const date = new Date();
			let month = date.getMonth();
			date.setMonth(month - 1);
			let shop_date = new Date(shop.created_at).getTime();

			if (shop_date < date.getTime()) return null;
		}

		return isFiltered ? shop : null;
	});
};
