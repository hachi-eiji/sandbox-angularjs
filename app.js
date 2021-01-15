import angular from "angular";
import "@uirouter/angularjs";

// Import your app stylesheets
import "./style.css";

// Import your app functionality
import "./home";
import "./sandbox-elements.main.js";

// Create and bootstrap application
const requires = ["ui.router", "home"];
window.initializeAngularElements().then(function() {
  window.app = angular.module("app", requires);
  angular.bootstrap(document.getElementById("app"), ["app"]);
});
