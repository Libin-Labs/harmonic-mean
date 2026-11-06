import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('known mean', () => {
  assert.ok(Math.abs(api.harmonicMean([1, 2, 4]) - 12 / 7) < 1e-14);
});
test('constant', () => {
  assert.equal(api.harmonicMean([3, 3, 3]), 3);
});
test('subnormal reciprocal safety', () => {
  assert.equal(api.harmonicMean([Number.MIN_VALUE]), Number.MIN_VALUE);
});
test('large scale', () => {
  assert.equal(api.harmonicMean([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});
test('ordering and bounds', () => {
  const a = [2, 7, 10],
    v = api.harmonicMean(a);
  assert.ok(v >= 2 && v <= 10);
  assert.ok(Math.abs(v - api.harmonicMean([...a].reverse())) < 1e-14);
});
test('invalid observations', () => {
  assert.throws(() => api.harmonicMean([0, 1]));
  assert.throws(() => api.harmonicMean([-1]));
  assert.throws(() => api.harmonicMean([]));
  assert.throws(() => api.harmonicMean([, 1]));
});
