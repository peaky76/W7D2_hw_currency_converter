import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      unitsToConvert: 1,
      // selectedCurrency: null,
      conversionRate: 1,
    },
    computed: {
      unitsNewCurrency() {
        return this.convert(this.unitsToConvert, this.conversionRate);
      },
    },
    filters: {
      currencyFormatter(value) {
        return (Math.round(value * 100) / 100).toFixed(2);
      },
    },
    mounted() {
      this.fetchRates();
    },
    methods: {
      fetchRates() {
        fetch("https://api.exchangeratesapi.io/latest")
          .then((response) => response.json())
          .then((data) => (this.rates = data.rates));
      },
      convert(baseUnits, rate) {
        return baseUnits * rate;
      },
    },
  });
});
