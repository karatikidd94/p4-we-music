import { Link } from "react-router-dom"

export default function ProfileCard(props) {
    return (
        <>
            <Link to={`/artists/${props.profile.name}`}>
                <div 
                // className="item-card"
                style={{ backgroundImage: `url(${props.profile.img})` }}>
                    <div className="title">
                        <h1>{props.profile.name}</h1>
                        <h1>{props.profile.artist}</h1>
                        <h3>{props.profile.genre}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
}