// import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import UserMessageList from "../../components/UserMessageList/UserMessageList";


export default function MeProfilePage({ user, profile, setProfile, messages }) {
    console.log("ProfilePage Profile: ", profile);

    return (
        <main>
            {
                 profile ?
                <>
                    <br />
                    <img src={`${profile.img}`} alt="" />
                    <h1>{profile.name}</h1>
                    <h1>Artist Name: {profile.artist}</h1>
                    <h2>Genre: {profile.genre}</h2>
                    <h2>Spotify Link: {profile.spotifyLink}</h2>
                    <UserMessageList user={user} messages={messages} profile={profile} />
                </>
                :
                <>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <ProfileForm user={user} profile={profile} setProfile={setProfile} />
                </>
            }
        </main>
    )
}