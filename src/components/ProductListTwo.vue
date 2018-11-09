<template>
    <div id="product-list-two">
        <h2>Product List Two - prop</h2>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} $</span>
            </li>
        </ul>
        <h2>vuexProducts</h2>
        <ul>
            <li v-for="product in vuexProducts" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} $</span>
            </li>
        </ul>
        <p>saleProductsViaGetter</p>
        <ul>
            <li v-for="product in saleProductsViaGetter" :key="product.name">
                <span class="name">{{product.name}}</span> -
                <span class="price">{{product.price}} $</span>
            </li>
        </ul>
        <button @click="reducePriceWrongWay">Reduce Price Wrong way</button>
        <button @click="reducePrice">Reduce Price Nicely</button>
        <button @click="reducePrice(4)">Reduce Price By 4</button>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data () {
        return {
        }
    },
    computed: {
        vuexProducts () {
            return this.$store.state.vuexProducts;
        },
        saleProductsViaGetter() {
            return this.$store.getters.saleProductsGetter;
        }
    },
    methods: {
        reducePriceWrongWay: function() {
            console.log("reduce price");
            this.$store.state.vuexProducts.forEach(product => {
                product.price -= 1;
            });
        },
        reducePrice: function(amount = 1) {
            // console.log("reduce price");
            // this.$store.state.vuexProducts.forEach(product => {
            //     product.price -= 1;
            // });

            // AS IF DID THIS : this.$store.mutations.reducePrice;
            // Meh
            // this.$store.commit('reducePrice');

            // Dispatch an action ;)
            this.$store.dispatch('reducePriceAction', amount)
        }
    }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
