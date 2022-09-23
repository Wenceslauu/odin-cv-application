import React, { Component } from 'react'

class GeneralInfoInputs extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value

        this.props.handleChangeOnState(name, value)
    } 

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.changeMode()
    }

    render() {
        const info = this.props.info

        return (
            <form onSubmit={this.handleSubmit} className='inputs-and-buttons'>
                <div class="only-inputs">
                    <label htmlFor='first-name'></label>
                    <input type='text' id='first-name' value={info.firstName} name='firstName' onChange={this.handleChange} />
                    <label htmlFor='last-name'></label>
                    <input type='text' id='last-name' value={info.lastName} name='lastName' onChange={this.handleChange} />
                    <label htmlFor='email'></label>
                    <input type='mail' id='email' value={info.email} name='email' onChange={this.handleChange} />
                    
                    <label htmlFor='phone'></label>
                    <input type='tel' id='phone' value={info.phone} name='phone' onChange={this.handleChange} />
                </div>

                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default GeneralInfoInputs