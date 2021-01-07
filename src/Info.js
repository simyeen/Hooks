import React, { useReducer } from 'react';
import useInputs from './useInput';

const Info = () => {
  const [state, onChange] = useInputs({ name: '', nickName: '' });
  const { name, nickName } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickName}
      </div>
    </div>
  );
};

export default Info;
