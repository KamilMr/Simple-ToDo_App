import React from 'react';
import {textState} from '../TaskView/TaskView'
import {
    selector,
    useRecoilValue
} from 'recoil';
import {Text} from 'theme-ui'

  const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

  function CharacterCounter() {
    const count = useRecoilValue(charCountState);
  
    return <Text sx={{color: 'muted'}}> {count}</Text>;
  }

  export default CharacterCounter