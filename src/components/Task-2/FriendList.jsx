import s from './FriendList.module.css'
import FriendListItem from './FriendListItem';
const FriendList = ({friends}) => {
return (
    <ul className={s.cardList}>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>

)}

export default FriendList;