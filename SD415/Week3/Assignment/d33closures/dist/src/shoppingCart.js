//This closure exercise involves a common real-world scenario.
export function createShoppingCart() {
    //IMPLEMENT THIS FUNCTION
    const items = [];
    return {
        addItem: function (item, price) {
            items.push({ item: item, price: price });
        },
        removeItem: function (itemToRemove) {
            const index = items.findIndex((item) => item.item === itemToRemove);
            if (index >= 0)
                items.splice(index, 1);
        },
        getTotal() {
            return items.reduce((total, item) => (total += item.price), 0);
        },
    };
}
