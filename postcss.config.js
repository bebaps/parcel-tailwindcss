const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './src/images/**/*.svg', './src/js/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 1,
      autoprefixer: {
        grid: true
      }
    }),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}
