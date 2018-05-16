import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page1/content', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:page1/content');
    assert.ok(route);
  });
});
