import * as actions from '../actions'

describe('auth actions', () => {
  describe('signIn', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'auth:SIGN_IN',
        payload: {
          email: 'mock',
          password: 'mock'
        }
      }

      expect(
        actions.SIGN_IN({
          email: 'mock',
          password: 'mock'
        })
      ).toEqual(expected)
    })
  })

  describe('signInSuccessful', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'auth:SIGN_IN_SUCCESSFUL',
        payload: 'mockUser'
      }

      expect(actions.SIGN_IN_SUCCESSFUL('mockUser')).toEqual(expected)
    })
  })

  describe('signInFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'auth:SIGN_IN_FAILURE',
        payload: 'mockError'
      }

      expect(actions.SIGN_IN_FAILURE('mockError')).toEqual(expected)
    })
  })

  describe('logout', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: 'auth:LOGOUT'
      }

      expect(actions.LOGOUT()).toEqual(expected)
    })
  })
})
