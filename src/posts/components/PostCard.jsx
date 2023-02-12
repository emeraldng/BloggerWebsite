import React from 'react'
import { Link } from 'react-router-dom'

import "./PostCard.scss";


export const PostCard = props => {
    const URL_IMG = "https://picsum.photos/id/";

    return (
        <div className="col-12 col-md-6">
            <div className="card card__post mb-3" key={props.id} style={{ background: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url('${URL_IMG}${props.img}/700/300')` }}>
                <div>
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
        </div>
    )
}
