import React, { Component } from 'react'
import GeneralInfoInputs from './GeneralInfoInputs'
import GeneralInfoPreview from './GeneralInfoPreview'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: {
                firsName: '',
                lastName: '',
                email: '',
                phone: ''
            },
            preview: false
        }
    }

    handleChangeOnState = (name, value) => {
        this.setState((prevState) => {
            const info = Object.assign({}, prevState.info)
            info[name] = value
            return { info }
        })
    }

    changeMode = () => {
        this.setState({
            preview: !this.state.preview
        })
    }

    render() {
        const info = this.state.info
        const preview = this.state.preview

        return (
            <div>    
                <h2>General Information</h2>
                {!preview ? <GeneralInfoInputs handleChangeOnState={this.handleChangeOnState} changeMode={this.changeMode} info={info} /> : <GeneralInfoPreview changeMode={this.changeMode} info={info} />}
            </div>
        )
    }
}

export default GeneralInfo