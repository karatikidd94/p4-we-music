import { useParams } from "react-router-dom";
// import { profiles } from "../WeArtistsPage/WeArtistsPage"

export default function WeArtistsDetailPage({ profiles }) {
    let { profileName } = useParams();
    console.log("ArtistDetailPage profiles: ", profiles);

    let profile = profiles.find((prof) => prof.name === profileName);

    return (
        <>
            <br></br>
            <div>
                <img src={`${profile.img}`} alt="" />
                <h1>{profileName}</h1>
            </div>
        </>
    );
}