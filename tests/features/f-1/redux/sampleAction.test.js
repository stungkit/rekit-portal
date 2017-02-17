import { expect } from 'chai';

import {
  F_1_SAMPLE_ACTION,
} from 'src/features/f-1/redux/constants';

import {
  sampleAction,
  reducer,
} from 'src/features/f-1/redux/sampleAction';

describe('f-1/redux/sampleAction', () => {
  it('returns correct action by sampleAction', () => {
    expect(sampleAction()).to.have.property('type', F_1_SAMPLE_ACTION);
  });

  it('handles action type F_1_SAMPLE_ACTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: F_1_SAMPLE_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});