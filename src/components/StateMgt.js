import React, { Component, useState, useEffect } from 'react'

// 函数组件的状态的管理需要hooks支持

// hooks 只能在16.8.x以后使用
function ClockFunc() {
    // 创建状态 , useState 返回状态和修改状态的函数所组成的数组
    const [date, setDate] = useState(new Date())
    // 定时器是副作用，需要用到useEffect
    useEffect(() =>{
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () =>{
            clearInterval(timerId)
        }
    }, []) // 参数2指的是依赖状态，本例中没有依赖而且仅执行一次，放一个空数组
    return (
        <div>{date.toLocaleTimeString()}</div>
    )
}



class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            counter: 0
        }
    }
    componentDidMount() {

        /* this.setState({ counter: this.state.counter + 1 }, () => {
            console.log(this.state.counter);
            
        })
        this.setState({ counter: this.state.counter + 1 }, () => {
            console.log(this.state.counter);
            
        })
        this.setState({ counter: this.state.counter + 1 }, () => {
            console.log(this.state.counter);
            
        }) */

        this.setState(nextState => ({ counter: nextState.counter + 1 }), () => {
            console.log(this.state.counter);
            
        })
        this.setState(nextState => ({ counter: nextState.counter + 1 }), () => {
            console.log(this.state.counter);
            
        })
        this.setState(nextState => ({ counter: nextState.counter + 1 }), () => {
            console.log(this.state.counter);
            
        })

        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}

export default function StateMgt() {
    return (
        <div>
            <Clock />
            <ClockFunc />
        </div>
    )
}














