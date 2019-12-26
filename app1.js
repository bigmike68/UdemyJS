new Vue ({
  el: '#app',
  data: {
    fruit: 'Cherries',
    link: 'https://www.si.com/'
  },
  methods: {
    changeFruit: function() {
      return this.fruit;
    }
  }
});
