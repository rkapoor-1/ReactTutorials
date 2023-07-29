import React, { useState } from 'react';
import User from './Component/UserComponent/AddUser';
import UserList from './Component/UserComponent/UserList';


function App() {
  const [Userlist,updateUserList]=useState([]);
  function AddUser(UserInfo){

    updateUserList((prev)=>{return [...prev,{userName:UserInfo.userName,userAge:UserInfo.userAge}]});
  }
  return (
    <div>
      <User AddUser={AddUser}></User>
      <UserList userList={Userlist}></UserList>
      
    </div>
  );
}

export default App;
