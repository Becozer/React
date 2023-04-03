import React from "react";

const Hello = () => {
//    return (
//        <div className='dummyClass'>
//            <h1>Hello Everyone</h1>
//        </div>
//    )
    return React.createElement('div', {id: 'hello', className: 'DummyClass'}, React.createElement('h1', null, 'Hello Everyone'))

}

export default Hello