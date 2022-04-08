import { expect, PlaywrightTestConfig } from '@playwright/test';
import playwrightApiMatchers from 'odottaa';

expect.extend(playwrightApiMatchers);

const config: PlaywrightTestConfig = {
  globalSetup: './global-setup',
  webServer: {
    command: 'npm start',
    timeout: 120 * 1000,
    url: 'http://localhost:1337',
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:1337',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
};

export default config;
