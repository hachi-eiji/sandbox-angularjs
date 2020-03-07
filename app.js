import angular from 'angular';
import '@uirouter/angularjs';
import 'ng-custom-element';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './sandbox-elements.main.js'

// Create and bootstrap application
const requires = [
  'ngCustomElement',
  'ui.router',
  'home',
];
window.initializeAngularElements().then(function(){
window.app = angular.module('app', requires);
angular.bootstrap(document.getElementById('app'), ['app']);

})

