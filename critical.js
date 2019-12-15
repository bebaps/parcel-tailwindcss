const critical = require('critical');

critical.generate({
	inline: true,
  base: 'dist/',
  src: 'index.html',
  target: {
    css: 'critical.css',
    html: 'index-critical.html',
    uncritical: 'uncritical.css'
  },
  dimensions: [
    {
      width: 500,
      height: 200
    },
    {
      width: 1200,
      height: 900
    }
  ]
}, (err, output) => {
  if (err) {
    console.error(err);
  } else if (output) {
    console.log('Generated critical CSS');
  }
});
