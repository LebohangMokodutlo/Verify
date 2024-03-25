/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';

import { aliases, mdi } from 'vuetify/iconsets/mdi';

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#ff5722',
    // Add more custom colors here
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: '#eee',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#00ccff',
    error: '#ffcc00',
    // Add more custom colors here
  },
};

const vuetify = createVuetify({
  defaults: {
    VBtn: {
      ripple: true,
      rounded: '1',
      variant: 'flat',
    },
    VBtnGroup: {
      divided: true,
    },
    VCard: {
      border: true,
      flat: true,
    },
    VTextField: {
      variant: 'outlined',
    },
    VSelect: {
      variant: 'outlined',
    },
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  theme: {
    defaultTheme: 'light', // Set the default theme
    themes: {
      light: customLightTheme,
      dark: customDarkTheme,
    },
  },
});

export default vuetify;
