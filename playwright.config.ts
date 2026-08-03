import { defineConfig, devices } from '@playwright/test';
// import { defineBddConfig } from 'playwright-bdd';
import { defineBddProject } from 'playwright-bdd';

// Configure paths for your BDD feature files and TypeScript steps
// const testDir = defineBddConfig({
//   features: 'features/ui/**/*.feature',
//   steps: 'steps/ui/**/*.ts',
// });

// const apiTestDir = defineBddConfig({
//   features: 'features/api/**/*.feature',
//   steps: 'steps/api/**/*.ts',
// });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // Point testDir to the BDD compiler output directory automatically
  // testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
    ...defineBddProject({
      name: 'ui',
      features: 'features/ui/**/*.feature',
      steps: ['steps/ui/**/*.ts', 'fixtures/testFixtures.ts'],
    }),
    use: { ...devices['Desktop Chrome'], baseURL: 'https://conduit.bondaracademy.com' }, 
  },
  {
    ...defineBddProject({
      name: 'api',
      features: 'features/api/**/*.feature',
      steps: ['steps/api/**/*.ts', 'fixtures/testFixtures.ts']
    }),
    use: { baseURL: 'https://conduit-api.bondaracademy.com' },
  }
  ],
});
