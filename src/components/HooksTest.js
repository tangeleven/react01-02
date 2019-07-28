import React, { useState, useEffect, useReducer } from 'react'

// 仅展示水果列表
function FruitList({fruits, onSetFruit}) {
    console.log(fruits);
    
    return (
        <ul>
            {fruits.map(f => <li key={f} onClick={() => {
                console.log(f);
                
                onSetFruit(f)
            }}>{f}</li>)}
        </ul>
    )
}

function FruitAdd(props) {
    // 输入内容状态及设置内容状态的方法
    const [pname, setPname] = useState("");
    // 键盘事件处理
    const onAddFruit = e => {
        if (e.key === 'Enter') {
            props.onAddFruit(pname);
            setPname("");
        }
    }
    return (
        <div>
            <input 
                type="text"
                value={pname}
                onChange={e => setPname(e.target.value)}
                onKeyDown={onAddFruit}
            />
        </div>
    )
}

// 添加 fruit 状态维护 fruitReducer
function fruitReducer(state, action){
    switch (action.type) {
        case "init":
            return action.payload;
        case "add":
            return [...state, action.payload];
        default:
            return state;
    }
}


export default function HooksTest() {
    // useState(initialState), 接收初始状态，返回一个由状态和其更新函数组成的数组
    const [fruit, setFruit] = useState('');
    // const [fruits, setFruits] = useState(['香蕉','草莓','芒果']);
    // 参数1是 reducer
    // 参数2是 初始值
    const [fruits, dispatch] = useReducer(fruitReducer, []);

    // 异步获取水果列表
    useEffect(() => {
        console.log('effect');
        
        setTimeout(() => {
            dispatch({type: 'init', payload: ['香蕉', '西瓜']})
            // setFruits(['香蕉','西瓜'])
        }, 1000)
    }, []);  // 依赖为空表示只执行一次

    useEffect(() => {
        document.title = fruit;
    }, [fruit]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('msg');
            
        }, 1000)

        return function() {
            clearInterval(timer)
        }
    }, []);


    return (
        <div>
            {/* <FruitAdd onAddFruit={pname => setFruits([...fruits, pname])} /> */}
            <FruitAdd onAddFruit={pname => dispatch({type: 'add', payload: pname})} />
            <p>{fruit === "" ? "请选择喜爱的水果：" : `您的选择是：${fruit}`}</p>
            {/* 列表 */}
            <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList>
        </div>
    )
}
