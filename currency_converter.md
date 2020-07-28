# Homework - Currency Converter

## Learning Objectives

- Be able to set up a Vue application
- Be able to read data from an API
- Be able to handle user interaction and practice business logic
- Be able to implement computed properties

### Brief

You have been asked to build a currency exchange calculator.

Use the data from [this url](https://api.exchangeratesapi.io/latest) to allow the user to convert from Euro to any of the listed currencies.

### MVP

The app should load the exchange rates when the page loads. The data being retrieved is an object, so it will be beneficial to [read the docs](https://vuejs.org/v2/guide/list.html#v-for-with-an-Object) on how a `v-for` directive handles objects.

```
  mounted(){
    // ...
  }
```

The user should be able to enter an amount which they can then:
 - convert from Euros into a selected currency
 - convert from a selected currency into Euros

Make sure you appropriately format any currencies displayed to the user (_i.e._ to two decimal places).

### Extensions

- Allow cross-currency conversions - from non-base to non-base currencies. (e.g. from GBP to USD)
- Research how Vue's [filters](https://vuejs.org/v2/guide/filters.html) allow for formatting of output and implement them where appropriate.

## Preparation For Tomorrow

Please run the following command in your terminal to install Vue's CLI - we'll talk about this in more depth tomorrow.

```bash
npm install -g @vue/cli
```

To check it's working once the install has finished, run the following command to see the help that's available for the Vue CLI.

```bash
vue -h
```
