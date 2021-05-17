import React from 'react';
import {textState} from '../TaskView/TaskView'
import {
    selector,
    useRecoilValue
} from 'recoil';

  const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

  function CharacterCounter() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }

  export default CharacterCounter