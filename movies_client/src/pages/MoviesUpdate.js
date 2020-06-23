import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

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

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            genre: '',
            format: '',
            running_time: '',
            age_restriction: '',
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
        this.setState({ format })
    }

    handleChangeInputRunningTime = async event => {
        const running_time = event.target.value
        this.setState({ running_time })
    }

     handleChangeInputAgeRestriction = async event => {
        const age_restriction = event.target.value
        this.setState({ age_restriction })
    }


    handleUpdateMovie = async () => {
        const { id, name, genre, format, running_time, age_restriction } = this.state
        const payload = { name, genre, format, running_time, age_restriction }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`The Movie Has Been Updated Successfully`)
            this.setState({
                name: '',
                genre: '',
                format:'',
                running_time: '',
                age_restriction: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            genre: movie.data.data.genre,
            format: movie.data.data.format,
            running_time: movie.data.data.running_time,
            age_restriction: movie.data.data.age_restriction,
        })
    }

    render() {
        const { name, genre, format, running_time, age_restriction } = this.state
        return (
            <Wrapper>
                <Title>Update Movie</Title>

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
                    onChange={this.handleChangeInputRunningTime}
                />
                <Label>Age_Restriction:</Label>
                <InputText
                    type="text"
                    value={age_restriction}
                    onChange={this.handleChangeInputAgeRestriction}
                />

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate
