import React from 'react'
//  Dialog 定义组件外观和行为
function Dialog(props) {
    // 这里 props.children代表了标签内部内容
    // console.log(props);

    const messages = {
        foo:{ title: 'foo', content: 'foo~' },
        bar:{ title: 'bar', content: 'bar~' },
    }
    
    const { def, footer } = props.children(messages[props.msg]);

    return (
        <div style={{ border: "1px solid blue" }}>
            {def}
            <div>{footer}</div>
        </div>
    )
}

function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, radio => {
                // 要修改虚拟dom 只能克隆它
                // 参数1是克隆对象
                // 参数2是设置的属性
                return React.cloneElement(radio, {name: props.name})
            })}
        </div>
    )
}

function Radio({children, ...rest}) {
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    )
}

export default function Composition() {
    return (
        <div>
            <Dialog msg="foo">
                {({ title, content }) =>({
                    def: (
                        <>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </>
                    ),
                    footer: (
                        <button onClick={() => alert('react真好')}>确认</button>
                    )
                })}
                
            </Dialog>
            
            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="ng">angular</Radio>
            </RadioGroup>
        </div>
    )
}
