import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Category from './Category';
import {fetchCategories} from '../actions';

class Categories extends Component {

    componentWillMount(){
        this.props.fetchCategories();
    }

    render() {
        const {loading, error, categories} = this.props.jokes;
        if(loading){
            return <h3 className='text-dark'>Loading</h3>
        }

        if(error){
            return <h3 className='text-danger'>Oops...</h3>
        }

        if(categories){
            if(categories.length < 1){
                return <h3 className='text-danger'>Oops...</h3>;
            }
            return <ul className='row'>
                {
                    categories.map(category => (
                        <Category 
                            key={category}
                            title={category}/>
                    ))
                }
            </ul>
        }

        return (
            <Fragment>
                    {
                        categories === null || categories === undefined ?
                        <h3 className='text-danger'>Oops there's nothing to show rn...</h3>
                        : 
                        null
                    }
            </Fragment>
        )
    }
}

export default connect(({jokes}) => {
    return {
        jokes
    }
}, {fetchCategories})(Categories)