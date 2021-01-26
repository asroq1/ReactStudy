import React, { memo }   from 'react';
//  함수형 컴포넌트에서 PureComponent 와 비슷한 것은 memo가 있다.
//  state가 따로 없으면 이렇게 함수형 컴포넌트를 만들 수 있다. 
//  props의 데이터가 변경되지 않으면 컴포넌트를 업데이트 하지 않아도 될 때 사용하면 됌.
const HabitAddForm = memo(props => {

    const  formRef = React.createRef();
    const  inputRef = React.createRef();
     
    const onSubmit = event => {
           event.preventDefault();
           const name = inputRef.current.value;
           name && props.onAdd(name);
           //가라로 쉽게 하는 법
           // this.inputRef.current.value = '';      
           //이게 정석으로 리셋하는 방법
           formRef.current.reset();
       };
  
      return (
          <div>
             <form ref={formRef} className="add-forom" onSubmit={onSubmit}>
                 <input 
                 //아래와 같이 ref를 사용할 대상에다 할당해줌
                 ref={inputRef}
                 type="text" 
                 className="add-input" 
                 placeholder="Please enter your habit"/>
                 <button className="add-btn">Add</button>
             </form>
         </div>
      );
});

export default HabitAddForm;
