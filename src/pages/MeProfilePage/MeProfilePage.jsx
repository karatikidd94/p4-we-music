
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import UserMessageList from "../../components/UserMessageList/UserMessageList";


export default function MeProfilePage({ user, profile, setProfile, messages }) {

    return (
        <main>
            {
                 profile ?
                <>
                    <br />
                    <div className="profile-page">
                        <div className="profile-card">
                            <ProfileCard profile={profile} />
                        </div>
                        <div>
                            <UserMessageList user={user} messages={messages} profile={profile} />
                        </div>
                    </div>
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