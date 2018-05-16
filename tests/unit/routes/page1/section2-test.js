import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page1/section2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:page1/section2');
    assert.ok(route);
  });
});
