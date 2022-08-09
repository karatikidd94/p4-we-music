import ProfileForm from "../../components/ProfileForm/ProfileForm";

export default function MeProfilePage({ user }) {

    return (
        <main>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <ProfileForm user={user}/>
        </main>
    )
}