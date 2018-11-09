<template>
  <div class="hello">
    {{objA}}
    {{objB}}
    <v-btn @click="mergeMethod()">mergeMethod !</v-btn>
    {{objC}}
    <p>COMPONENTS :</p>
    <vm-a></vm-a>
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <h1>You have {{exampleStore.words.length}} words</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import VmA from '@/components/VmA.vue'
import exampleStore from '@/stores/ExampleStore.js'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      exampleStore: exampleStore.data,
      objA: {
        lolA: 'lolA',
        kekA: 'kekA',
        objInner: {
          inner: 'inner'
        },
        twice: 'twiceA'
      },
      objB: {
        lolB: 'lolB',
        twice: 'twiceB'
      },
      objC: {}
    }
  },
  props: {
    msg: String
  },
  components: {
    VmA
  },

  methods: {
    /* Function that takes n objects as param and merge them together, works with nested object aswell */
    /* WARNING : If a property is set twice, function fails - ToDo: fix that */
    mergeMethod() {
      var objects = [this.objA, this.objB];

// // ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };
// // ES6
// const multiplyES6 = (x, y) => { return x * y };
// const multiplyES6 = (x, y) => x * y;

// //ES5
// var phraseSplitterEs5 = function phraseSplitter(phrase) {
//   return phrase.split(' ');
// };
// //ES6
// const phraseSplitterEs6 = phrase => phrase.split(" ");

      const mergeObjects = (...objects) =>
      [...objects].reduce(
          // Iterates over all objects and keys
          (accumulator, currentObject) =>
          Object.keys(currentObject).reduce((a, key) => {
              // If the key already exists, then merge both object together recursively
              accumulator[key] = accumulator.hasOwnProperty(key) ? mergeObjects(accumulator[key], currentObject[key]) : currentObject[key];
              return accumulator;
          }, {}),
          {}
      );
      this.objC = mergeObjects;

    },
    // return fields.filter(field => !job[field]);
    // Pour Kyu :
    // const result = fields.reduce((acc, field) => {
    //     !job[field] ? acc.push(field) : null;
    //     return acc;
    // }, []);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
