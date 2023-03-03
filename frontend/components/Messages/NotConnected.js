import styles from '@/styles/Messages.module.css'

const NotConnected = () => {
    return (
        <div className={styles.connectionMsg}>
            <p className={styles.msg}>Not connected</p>
        </div>
    )
}

export {NotConnected}