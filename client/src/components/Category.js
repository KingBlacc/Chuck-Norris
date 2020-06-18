import React from 'react';
import {Link} from 'react-router-dom';

export default function Category({title}) {
    return (
        <div
            className="card text-center p-3 col-md-3 bg-dark mx-3 my-3">
                <Link to={`/random/${title}`} className="card-body text-light">{title.toUpperCase()}</Link>
        </div>
    )
}