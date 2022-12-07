module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    // Add PostCSS into addons for compiling tailwind below
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      },
      // End PostCSS
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}