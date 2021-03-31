
export const Cart = {
  template: `<div>
    <button class="cart-button" @click="openCartHandler" type="button">Корзина</button>
    <div v-if="isVisibleCart" v-on:click="removeHandler">
      <slot></slot>
    </div>
  </div>`,
  data() { // данные компонента (Обязательно в виде метода!)
    return {
      isVisibleCart: false
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
}

  
// export default {
//     name: cart,
//     template: `<div>
//     <button class="cart-button" @click="openCartHandler" type="button">Корзина</button>
//     <div v-if="isVisibleCart" v-on:click="removeHandler">
//       <slot></slot>
//     </div>
//   </div>`,
//   data() { // данные компонента (Обязательно в виде метода!)
//     return {
//       isVisibleCart: false
//     }
//   },
//   methods: {
//     openCartHandler() {
//       this.isVisibleCart = !this.isVisibleCart;
//     },

//     removeHandler(e) {
//       this.$emit('remove', e) // Генерируем пользовательское событие
//     }
//   }
// }