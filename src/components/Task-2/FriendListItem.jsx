import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) =>{
    return (
        <li className={s.card}>
                <img className={s.image} src={avatar} alt="Avatar" width="48" />
                <p className={s.name}>{name}</p>
                <p className={clsx(s.isOnline, isOnline ? s.green : s.red )}>{isOnline ? "Online" : "Offline"}</p>
            </li>
    )
}

export default FriendListItem;