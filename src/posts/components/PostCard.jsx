import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

import "./PostCard.scss";


export const PostCard = props => {
    const URL_IMG = "https://picsum.photos/id/";

    const { editionIcons } = props.id;

    // Assing value

    return (
        <div className="col-12 col-md-6">
            <Link className='card__link' id={props.id}
                title={props.title}
                body={props.body} to={`/post/${props.id}`}>
                <div className="card card__post mb-3" key={props.id} style={{ background: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url('${URL_IMG}${props.img}/700/300')` }}>
                    <div>
                        <h5>{props.title}</h5>
                        {/* <p>{props.id}</p> */}
                        <p>{props.body}</p>

                        <div className="d-flex icons_card">
                            {/* The current API does not contain the "CATEGORIES" property, so I have bound the I.D to a dummy category. Thus showing its corresponding label */}
                            {
                                (props.userId === 1 || props.userId === 10) &&
                                <a href="" className="tag">Travel</a>
                            }
                            {
                                (props.userId === 2 || props.userId === 9) &&
                                <a href="" className="tag">Lifestyle</a>
                            }
                            {
                                (props.userId === 3 || props.userId === 8) &&
                                <a href="" className="tag">Bussiness</a>
                            }
                            {
                                (props.userId === 4 || props.userId === 7) &&
                                <a href="" className="tag">Food</a>
                            }
                            {
                                (props.userId === 5 || props.userId === 6) &&
                                <a href="" className="tag">Work</a>
                            }


                            {/* If current userID is equal to userId post, the user can be updated. I set the current userId to "1" */}
                            {props.userId === 1 &&
                                <div className='d-flex'>
                                    <button className="btn btn_icon"><BsFillPencilFill /></button>
                                    <button className="btn btn_icon"><FaTrashAlt /></button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}
