import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import './react-table.css'
import './table.css';


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            genre: '',
            format: '',
            running_time: '',
            age_restriction:'',
            
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputGenre = async event => {
        const genre = event.target.value
        this.setState({ genre})
    }

     handleChangeInputFormat = async event => {
        const format = event.target.value
        this.setState({ format})
    }

      handleChangeInputRunning_Time = async event => {
        const running_time = event.target.value
        this.setState({ running_time})
    }

    handleChangeInputAge_Restriction = async event => {
        const age_restriction = event.target.value
        this.setState({ age_restriction})
    }
   
   


    handleIncludeMovie = async () => {
        const {name, genre, format, running_time, age_restriction} = this.state
        const payload = { name, genre, format, running_time, age_restriction }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie Has Been Loaded Successfully`)
            this.setState({
                name: '',
                genre: '',
                format: '',
                running_time: '',
                age_restriction: '',
                
            })
        })
    }

    render() {
        const { name, genre, format, running_time,age_restriction } = this.state
        return (
            <Wrapper>
                <Title>Create New Movie</Title>

                <Label>Name:</Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Genre:</Label>
                <InputText
                    type="text"
                    value={genre}
                    onChange={this.handleChangeInputGenre}
                />

                <Label>Format:</Label>
                <InputText
                    type="text"
                    value={format}
                    onChange={this.handleChangeInputFormat}
                />


                <Label>Running_Time:</Label>
                <InputText
                    type="text"
                    value={running_time}
                    onChange={this.handleChangeInputRunning_Time}
                />

                <Label>Age_Restriction:</Label>
                <InputText
                    type="text"
                    value={age_restriction}
                    onChange={this.handleChangeInputAge_Restriction}
                />

                <Button onClick={this.handleIncludeMovie}>Add New Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert

