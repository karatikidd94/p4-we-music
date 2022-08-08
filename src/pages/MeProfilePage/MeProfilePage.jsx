import { checkToken } from '../../utilities/users-service'

export default function MeProfilePage({ user }) {
    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <main>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
        </main>
    )
}