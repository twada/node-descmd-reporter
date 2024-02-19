import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert/strict';

describe('top level spec marker is "###"', () => {
  describe('subspec marker is "-"', () => {
    describe('subsubspec marker is also "-"', () => {
      it('example marker is also "-"', () => {
        assert(true);
      });
    });
  });
  it('example at shallow level "-"', () => {
    assert(true);
  });
});
it('top level example marker is "###"', () => {
  assert(true);
});
