function Article() {
    const article = [
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
    ];

    return (
        <div>
            {article.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </div>
            ))
            }
        </div>
    );
}
export default Article