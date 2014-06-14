// var tests = [];
// for (var file in window.__karma__.files) {
//   // console.log(file);
//   if (window.__karma__.files.hasOwnProperty(file)) {
//     if (/Spec\.js$/.test(file)) {
//       tests.push(file);
//     }
//   }
// }



// requirejs.config({
//   baseUrl: '/base/app',
//   nodeRequire: require,

//   paths: {
//     configuration: 'configuration/index',
//     common: 'common/index',
//     routes: 'routes/index',
//     angular: '../bower_components/angular/angular'
//   },

//   shim: {
//     'angular': {
//       exports: 'angular'
//     },
//     // 'configuration': {
//     //   exports: 'configuration'
//     // }
//   },

//   // ask Require.js to load these files (all our tests)
//   deps: tests,

//   // start test run, once Require.js is done
//   callback: window.__karma__.start
// });

