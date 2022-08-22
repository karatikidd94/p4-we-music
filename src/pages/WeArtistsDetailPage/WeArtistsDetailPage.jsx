import { useParams } from "react-router-dom";
import MessagingForm from "../../components/MessagingForm/MessagingForm";
import MessageList from "../../components/MessageList/MessageList";
import "./WeArtistsDetailPage.css"

export default function WeArtistsDetailPage({ user, profiles, messages, setMessages }) {
    let { profileName } = useParams();
    
    let profile = profiles.find((prof) => prof.name === profileName);

    return (
        <>
            <br></br>
            <div className="details-page">
                <div className="profile-card">
                    <img style={{ height: 200, width: 200 }} src={`${profile.img}`} alt="" />
                    <h1>{profile.name}</h1>
                    <h1>Artist Name: {profile.artist}</h1>
                    <h2>Genre: {profile.genre}</h2>
                    <h2>Email: </h2>
                    <a href={`${profile.spotifyLink}`} target="_blank" rel="noreferrer">
                        <button>Spotify</button>
                    </a>
                </div>
                <div>
                    <div>
                        <MessageList user={user} messages={messages} setMessages={setMessages} profile={profile} />
                    </div>
                    <div>
                        <MessagingForm user={user} profile={profile} messages={messages} setMessages={setMessages} />
                    </div>
                </div>
            </div>
        </>
    );
}