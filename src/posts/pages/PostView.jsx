import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <div>View Post</div>
      <h2>{postsData.title}</h2>
      <p>{postsData.body}</p>
    </>
  )
}
