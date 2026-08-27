import './App.css';

const MemeCard = function ({data}) {
    console.log(data)

    const {url, author, title} = data
    return (
        <>
          <div className="memes-wrapper">
            <img className="img-cus" alt={title} src={url} />
            <p>{author}</p>
          </div>
        </>
    )
}

export default MemeCard;