import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {fetchJoke} from '../actions';
import { Link } from 'react-router-dom';

 class Joke extends Component {

    componentDidMount(){
        let {category} = this.props.match.params;
        this.props.fetchJoke(category);
    }

    render() {
        const {loading, error, random, category} = this.props.jokes;

        if(loading) return <h3>Loading</h3>

        if(error){ 
            console.log(category)
            return <h3>Oops...</h3>
        }

        return (
            <Fragment> 
                <div>
                    <div
                        className="card text-center h4 bg-light mx-3 my-3">
                            <div className="card-body text-dark">{random}</div>
                    </div>
                    <Link to='/' className='btn btn-dark'>Back</Link>
                </div>
            </Fragment>
        )
    }
}


export default connect(({jokes}) => {
    return {
        jokes
    }
}, {fetchJoke})(Joke)