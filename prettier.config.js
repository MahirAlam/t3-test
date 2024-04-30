import vercelPrettierOptions from '@vercel/style-guide/prettier';

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  ...vercelPrettierOptions,
  plugins: [
    ...vercelPrettierOptions.plugins,
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sort-imports',
  ],
};

export default config;
