//This closure exercise involves a common real-world scenario.

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
  item: string;
  price: number;
};

type Cart = {
  addItem: (item: string, price: number) => void;
  removeItem: (item: string) => void;
  getTotal: () => number;
};

export function createShoppingCart(): Cart {
  //IMPLEMENT THIS FUNCTION
  const items: Item[] = [];

  return {
    addItem: function (item: string, price: number): void {
      items.push({ item: item, price: price });
    },
    removeItem: function (itemToRemove: string): void {
      const index = items.findIndex((item) => item.item === itemToRemove);
      if (index >= 0) items.splice(index, 1);
    },
    getTotal(): number {
      return items.reduce((total, item) => (total += item.price), 0);
    },
  };
}
