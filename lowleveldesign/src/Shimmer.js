import './App.css';

const Shimmer = () => {
    return Array(20).fill(0).map((n, i) => (
        <div key={i} className="memes-wrapper">
            <div className="img-cus grey-back"></div>
        </div>
    ))
}

export default Shimmer;