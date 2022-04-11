<div align="center">
<h1 align="center">An example of how to set up and run API tests with <a href="https://playwright.dev/">Playwright</a> and <a href="https://github.com/elaichenkov/odottaa">odottaa</a></h1>
  <img
    height="440"
    width="660"
    alt="sloth"
    src="./assets/playwright-odottaa.png"
  />
</div>

---
[![test](https://github.com/elaichenkov/playwright-api-testing-example/actions/workflows/playwright.yml/badge.svg)](https://github.com/elaichenkov/playwright-api-testing-example/actions/workflows/playwright.yml)

Read my article about [API testing with Playwright & odottaa](https://elaichenkov.medium.com/api-testing-with-playwright-odottaa-77451917342f).

Check out the [HTML report](https://elaichenkov.github.io/playwright-api-testing-example) that was published on GitHub pages.

## Usage

Clone the repository and run the following command:

```sh
npm install
```

## Run tests

```sh
npm test
```

Then, to open report run the following command:

```sh
npm run report
```

It will open default browser and open the HTML report

![html report](assets/html-report.png)

## Run server (optionally)

```sh
npm start
```

## Author

Yevhen Laichenkov

## License

[MIT](LICENSE)
