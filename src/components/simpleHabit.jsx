import React, {  useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = props => {

    const [count, setCount] = useState(0);
    const spanRef = useRef()
    const handleIncrement = useCallback(() => {
    setCount( count  + 1 );
  });

    // 이전에는 componenDidMount & componentWillMount 등을 활용했는데
    // useEfect는 이 둘을 동시에 사용하는 것과 같다.
    // 그러나 이것이 호출될 때마다 새로운 요청을 하게 되는데 이를 방지하기 위해서 특정 데이터가 변경되었을 때만
    // 호출하고 싶다면 저렇게 밑과 같이(  [count]  ) 사용하면 된다.

    useEffect(() =>{
        console.log(`mounted & updated :  ${count}`);
    }, [count]);
    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">Reading</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
};

export default SimpleHabit;
