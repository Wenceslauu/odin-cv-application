import React, { Component } from 'react'

class PracticalExpInputs extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (event) => {
        const info = this.props.info

        const target = event.target
        const name = target.name
        const value = target.value

        this.props.handleChangeOnState(name, value, info.id)
    } 

    render() {
        const info = this.props.info

        return (
            <form className='only-inputs'>
                <label htmlFor='company-name'></label>
                <input type='text' id='company-name' value={info.companyName} name='companyName' onChange={this.handleChange} />

                <label htmlFor='position'></label>
                <input type='text' id='position' value={info.position} name='position' onChange={this.handleChange} />

                <label htmlFor='from'></label>
                <input type='date' id='from' value={info.from} name='from' onChange={this.handleChange} />
                
                <label htmlFor='to'></label>
                <input type='date' id='to' value={info.to} name='to' onChange={this.handleChange} />
            </form>
        )
    }
}

export default PracticalExpInputs