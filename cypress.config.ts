import { defineConfig } from 'cypress';
import * as webpack from '@cypress/webpack-preprocessor';
import * as webpackOptions from './webpack.config';

export default defineConfig({
    viewportWidth: 1200,
    viewportHeight: 800,
    watchForFileChanges: false,
    env: {},
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            const options = {
                // send in the options from your webpack.config.ts, so it works the same
                // as your app's code
                webpackOptions: webpackOptions,
                watchOptions: {},
            };
            on('file:preprocessor', webpack(options));
            return config;
        },
        baseUrl: 'https://atid.store/',
    },
});
