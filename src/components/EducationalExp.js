import React, { Component } from 'react'
import EducationalExpInputs from './EducationalExpInputs'
import EducationalExpPreview from './EducationalExpPreview'
import uniqid from 'uniqid'

class EducationalExp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exps: [{
                schoolName: '',
                degree: '',
                from: '',
                to: '',
                id: uniqid()
            }],
            preview: false
        }
    }

    handleChangeOnState = (name, value, id) => {
        this.setState((prevState) => {
            const index = prevState.exps.findIndex((exp) => {
                return exp.id === id
            })

            const info = Object.assign({}, prevState.exps[index])
            info[name] = value
            
            const exps = Object.assign([], prevState.exps)
            exps[index] = info

            return { exps }
        })
    }

    changeMode = () => {
        this.setState((prevState) => {
            return {
                preview: !prevState.preview
            }
        })
    }

    handleAddExp = () => {
        this.setState((prevState) => {
            const newInfo = {
                schoolName: '',
                degree: '',
                from: '',
                to: '',
                id: uniqid()
            }

            return {
                exps: prevState.exps.concat(newInfo)
            }
        })
    }

    deleteExp = (id) => {
        this.setState((prevState) => {
            const index = prevState.exps.findIndex((exp) => {
                return exp.id === id
            })

            const exps = Object.assign([], prevState.exps)
            exps.splice(index, 1)

            return { exps }
        })
    }

    render() {
        const exps = this.state.exps
        const preview = this.state.preview

        return (
            <div>    
                <h2>Educational Experiences</h2>
                {!preview 
                ? <div className='inputs-and-buttons'>
                    {exps.map((exp) => {
                        return <li key={exp.id}>
                            <EducationalExpInputs handleChangeOnState={this.handleChangeOnState} changeMode={this.changeMode} info={exp}/>
                        </li>;
                    })}
                    <button onClick={this.handleAddExp}>Add Experience</button>
                    <button onClick={this.changeMode}>Save</button>
                </div> 
                : <EducationalExpPreview changeMode={this.changeMode} exps={exps} deleteExp={this.deleteExp} />}
            </div>
        )
    }
}

export default EducationalExp