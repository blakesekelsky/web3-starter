import { useContext } from 'react'
import styles from '@/styles/Messages.module.css'
import GlobalContext from "../Context/GlobalContext"
import web3 from 'web3'

const Successful = () => {
    const globalContext = useContext(GlobalContext)

    return (
        <div className={styles.connectionMsg}>
            <p className={styles.msg}>{globalContext.account.slice(0, 6) + '...' + globalContext.account.slice(36, 42)}</p>
            <p className={styles.msg}>{
                parseFloat(web3.utils.fromWei(globalContext.balance.toString(), 'ether')).toFixed(4) + ' eth'
                }</p>
        </div>
    )
}

export {Successful}