import "./WeArtistsPage.css";
// import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
// import * as profilesAPI from '../../utilities/profiles-api';

export default function WeArtistsPage({ user, profiles }) {
    console.log("WeArtistsPage profiles: ", profiles);
    // console.log("WeArtistsPage user: ", user);
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