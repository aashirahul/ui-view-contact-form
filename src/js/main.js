import angular from 'angular';

import { routerConfig } from './router';
//import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
//import { AboutController } from './controllers/about';
//import { LayoutController } from './controllers/layout';


import 'angular-ui-router';

angular
  .module('detailed-formApp', ['ui.router'])
  .config(routerConfig)
  //.controller('LayoutController', LayoutController)
 // .controller('HomeController', HomeController)
  .controller('AddController',AddController)
  //.controller('AboutController', SingleController);*/
  