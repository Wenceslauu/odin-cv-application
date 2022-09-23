import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import EducationalExp from './EducationalExp'
import PracticalExp from './PracticalExp'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <header>
                    <h1>CV Application</h1>
                </header>
                <main>
                    <GeneralInfo />
                    <EducationalExp />
                    <PracticalExp />
                </main>
            </div>
        )
    }
}

export default App