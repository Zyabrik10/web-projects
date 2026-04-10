import { configureStore } from '@reduxjs/toolkit';
import { websiteReducer } from './website/website-reducer';
import { authReducer } from './auth/auth-reducer';
import { modalsReducer } from './modals/modals-reducer';
import { teachersReducer } from './teachers/teachers-reducer';

export const store = configureStore({
  reducer: {
    website: websiteReducer,
    auth: authReducer,
    modals: modalsReducer,
    teachers: teachersReducer,
  },
});
