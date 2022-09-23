import React, { Component } from 'react'

class EducationalExpPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const exps = this.props.exps

        return (
            <div className='preview-field'>
                <ul>
                    {exps.map((exp) => {
                        return <li className='preview-experience' key={exp.id}>
                            <p>School Name: {exp.schoolName}</p>
                            <p>Degree: {exp.degree}</p>
                            <p>From: {exp.from}</p>
                            <p>To: {exp.to}</p>
                            <button onClick={this.props.deleteExp.bind(this, exp.id)}>Delete</button>
                        </li>;
                    })}
                </ul>
                <button onClick={this.props.changeMode}>Edit</button>
            </div>
        )
    }
}

export default EducationalExpPreview