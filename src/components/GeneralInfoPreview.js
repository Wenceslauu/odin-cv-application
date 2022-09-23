import React, { Component } from 'react'

class GeneralInfoPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const info = this.props.info

        return (
            <div className='preview-field'>    
                <p>First Name: {info.firstName}</p>
                <p>Last Name: {info.lastName}</p>
                <p>Email: {info.email}</p>
                <p>Phone: {info.phone}</p>

                <button onClick={this.props.changeMode}>Edit</button>
            </div>
        )
    }
}

export default GeneralInfoPreview