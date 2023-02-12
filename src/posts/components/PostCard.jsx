import React from 'react'
import { Link } from 'react-router-dom'

export const PostCard = props => {
    return (
        <div className="col-12 col-md-4">
            <div className="card" key={props.id}>
                <h5>{props.title}</h5>
                <p>{props.id}</p>
                <p>{props.body}</p>
                <Link
                    id={props.id}
                    title={props.title}
                    body={props.body} to={`/post/${props.id}`}>
                    ver más
                </Link>
            </div>
        </div>
    )
}
