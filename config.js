/**
 * Brunch configuration
 * Based on angular-brunch-seed
 * @type {Object}
 */
exports.config = {
  conventions: {
    assets: /^app\/assets\//,
    ignored: /^(node_modules|(.*?\/)?[_]\w+)/
  },
  modules: {
    definition: 'commonjs',
    wrapper: 'commonjs'
  },
  paths: {
    "public": 'public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(bower_components|vendor)/
      }
    },
    stylesheets: {
      joinTo: {
        'css/vendor.css': /^(bower_components|vendor)/,
        'css/app.css': /^(app|vendor|bower_components)/
      },
      order: {
        before: ['app/styles/*.less']
      }
    },
    templates: {
      joinTo: {
        'js/views.js': /^app/
      }
    }
  },
  plugins: {
    jade: {
      pretty: true
    },
    uglify: {
      mangle: false,
      compress: true
    }
  }
};
