import { useParams } from "react-router-dom";

export default function WeArtistsPage({ profiles }) {
    let { profileName } = useParams();

    let profile = profiles.find((prof) => prof.name === profileName);

    return (
        <>
            <br></br>
            <div>
                <img src={`${profile.img}`} alt="" />
                <h1>{profile.name}</h1>
            </div>
        </>
    );
}