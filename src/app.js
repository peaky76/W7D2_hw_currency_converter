import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      exchange: [],
      inputUnits: 1,
      inputRate: 1,
      outputRate: 1,
    },
    computed: {
      outputUnits() {
        return this.convert(this.inputUnits, this.outputRate / this.inputRate);
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
          .then((data) => {
            this.exchange = [{ currency: "EUR", rate: 1.0 }].concat(
              Object.keys(data.rates)
                .sort()
                .map((key) => Object({ currency: key, rate: data.rates[key] }))
            );
          });
      },
      convert(units, rate) {
        return units * rate;
      },
    },
  });
});
