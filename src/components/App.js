import React from 'react';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail';

const App = () => (

  <div>
    <h2>Username List:</h2>
    <UserList/>
    <hr/>
    <h2>User Detail:</h2>
    <UserDetail/>
  </div>
);

export default App;
