import { useParams } from "react-router-dom";
import MessagingForm from "../../components/MessagingForm/MessagingForm";
import MessageList from "../../components/MessageList/MessageList";
import DetailCard from "../../components/ProfileCard/ProfileCard";
import "./WeArtistsPage.css"

export default function WeArtistsDetailPage({ user, profiles, messages, setMessages }) {
    let { profileName } = useParams();
    
    let profile = profiles.find((prof) => prof.name === profileName);

    return (
        <>
            <br></br>
            <div className="details-page">
                <div className="profile-card">
                    {/* <DetailCard profile={profile}/> */}
                    <img src={`${profile.img}`} alt="" />
                    <h1>{profile.name}</h1>
                    <h1>Artist Name: {profile.artist}</h1>
                    <h2>Genre: {profile.genre}</h2>
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