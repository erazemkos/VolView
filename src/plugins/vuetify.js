import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { useLocalStorage } from '@vueuse/core';

import AvaLogoIcon from '@/src/components/icons/AvaLogoIcon.vue';

Vue.use(Vuetify);

const store = useLocalStorage('dark', false);

export default new Vuetify({
  icons: {
    values: {
      avalogoicon: {
        component: AvaLogoIcon,
      },
    },
  },
  theme: {
    dark: store.value,
  },
});
