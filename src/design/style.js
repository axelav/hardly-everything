var gr8 = require('gr8')

var utils = [ ]

utils.push({
  prop: 'position',
  prefix: 'ps',
  vals: { st: 'sticky' }
})

utils.push({
  prop: 'width',
  unit: '%',
  vals: [50]
})

utils.push({
  prop: 'width',
  prefix: 'wrem',
  unit: 'rem',
  vals: [40]
})

utils.push({
  prop: 'max-width',
  prefix: 'mwrem',
  unit: 'rem',
  vals: [43]
})

utils.push({
  prop: 'opacity',
  prefix: 'op',
  vals: [{ 33: 0.3 }]
})

utils.push({
  prop: 'padding-top',
  prefix: 'ptvh',
  unit: 'vh',
  vals: [25, 50, 75, 100]
})

utils.push({
  prop: 'margin-top',
  prefix: 'mtpx',
  unit: 'rem',
  vals: [0, 2].map(function (size) { return { [size]: size / 10 }})
})

var gr8css = gr8({
  breakpoints: {
    lg: '1000px',
    md: '800px',
    sm: '600px'
  },
  fontSize: [0.7, 0.8, 1, 1.2, 1.4, 1.5, 1.6, 1.8, 2, 3, 4]
    .map(function (size) {
      return { [size.toString().replace('.', '-')]: size * 1.5 }
    }),
  spacing: [0, 0.25, 0.5, 1, 1.5, 2, 3, 4, 4.5]
    .map(function (size) {
      return { [size.toString().replace('.', '-')]: size * 1.25 }
    }),
  responsive: true,
  utils: utils
})


module.exports = gr8css