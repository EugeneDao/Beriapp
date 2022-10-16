const Profile =()=>{
    return (
    <div className="user-profile">
        <img className="avatar"></img>
        <h1>{displayName}</h1>
        <h2>Current Balance: {balance}</h2>
    </div>
    )
}

export default Profile