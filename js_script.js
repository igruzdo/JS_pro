const API_URL = '/goods.json';

Vue.component('goods-item', { //создание компонента
  template: '<figure class="fetured_block"><div class="fetured_blok_hover"><button :data-id = "id" :id = "title" class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button></div><img :src= "img_src" alt="img" class="fetured_img"><p class="fetured_text-1">{{title}}</p><p class="fetured_text-2">{{description}}</p><p class="fetured_text-3">{{exchange}} {{price}}</p></figure>',

  props:['title', 'img_src', 'description', 'exchange', 'price', 'id'] // внешние параметры компонента
})

Vue.component ('itemincart', {
  template:
  `<div class="first_prod d-flex" :data-id = "id" :id = "title">
    <img :src= "img_src" alt="first_prod" class="shop_cart_img">
    <div class="shop_cart_left_text">
      <div class="prod_title d-flex ">
          <div class="prod_title_text">
            <h3 class="prod_weather">{{title}}</h3>
          </div>
          <div><img src="img_cart/Vector.png" alt="" class="close_all"></div>
      </div>
      <p class="price_prod">Price: <span class="text--pink">{{exchange}} {{price}}</span></p>
    </div>
  </div>`,

  props:['title', 'img_src', 'exchange', 'price', 'id']

})


Vue.component('cart', { // создание компонента корзины
  template: `
  <div>
    <button class="cart-button" @click="openCartHandler" type="button">Корзина</button>
    <div v-if="isVisibleCart" v-on:click="removeHandler">
      <slot></slot>
    </div>
  </div>`,
  data() { // данные компонента (Обязательно в виде метода!)
    return {
      isVisibleCart: true
    }
  },
  methods: {
    openCartHandler() {
      this.isVisibleCart = !this.isVisibleCart;
    },

    removeHandler(e) {
      this.$emit('remove', e) // Генерируем пользовательское событие
    }
  }
})

Vue.component ('searchitem', {

  template: '<input id="search" v-model="search" v-on:input="searchHandler">',
  


})


const vue = new Vue ({
  el: "#app",
  data: {
    goods: [],
    filtredGoods: [],
    cartGoods: [],
    search: '',
    isVisibleCart: false
  },
  methods: {   
    
    // addToCartHandler(e) {
    //   const id = e.target.closest('.goods-item').dataset.id;
    //   const good = this.goods.find((item) => item.id == id);

    //   this.cartGoods.push(good);
    // },
    removeFromCartHandler(e) {
      const id = e.target.closest('.first_prod').dataset.id;
      const goodIndex = this.cartGoods.findIndex((item) => item.id == id);

      this.cartGoods.splice(goodIndex - 1, 1);
    },

    searchHandler () {
      if(this.search === '') {
        this.filtredGoods = this.goods;
      }
      const regexp = new RegExp(this.search, 'gi');
      this.filtredGoods = this.goods.filter((good) => regexp.test(good.title));
    },

    openCartHendler () { 
      this.isVisibleCart = !this.isVisibleCart
    },

    fetch (error, succes) {
      let xhr;
    
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            succes(JSON.parse(xhr.responseText));
          } else if (xhr.status > 400) {
            error()
          }
        }
      }
    
      xhr.open('GET', API_URL, true);
      xhr.send();
    },

    fetchPromise() {
      return new Promise((resolve, reject) => {
        this.fetch(reject, resolve)
      }) 
    },
  },
  mounted() {
    this.fetchPromise()
    .then(data => {
      this.goods = data;
      this.filtredGoods = data;
    })
    .then (() => {
      for (let i=0; i< this.goods.length; i++) {
        document.querySelector('#'+this.goods[i].title).addEventListener ('click', () =>{
          this.cartGoods.push(this.goods[i])
          console.log (this.cartGoods)
        })
      }  
    }) 
  },
})










// class Api {
//   constructor () {
//     this.url = '/goods.json'
//   }
//   fetch (error, succes) {
//     let xhr;
  
//     if (window.XMLHttpRequest) {
//       xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) { 
//       xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
  
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           succes(JSON.parse(xhr.responseText));
//         } else if (xhr.status > 400) {
//           error()
//         }
//       }
//     }
  
//     xhr.open('GET', this.url, true);
//     xhr.send();
//   }
  
//   fetchPromise() {
//     return new Promise((resolve, reject) => {
//       this.fetch(reject, resolve)
//     }) 
//   }
// }


// class GoodsItem {
//   constructor (title, exchange, price, img_src, description) {
//     this.title = title
//     this.exchange = exchange
//     this.price = price
//     this.img_src = img_src
//     this.description = description
//   }
//   getHtml() {
//     return `<figure class="fetured_block">
//     <div class="fetured_blok_hover">
//         <button id = "${this.title}" class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
//     </div>
//     <img src="${this.img_src}" alt="img" class="fetured_img">
//     <p class="fetured_text-1">${this.title}</p>
//     <p class="fetured_text-2">${this.description}</p>
//     <p class="fetured_text-3">${this.exchange} ${this.price}</p>
//   </figure>`
//   }
// }


// class GoodsList {
//   constructor() {
//     this.api = new Api
//     this.$goodsList = document.querySelector('.fetured_block_line')
//     this.goods = []
//     // this.api.fetch(this.onFethError.bind(this), this.onFetchSucces.bind(this))
//     const fetch = this.api.fetchPromise()

//     fetch.then((data) => { this.onFetchSucces(data)})
//     .then (() => {
//       const cartList = []
//       for (let i=0; i< this.goods.length; i++) {
//         document.querySelector('#'+this.goods[i].title).addEventListener ('click', () =>{
//           cartList.push(this.goods[i])
//           console.log(cartList)
//         })
//       }  
//     })
//     .catch((err) => { this.onFethError(err) });
//   }
//   onFetchSucces (data) {
//     this.goods = data.map(({title, exchange, price, img_src, description}) => new GoodsItem (title, exchange, price, img_src, description));
//     this.getSumm()
//     this.render()

//   }

//   onFethError (err){
//     this.$goodsList.insertAdjacentHTML ('beforeend', `<h3>${err}</h3>`)
//   }

//   render() {
//     this.$goodsList.textContent = ''
//     this.goods.forEach((good) => {
//         this.$goodsList.insertAdjacentHTML ('beforeend', good.getHtml())
//     })
//   }
//   getSumm (data) {
//     let summ = 0
//     this.goods.forEach((element) => summ += element.price)
//     console.log (summ)
//   }
//   drawtest () {
//     console.log (this.goods)
//   }
// }


// class Cart {
//   constructor() {
//     this.cartGoodsList = []

//   }

//   pushToCart () {
//     let newGoodInCart = document.querySelector ('#'+goodsList.goods.title)
//   }

//   deleteAll () {} // очистить корзину

//   getSummAllCart () {} // сумма корзины

//   payRequest () {}// оформить заказ

//   renderCart () {}// отрисовать корзину

// }

// class CartItem {
//   constructor() {

//   }

//   delItem () {} // удалить товар

//   rewriteCount () {} // изменить количество товара


// }

// const goodsList = new GoodsList()






