import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      unitsToConvert: 0,
    },
    computed: {},
    mounted() {
      this.fetchRates();
    },
    methods: {
      fetchRates() {
        fetch("https://api.exchangeratesapi.io/latest")
          .then((response) => response.json())
          .then((data) => (this.rates = data.rates));
      },
    },
  });
});
