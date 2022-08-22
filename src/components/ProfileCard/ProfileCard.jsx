import { Link } from "react-router-dom"

export default function ProfileCard({ profile }) {
    return (
        <>
            <img src={`${profile.img}`} alt="" />
            <h1>{profile.name}</h1>
            <h1>Artists Name: {profile.artist}</h1>
            <h3>Genre: {profile.genre}</h3>
            <a href={`${profile.spotifyLink}`} target="_blank" rel="noreferrer">
                <button>Spotify</button>
            </a>
        </>
    );
}