import Avatar from 'react-avatar'
import styles from '../css/Codeboard.module.css'

const User = ({ username }) => {
  return (
    <div className={styles.avt}>
      <Avatar className={styles.bold} name={username} round="0.3rem" color="#54426B" size="2.1rem"/>
      <span>{username}</span>
    </div>
  )
}

export default User