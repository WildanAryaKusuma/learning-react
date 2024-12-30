import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin()

    return (
        <>
            <div>
                Profile Page
            </div>
            <div>Username : {username}</div>
        </>
    )
}

export default ProfilePage