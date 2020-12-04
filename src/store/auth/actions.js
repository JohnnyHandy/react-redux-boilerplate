import { createAction } from '@reduxjs/toolkit'

export const SIGN_IN = createAction('auth:SIGN_IN')
export const SIGN_IN_SUCCESSFUL = createAction('auth:SIGN_IN_SUCCESSFUL')
export const SIGN_IN_FAILURE = createAction('auth:SIGN_IN_FAILURE')

export const LOGOUT = createAction('auth:LOGOUT')
