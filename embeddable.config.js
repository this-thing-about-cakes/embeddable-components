import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],
  previewBaseUrl: 'https://app.eu.embeddable.com',
  pushBaseUrl: 'https://api.eu.embeddable.com',
  audienceUrl: 'https://auth.eu.embeddable.com',
  authDomain: 'auth.eu.embeddable.com',
  authClientId: '6OGPwIQsVmtrBKhNrwAaXhz4ePb0kBGV',
});
