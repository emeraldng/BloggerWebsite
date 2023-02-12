import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, NavLink } from 'react-router-dom';
import "./PostView.scss";


export const PostView = () => {
  const params = useParams();
  const URL_IMG = "https://picsum.photos/id/";

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

        {
          isLoading ? (

            <h1>Cargando...</h1>

          ) : (
            <>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{postsData.title}</Breadcrumb.Item>
              </Breadcrumb>
              <div className="img_container" style={{ background: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url('${URL_IMG}${postsData.id}/700/300')` }}>
              <h1 className='mt-5 mb-5'>{postsData.title}</h1>
              </div>
              <div className="text-center body__post">
                
                <p>{postsData.body}</p>
              </div>
            </>
          )
        }
      </div>

    </>
  )
}
