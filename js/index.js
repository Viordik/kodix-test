var vm = new Vue({
  el: '#car',
  data: {
    items: [],
    status: [
      { pednding: 'Ожидается' },
      { out_of_stock: 'Нет в ниличии' },
      { in_stock: 'В наличии' }
    ],
    name: null,
    price: null,
    year: null,
    description: null,
    color: null,
    statuses: null
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
    },
    addItem: function () {
      this.items.push({});
      console.log('Элемент был добавлен');
    }
  },
});


Vue.component('carNew', {
  template: '<article class="car-item"><div class="car-item__wrapper"><p class="car-item__text car-item__text--name">{{ name }}</p><span class="form__custom-radio circle"></span><p class="car-item__text"></p></div><div class="car-item__wrapper car-item__wrapper--second"><p class="car-item__dop"></p></div><div class="car-item__wrapper car-item__wrapper--second car-item__wrapper--third"><time class="car-item__text"></time><p class="car-item__text"></p><button v-on:click="removeElement(index)" class="car-item__btn" type="button">Удалить</button></div></article>'
});
