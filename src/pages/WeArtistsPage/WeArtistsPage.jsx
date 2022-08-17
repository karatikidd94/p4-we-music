import "./WeArtistsPage.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";


export default function WeArtistsPage({ user, profiles }) {
    return (
        <>
            <h1>WeArtists</h1>
            <div className="container">
                {profiles.map((profile, idx) => {
                    if(profile.user != user._id) {
                        return <ProfileCard key={profile.name} profile={profile} profiles={profiles}/>
                    } else {
                        
                    }
                })}
            </div>
        </>
    );
}