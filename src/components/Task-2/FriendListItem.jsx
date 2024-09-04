import clsx from 'clsx';
import s from './FriendListItem.module.css'
const FriendList = ({friends}) => {
return (
    <ul className={s.cardList}>
        {friends.map(friend => (
            <li className={s.card}>
                <img className={s.image} src={friend.avatar} alt="Avatar" width="48" />
                <p className={s.name}>{friend.name}</p>
                <p className={clsx(s.isOnline, friend.isOnline ? s.green : s.red )}>{friend.isOnline ? "Online" : "Offline"}</p>
            </li>
        ))}
    </ul>

)}

export default FriendList;