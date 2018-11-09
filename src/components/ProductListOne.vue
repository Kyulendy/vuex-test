<template>
    <div id="product-list-one">
        <h2>Product List One - props</h2>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} $$</span>
            </li>
        </ul>
        <h2>Product List One VUEX : vuexProducts</h2>
        <ul>
            <li v-for="product in vuexProducts" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} VUEX $$</span>
            </li>
        </ul>
        <p>ON SALE - in component computed prop</p>
        <ul>
            <li v-for="product in saleProductsGetter" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} VUEX $$</span>
            </li>
        </ul>
        <button @click="reducePriceAction(3)">Reduce Price MAPPED ACTION</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    // VUEX store !
    computed: {
        vuexProducts () {
            return this.$store.state.vuexProducts;
            //return this.$store.state.lol;
        },
        // saleProductsGetter() {
        //     return this.$store.getters.saleProductsGetter;
        // },
        // OR an ES6 (map getters to comp.props)
        ...mapGetters([
            'saleProductsGetter'
        ]),
        saleProducts () {
            var saleProducts = this.$store.state.vuexProducts.map(product => {
                return {
                    name: '**' + product.name + "**",
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    },
    methods: {
        // reducePrice: function(amount = 1) {
        //     // Dispatch an action ;)
        //     this.$store.dispatch('reducePriceAction', amount)
        // },
        ...mapActions([
            'reducePriceAction'
        ]),
    },
    props: ['products'],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
