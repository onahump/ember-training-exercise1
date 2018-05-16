import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page1', function() {
    this.route('section1');
    this.route('section2');
    this.route('section3');
    this.route('content', { path: 'content/:username' });
  });
  this.route('page2');
  this.route('page3');
});

export default Router;
