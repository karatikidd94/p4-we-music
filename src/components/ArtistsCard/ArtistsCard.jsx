import { Link } from "react-router-dom"

export default function ArtistsCard(props) {
    // const image = URL.createObjectURL(props.profile.img);
    return (
        <>
            <Link to={`/artists/${props.profile.name}`}>
                <div className="card">
                    <div>
                        <div>
                            <img style={{ height: 200, width: 200 }} src={`${props.profile.img}`} alt="" />
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