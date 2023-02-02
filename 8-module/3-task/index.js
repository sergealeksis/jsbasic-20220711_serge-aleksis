export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }


  addProduct(product) {
    // let cartItem = {product, count: 1};
    if (!product/*product === null && product === ''*/) {
      return
    }
    let cartItem = this.cartItems.find(e => e.product.name === product.name);
    if (!cartItem) {
      cartItem = {product, count: 1};
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++; /*+= 1*/
    }
    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {

    let cartItem = this.cartItems.find(e => e.product.id === productId);

    if (amount === 1) {
      cartItem.count++
    }
    if (amount === -1) {
      cartItem.count--
    }
    if (cartItem.count === 0) {
      this.cartItems.splice(this.cartItems.findIndex(e => e.product.id === productId))
    }
  
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
    return true
    } else {
    return false
    }
  }

  getTotalCount() {
    let quantity = 0
    for (let e of this.cartItems) {
      quantity += e.count
    }

    return quantity
  }

  getTotalPrice() {
    let sum = 0
    for (let e of this.cartItems) {
      sum += (e.product.price * e.count)
    }
    return sum
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

