1. Install Dependencies
   Install @reduxjs/toolkit and react-redux using npm or yarn.

2. Create the Store
   Set up a Redux store using configureStore to hold your application's state.

3. Create a Slice
   Define a slice using createSlice. A slice includes the initial state, reducers (functions that modify the state), and automatically generated actions.

4. Provide the Store to React
   Wrap your app in the Provider component from react-redux and pass the store to it to make the Redux state available throughout the app.
   
5. Use Redux in Components
   Use useSelector to read the state in your components.
   Use useDispatch to send actions (trigger updates to the state) from your components.
