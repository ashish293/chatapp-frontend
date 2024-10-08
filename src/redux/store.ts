import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './api/chat'
import { setupListeners } from '@reduxjs/toolkit/query'
import { emptySplitApi } from './api/emptySplitApi'
import { rtkQueryErrorLogger } from './api/errorHandler'

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]:chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware).concat(rtkQueryErrorLogger),
})
setupListeners(store.dispatch)



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch