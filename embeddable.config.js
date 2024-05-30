import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],
  previewBaseUrl: 'https://app.eu.embeddable.com',
  pushBaseUrl: 'https://app-api.eu.embeddable.com',
  audienceUrl: 'https://auth.eu.embeddable.com',
  authDomain: 'auth.eu.embeddable.com',
  authClientId: process.env.AUTH_CLIENT_ID,
});
