import App from '../App'

function Friends(props) {
    let myFriends = props.allFriends.map((friend, index) => {
        return <li key={index}>{friend}</li>
    })
    return (
        <div>
            <h1>Friends</h1>
            <h3>{myFriends}</h3>

        </div>

    )
}

export default Friends