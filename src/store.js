import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // No data modifications outside of mutations
  strict: true,
  state: {
    lol: [
      {name: 'lol', price: 666},
      {name: 'kek', price: 2}
    ],
    vuexProducts: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  // FYI : no ASYNC tasks in mutations
  mutations: {
    reducePrice: (state, payload) => {
      console.log("STORE reduce price");
      state.vuexProducts.forEach(product => {
          product.price -= payload;
      });
    }
    // reducePrice: state => {
    //   setTimeout(function(){
    //     console.log("STORE reduce price SLOW");
    //     state.vuexProducts.forEach(product => {
    //         product.price -= 2;
    //     });
    //   }, 3000);
    // }
  },
  // Another layer between the component committing a mutationa and a mutation itself
  actions: {
    // FYI ; context is a little bit like a state
    reducePriceAction: (context, payload) => {
      // ASYNC HERE
      setTimeout(function() {
        context.commit('reducePrice', payload);
      }, 2000)
    }
  },
  getters: {
    // Computed prop in a component -- now usable everywhere
    saleProductsGetter: state => {
      var saleProducts = state.vuexProducts.map(product => {
        return {
            name: '**' + product.name + "**",
            price: product.price/2
        }
      });
      return saleProducts;
    }
  }
})
