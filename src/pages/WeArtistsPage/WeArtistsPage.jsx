import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./WeArtistsPage.css";

export default function WeArtistsPage({ profiles }) {
    return (
        <>
            <h1>WeArtists</h1>
            <div className="container">
                {profiles.map((profile, idx) => {
                    return <ProfileCard key={profile.name} profile={profile} />
                })}
            </div>
        </>
    );
}