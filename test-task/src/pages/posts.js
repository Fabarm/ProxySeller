import './posts.css';

const Posts = ({posts}) => {
    if(posts){
        return (
            <ul className="App">
                <h1>Posts List</h1>
                {posts.map(i =>
                    <li className='post' key={i.id}>
                        <p>{i.title}</p>
                        <hr style={{margin: "10px"}}/>
                        <p>{i.body}</p>
                    </li>)}
            </ul>
        );
    }else{
        return (
            <div className="App">
                <h1>Please select a user</h1>
            </div>
        )
    }

};

export default Posts;