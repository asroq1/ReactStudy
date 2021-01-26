import React, { Component } from 'react';

class HabitAddForm extends Component {
    //1.바닐라 js 쿼리셀렉터 개념 Ref를 사용할 시 변수명에 뒤에 Ref를 적어준다
    //2. DOM 요소에 접근해서 해당 요소에 VALUE나 클릭 이벤트나 등록했던 것처럼
    //바로 DOM요소에 접근하지 않고 이렇게 접근해야 한다.
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //가라로 쉽게 하는 법
        // this.inputRef.current.value = '';
        
        //이게 정석으로 리셋하는 방법
        this.formRef.current.reset();
    };
    render() {      
        return (
            <div>
                <form ref={this.formRef} className="add-forom" onSubmit={this.onSubmit}>
                    <input 
                    //아래와 같이 ref를 사용할 대상에다 할당해줌
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="Please enter your habit"/>
                    <button className="add-btn">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;