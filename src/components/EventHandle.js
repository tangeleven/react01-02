// 用户事件处理
// react中没有双向绑定 
// react严格遵循单向数据流

import React, {Component} from 'react'

export default class EventHandle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    

    handleChange = (e) => {
        console.log(this, e);
        
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
        )
    }
}



















