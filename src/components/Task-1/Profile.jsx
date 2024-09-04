import s from './Profile.module.css'

const Profile = ({
    name, 
    tag, 
    location, 
    image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png', 
    stats}) => {
return (
    <div className={s.card}>
        <div className={s.cardWrapp}>
            <img className={s.image}
            src= {image}
            alt="User avatar"
            />
            <p className={s.fullname}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.statsList}>
            <li className={s.statsItem}>
            <span className={s.stats}>Followers</span>
            <span className={s.followers}>{stats.followers}</span>
            </li>
            <li className={s.statsItem}>
            <span className={s.stats}>Views</span>
            <span className={s.followers}>{stats.views}</span>
            </li>
            <li className={s.statsItem}>
            <span className={s.stats}>Likes</span>
            <span className={s.followers}>{stats.likes}</span>
            </li>
        </ul>
    </div>
)}

export default Profile;