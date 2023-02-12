import { useState, useEffect } from 'react'
import { PostCard } from './PostCard';

export const PostGrid = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [postsData, setPostsData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.slice(0, 10));
                setPostsData(data.slice(0, 10));
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
        <div className="App">
            <div className="row">
            {
                postsData.map(post => (
                    <>
                       
                        <PostCard  
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        />
                    </>
                ))
            }
                
            </div>
           
           
        </div>
    );
}
