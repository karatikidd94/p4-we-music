import { Link } from "react-router-dom"

export default function DetailCard(props) {
    return (
        <>
            <div>
                <div>
                    <div>
                        <img src={`${props.profile.img}`} alt="" />
                        <h1>{props.profile.name}</h1>
                        <h1>{props.profile.artist}</h1>
                        <h3>{props.profile.genre}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}