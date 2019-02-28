var vm = new Vue({
  el: '#car',
  data: {
    items: [],
    status: [
      { pednding: 'Ожидается' },
      { out_of_stock: 'Нет в ниличии' },
      { in_stock: 'В наличии' }
    ]

  },
  created: function () {
    this.loadQuote();
  },
  methods: {
    loadQuote: function () {
      this.items = 'Loading...';
      var vm = this;
      axios.get('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
      .then(function (response) {
        vm.items = response.data;
      })
      .catch(function (error) {
        vm.items = 'Error' + error;
      });
    },
    removeElement: function (index) {
      this.items.splice(index, 1);
      console.log('Элемент был удален');
    }
  },
  // computed: {
  //   colorClass: function () {
  //     return {
  //       white: this.white
  //     };
  //   }
  // },
});
