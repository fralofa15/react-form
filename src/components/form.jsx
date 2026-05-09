function Form() {
    return (
        <div>
            <div>
                <input type="text" placeholder="Titolo" />
            </div>
            <div>
                <textarea rows={5} cols={30} placeholder="Commento"></textarea>
            </div>
            <button>Posta</button>
        </div>
    );
}
export default Form