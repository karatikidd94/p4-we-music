import "./WeArtistsPage.css";
// import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
// import * as profilesAPI from '../../utilities/profiles-api';

export default function WeArtistsPage({ profiles }) {
    // const [profiles, setProfiles] = useState([]);

    // useEffect(function() {
    //     async function getProfiles() {
    //         const profiles = await profilesAPI.getAll();
    //         setProfiles(profiles);
    //     }
    //     getProfiles()
    // }, []);

    // console.log("ArtistsPage profiles: ", profiles);

    return (
        <>
            <h1>WeArtists</h1>
            <div className="container">
                {profiles.map((profile, idx) => {
                    return <ProfileCard key={profile.name} profile={profile} profiles={profiles}/>
                })}
            </div>
        </>
    );
}