import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        cats: [
            {name: 'cheshire', wowEffect: 2},
            {name: 'nyan', wowEffect: 5},
            {name: 'grumpy', wowEffect: 8}
        ]
    },
    mutations: {
        amplify(state, amplifyBy) {
            state.cats.forEach(cat => {
                cat.wowEffect+= amplifyBy;
            })
        }
    },
    actions: {

    },
    getters: {

    }
})