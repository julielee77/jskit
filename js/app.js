var vm = new Vue({
  el: '#app',
  data: {
    frameworks: [{
      name: 'vue',
      github: ''
    }, {
      name: 'elment-ui',
      github: ''
    }, {
      name: 'vue-resource',
      github: ''
    }],
    demo: null,
    currentIndex:0
  },
  created: function() {
    this.$http.get('demo-list.json').then(function(res) {
      this.demo = res.data;
    }, function(res) {
      console.log(res.status + ' : ' + res.error);
    });
  }

});