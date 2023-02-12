import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Link, NavLink } from 'react-router-dom';


export const PostView = () => {
  const params = useParams();
  //const postId = params.id;
  console.log(params.id);

  const [isLoading, setIsLoading] = useState(true);
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);



  return (
    <>
      <div className="container pt-5">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{postsData.title}</Breadcrumb.Item>
        </Breadcrumb>
        {
          isLoading ? (

            <h1>Cargando...</h1>

          ) : (
            <><div>View Post</div><h2>{postsData.title}</h2><p>{postsData.body}</p></>
          )
        }
      </div>

    </>
  )
}
