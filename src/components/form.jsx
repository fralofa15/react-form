import { useState } from "react"
function Form(props) {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleTextChange(event) {
        setText(event.target.value)
    }

    function handleNewPost(event) {
        event.preventDefault();

        const newPost = {
            id: props.post.length + 1,
            title: title,
            text: text
        }
        props.setPost([...props.post, newPost]);

        setTitle("");
        setText("");
    }

    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Titolo"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <textarea
                    rows={5} cols={30}
                    placeholder="Commento"
                    value={text}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <button onClick={handleNewPost}>Posta</button>
        </form>
    );
}
export default Form