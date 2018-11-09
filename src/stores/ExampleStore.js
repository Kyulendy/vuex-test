const exampleStore = {
  // Data
  data: {
    words: ['lol', 'haha']
  },
  methods: {
    addWord(word) {
      // Constant
      exampleStore.data.words.push(word);
    }
  },
  // State
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

export default exampleStore;
