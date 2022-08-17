import { Link } from "react-router-dom"

export default function ProfileCard(props) {
    return (
        <>
            <Link to={`/artists/${props.profile.name}`}>
                <div className="card">
                    <div>
                        <div>
                            <img src={`${props.profile.img}`} alt="" />
                            <h1>Name: {props.profile.name}</h1>
                            <h1>Artist: {props.profile.artist}</h1>
                            <h3>Genre: {props.profile.genre}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}