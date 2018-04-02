import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = '123xyz';
  const state = authReducer({}, {
    type: 'LOGIN',
    uid
  });
  expect(state).toEqual({
    uid
  });
});

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 'anything' }, {
    type: 'LOGOUT'
  });
  expect(state).toEqual({});
});