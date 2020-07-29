import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      exchange: [],
      countries: [],
      inputUnits: 1,
      inputCountry: { currency: "EUR", rate: 1.0 },
      outputCountry: { currency: "EUR", rate: 1.0 },
      euFlag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1599px-Flag_of_Europe.svg.png",
    },
    computed: {
      outputUnits() {
        return this.convert(
          this.inputUnits,
          this.outputCountry.rate / this.inputCountry.rate
        );
      },
      inputFlag() {
        return this.getFlag(this.inputCountry.currency);
      },
      outputFlag() {
        return this.getFlag(this.outputCountry.currency);
      },
      // inputFlag() {
      //   return this.getFlag(this.inputCountry.currency);
      // },
      // outputFlag() {
      //   return this.getFlag(this.outputCountry.currency);
      // },
    },
    filters: {
      currencyFormatter(value) {
        return (Math.round(value * 100) / 100).toFixed(2);
      },
    },
    mounted() {
      this.fetchRates();
      this.fetchCountries();
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
      fetchCountries() {
        fetch("https://restcountries.eu/rest/v2/all")
          .then((response) => response.json())
          .then((data) => {
            this.countries = data
              .filter((country) => country.population > 1500000)
              .filter(
                (country) =>
                  !["Puerto Rico", "Ecuador", "El Salvador"].includes(
                    country.name
                  )
              )
              .map((country) =>
                Object({
                  currency: country.currencies[0].code,
                  flag: country.flag,
                })
              );
          });
      },
      convert(units, rate) {
        return units * rate;
      },
      getFlag(currencyCode) {
        if (currencyCode === "EUR") {
          return this.euFlag;
        } else {
          return this.countries.find(
            (country) => country.currency === currencyCode
          ).flag;
        }
      },
    },
  });
});
