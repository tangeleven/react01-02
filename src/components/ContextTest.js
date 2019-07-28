import React from 'react'
// 1. 创建上下文
const Context = React.createContext();

// 2. 获取Provider和Consumer
const Provider = Context.Provider;
const Consumer = Context.Consumer;


// widthConsumer高阶组件，它根据配置返回一个高阶组件
// 接收组件 返回组件
function widthConsumer(Consumer) {
    return Comp => props => {
        return (
            <Consumer>
                {value => <Comp {...value} />}
            </Consumer>
        )
    }
}

const Child = widthConsumer(Consumer)(function (props) {
    return (
        <div onClick={() => props.add()}>{props.counter}</div>
    )
})



export default class ContextTest extends React.Component {
    state = {
        counter: 0
    }
    add = () => {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <Provider value={{counter: this.state.counter, add: this.add}}>
                {/* <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer> */}
                <Child />
                <Child />
                <Child />
            </Provider>
        )
    }
}
