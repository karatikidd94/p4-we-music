import { useParams } from "react-router-dom";
import MessagingForm from "../../components/MessagingForm/MessagingForm";
import MessageList from "../../components/MessageList/MessageList";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function WeArtistsDetailPage({ user, profiles, messages, setMessages }) {
    let { profileName } = useParams();
    // console.log("ArtistDetailPage profiles: ", profiles);
    // console.log("ArtistDetailPage messages: ", messages);
    

    let profile = profiles.find((prof) => prof.name === profileName);

    return (
        <>
            <br></br>
            <div className="details-page">
                <div>
                    {/* <img src={`${profile.img}`} alt="" /> */}
                    <ProfileCard profile={profile}/>
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