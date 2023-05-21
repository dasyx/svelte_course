/*To setup sass preprocessoring and others*/
import preprocess from "svelte-preprocess";
import sass from 'sass';

const config = {
  preprocess: preprocess({
    scss: {
      prependData: '@use "./src/styles/variables.scss";'
    },
    sass: {
      implementation: sass,
    },
  })
};

export default config;