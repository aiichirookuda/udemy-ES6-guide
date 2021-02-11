// ES5
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
};

// ES6
function createBookShop(inventory) {
  return {
    inventory,/* keyとvalueが同じなら省略可能 */
    inventoryValue()/* :とfunctionを省略可能 */ {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
};

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'JavaScrips入門', price: 1500 }
];

const bookShop = createBookShop(inventory);

createBookShop.inventoryValue();/* =>2500 */

bookShop.priceForTitle('ハリーポッター');/* =>1000 */
