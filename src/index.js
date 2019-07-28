
import React from 'react'
import ReactDOM from 'react-dom'
// React类负责逻辑控制，比如修改数据 -> (映射到虚拟dom) vdom
// ReactDOM类负责渲染， vdom -> dom
// babel-loader可以转换jsx -> vdom, React.createElement()
// let jsx = <h1>React 真帅</h1>;   // <h1>React 真帅</h1>  这段代码在js 中是不支持，通过babel-loader把jsx转换成vdom
// console.log(jsx);

import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'))


/**
 * 
 * jsx就是虚拟dom
 * 
 * 
 *  */



