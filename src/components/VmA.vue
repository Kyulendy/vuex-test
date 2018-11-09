<template>
    <div>
        <p>DATA lol : {{lol}}</p>
        <p>STORE data : {{exampleState.message}}</p>
        <p v-for="wd in exampleStore.words" :key="wd">Word : {{wd}}</p>
        <p>New : {{newWord}}</p>
        <input v-model="newWord"/>
        <button @click="addWordHere(newWord)">Submit</button>
    </div>
</template>

<script>
import exampleStore from '@/stores/ExampleStore.js'

export default {
    name: 'VmA',
    data () {
        return {
            // lol: this.$parent.sourceOfTruth,
            // gg: sourceOfTruth,
            // wtf: this.$root.sourceOfTruth,
            // haha: "this.$root.$data"
            lol: "Basic LOL",
            exampleState: exampleStore.state,
            exampleStore: exampleStore.data,
            newWord: null
        }
    },
    methods: {
        addWordHere(word) {
            exampleStore.methods.addWord(word);
            this.newWord = null;
        }
    }
}
</script>