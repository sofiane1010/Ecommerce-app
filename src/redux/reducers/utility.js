export const addItemToBasket = (items, itemToAdd) => {
	const found = items.find((item) => item.id === itemToAdd.id);
	if (found)
		return items.map((item) =>
			item.id === itemToAdd.id ? { ...item, qt: item.qt + 1 } : item
		);
	return [...items, { ...itemToAdd, qt: 1 }];
};

export const removeItemFromBasket = (items, itemToRemove) => {
	if (itemToRemove.qt > 1)
		return items.map((item) =>
			item.id === itemToRemove.id ? { ...item, qt: item.qt - 1 } : item
		);
	return items.filter((item) => item.id !== itemToRemove.id);
};
