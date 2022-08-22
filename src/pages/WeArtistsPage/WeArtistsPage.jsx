import "./WeArtistsPage.css";
import ArtistsCard from "../../components/ArtistsCard/ArtistsCard";


export default function WeArtistsPage({ user, profiles }) {
    return (
        <>
            <h1 className="align-ctr white-header">WeArtists</h1>
            <div className="container">
                {profiles.map((profile, idx) => {
                    if(profile.user != user._id) {
                        return <ArtistsCard key={profile.name} profile={profile} profiles={profiles}/>
                    } else {
                        
                    }
                })}
            </div>
        </>
    );
}