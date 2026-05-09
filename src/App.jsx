import { useState } from "react";
import Form from "./components/form"
function App() {

    const [post, setPost] = useState([
        {
            id: 1,
            title: "primo",
            text: "primo testo"
        },
        {
            id: 2,
            title: "secondo",
            text: "secondo testo"
        }
    ]);

    return (
        <>
            <Form post={post} setPost={setPost}/>
            <div>
                {post.map((element) => (
                    <div key={element.id}>
                        <h1>{element.title}</h1>
                        <p>{element.text}</p>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default App
