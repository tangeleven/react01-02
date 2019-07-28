import React, { Component } from "react"
// import '../index.css'
import style from '../index.module.css'

export default class JsxTest extends Component{
    render() {
        
        return (
            <div>
                <h2>jsx </h2>
                <img src={require('../logo.svg')} className={style.img2} />
            </div>
        )
    }
}





















