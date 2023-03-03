import {useContext} from 'react'
import styles from '@/styles/Messages.module.css'
import GlobalContext from "../Context/GlobalContext"

const WrongChain = () => {
  const globalContext = useContext(GlobalContext)

  return (
    <div className={styles.connectionMsg}>
      <p className={styles.msg}>{`Please switch to Chain ID: ${globalContext.requiredChainId}`}</p>
    </div>
  )
}

export {WrongChain}