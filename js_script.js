class ApiMock {
    constructor () {

    }
    fetch () {
        return [
            {
                title: 'Backpack',
                exchange: '$',
                price: 250,
                img_src: 'img_cat/1.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
            },
            {
                title: 'Jacket',
                exchange: '$', 
                price: 350,
                img_src: 'img_cat/2.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
            },
            { 
                title: 'Hoodies',
                exchange: '$', 
                price: 250,
                img_src: 'img_cat/3.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
            },
            { 
                title: 'Pants',
                exchange: '$', 
                price: 200,
                img_src: 'img_cat/4.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
            },
            { 
                title: 'T-shirt',
                exchange: '$', 
                price: 100,
                img_src: 'img_cat/5.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
            },
            { 
                title: 'Cap',
                exchange: '$', 
                price: 50,
                img_src: 'img_cat/6.jpg',
                description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
            },
          ];

    }
}


class GoodsItem {
    constructor(title, exchange, price, img_src, description) {
      this.title = title
      this.exchange = exchange
      this.price = price
      this.img_src = img_src
      this.description = description
    }
    getHtml() {
      return `<figure class="fetured_block">
      <div class="fetured_blok_hover">
          <button class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
      </div>
      <img src="${this.img_src}" alt="img" class="fetured_img">
      <p class="fetured_text-1">${this.title}</p>
      <p class="fetured_text-2">${this.description}</p>
      <p class="fetured_text-3">${this.exchange} ${this.price}</p>
    </figure>`
    }
  }


class GoodsList {
  constructor() {
    this.api = new ApiMock ()
    this.$goodsList = document.querySelector('.fetured_block_line')
    this.goods = [];
  }
  fetchGoods() {
    this.goods = this.api.fetch().map(({title, exchange, price, img_src, description}) => new GoodsItem(title, exchange, price, img_src, description));
  }
  render() {
    this.$goodsList.textContent = ''
    this.goods.forEach((good) => {
        this.$goodsList.insertAdjacentHTML ('beforeend', good.getHtml())
    })
  }
  getSumm () {
    let summ = 0
    this.api.fetch().forEach((element) => summ += element.price)
    console.log (summ)
  }
}


class Cart {
  constructor() {

  }

  deleteAll () {} // очистить корзину

  getSummAllCart () {} // сумма корзины

  payRequest () {}// оформить заказ

  renderCart () {}// отрисовать корзину

}

class CartItem {
  constructor() {

  }

  delItem () {} // удалить товар

  rewriteCount () {} // изменить количество товара


}



const goodsList = new GoodsList()
goodsList.fetchGoods()
goodsList.render()
goodsList.getSumm()

