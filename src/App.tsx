import React from 'react'

import style from './App.module.css';
import reactImage from './react.png'

export default function App() {
    return (
        <div className={style.app}>
            <h1>App</h1>
            <img src={reactImage} alt="React" />
        </div>
    )
}
