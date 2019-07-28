import React from 'react'

// Lesson 保证功能单一，它不关心数据来源，只负责显示
function Lesson(props) {
    return (
        <div>
            {props.stage} - {props.title}
        </div>
    )
}

// 模拟数据
const lessons = [
    { stage: 'React', title: '核心API' },
    { stage: 'React', title: '组件化1' },
    { stage: 'React', title: '组件化2' },
]

// 定义高阶组件 widthContent
// 包装后的组件传入参数，根据改参数获取显示数据

/* function widthContent(Comp) {
    return function(props) {
        const content = lessons[props.idx];
        return <Comp {...content} />
    }
} */

const widthContent = Comp => props => {
    const content = lessons[props.idx];
    return <Comp {...content} />
}

// widthLog 高阶组件，能够在组件挂载时输出日志
const widthLog = Comp => {
    return class extends React.Component {
        componentDidMount() {
            console.log('didMount', this.props);
        }
        render() {
            return <Comp {...this.props} />
        }
    }
}

// 包装
const LessonWithContent = widthLog(widthContent(Lesson));

// 装饰器语法 @widthLog


export default function HocTest() {
    return (
        <div>
            {[0,0,0].map((item, idx) => (
                <LessonWithContent key={idx} idx={idx} />
            ))}
            {/* lessons.map((item,index) => {
                return (
                    <Lesson stage={item.stage} title={item.title} key={index} />
                )
            }) */}
        </div>
    )
}















