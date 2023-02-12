import { useState, useEffect } from 'react'
import { PostCard } from './PostCard';

export const PostGrid = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [postsData, setPostsData] = useState(null);
    const [imgsData, setImgsData] = useState([]);
    


    useEffect(() => {
        // Using promises to fetch those 2 APIS's, using Promise.all to fetch at the same time
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            // gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k (no)
            // CG2AjMqYI-8l5xXZgxnnqWNYe890wGAA8zJQMItrwy4
            fetch("https://api.unsplash.com/photos/random?client_id=CG2AjMqYI-8l5xXZgxnnqWNYe890wGAA8zJQMItrwy4"),
        ])
            .then((responses) => Promise.all(responses.map((r) => r.json())))
            .then((data) => {
                // Once the data is retraived, I store at the useState array
                // setPostsData(data[0].slice(0, 10));
                setPostsData(data[0]);
                console.log(data[0].slice(0, 10));
                setImgsData([data[1].urls]);
                // Our loading is seted to false to hide it.
                setIsLoading(false);

            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });


    }, []);
    


    return (
        <div className="app container">
            <div className="row">
                
                {
                    isLoading ? (
                        <h1>Cargando...</h1>
                    ) :

                        postsData.map(i => (
                            <>

                                <PostCard
                                    key={i.id}
                                    id={i.id}
                                    title={i.title}
                                    body={i.body}
                                    img={i.id}
                                    userId={i.userId}
                                />
                            </>
                        ))
                }
            </div>
        </div>
    );
}
