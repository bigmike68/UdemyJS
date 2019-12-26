new Vue ({
  el: '#app',
  data: {
    fruit: 'oranges'
  },
  methods: {
    changeFruit: function(event) {
      this.fruit = event.target.value;
    }
  }
});
