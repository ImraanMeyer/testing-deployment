/* Connecting to React and Components need for my UI */


import React, { Component } from 'react'
import ReactTable, {useTable} from 'react-table'
import api from '../api'
import styled from 'styled-components'
import './table.css';



/* Defining Variables for the items that need to be formated and styled using Styled-Components */

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateMovie extends Component {
     constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this);

    }

    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        console.log("props");
        console.dir(this.props);
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Are You Sure That You Want To Delete The Movie ${this.props.id} Permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

/*Defining my MovieList Component */

export default class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: JSON.stringify(movies.data),//movies.data,
                isLoading: false,
            })
            console.log("State");
            console.dir(this.state);
        })
    }

     render() {
         let showTable = false;

         function Table({ columns, data }) {
             // Using the state and functions returned from useTable to build my UI
             const {
                 getTableProps,
                 getTableBodyProps,
                 headerGroups,
                 rows,
                 prepareRow,
             } = useTable({
                 columns,
                 data,
             })

             // Render the UI for my movies table
             return (
                 <table {...getTableProps()}>
                     <thead>
                     {headerGroups.map(headerGroup => (
                         <tr {...headerGroup.getHeaderGroupProps()}>
                             {headerGroup.headers.map(column => (
                                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                             ))}
                         </tr>
                     ))}
                     </thead>
                     <tbody {...getTableBodyProps()}>
                     {rows.map((row, i) => {
                         prepareRow(row)
                         return (
                             <tr {...row.getRowProps()}>
                                 {row.cells.map(cell => {
                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                 })}
                             </tr>
                         )
                     })}
                     </tbody>
                 </table>
             )
         }

        let {movies, isLoading} = this.state
        if (typeof movies == 'string') {
            movies = JSON.parse(movies);
            movies = movies.data;

            movies.forEach(movie =>{
               movie.delete =  <span>
                            <DeleteMovie id={movie._id}/>
                        </span>
               movie.update = <span>
                            <UpdateMovie id={movie._id}/>
                        </span>
            });

            console.log("Movies loaded");
            console.dir(movies);
            showTable = true;
        }
        const columns = [

           {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Genre',
                accessor: 'genre',
                filterable: true,
            },
            {
                Header: 'Format',
                accessor: 'format',
                filterable: true,
            },
            {
                Header: 'Running Time',
                accessor: 'running_time',
                filterable: true,
            },
            {
                Header: 'Age_Restriction',
                accessor: 'age_restriction',
                filterable: true,
            },
            {
                Header: 'Delete',
                accessor: 'delete',

            },
            {
                Header: 'Update',
                accessor: 'update',

            },
        ]

            
    return (
            <Wrapper>
                {showTable? <Table columns={columns} data={movies} /> : null}
            </Wrapper>
        )
    }
}

//export default MoviesList
