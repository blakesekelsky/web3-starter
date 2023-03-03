import { useState, useContext } from 'react'
import Link from 'next/link'
import FlashMessage from 'react-flash-message'
import headerStyles from '@/styles/Header.module.css'

import GlobalContext from './Context/GlobalContext'

const Header = (props) => {
    const globalContext = useContext(GlobalContext)

    const [copied, setCopied] = useState(false)
    function copyAddress() {
        if (globalContext.connected) {
            navigator.clipboard.writeText(globalContext.account)
            setCopied(true)

            setTimeout(() => setCopied(false), 750)
        }
    }

    return (
        <nav className={headerStyles.navbar}>
            <Link className={headerStyles.brandLink} href="/">Web3-Starter</Link>
            <ul>
                <li><Link className={headerStyles.link} href="/">Home</Link></li>
                <li><Link className={headerStyles.link} href="/contract">Contract</Link></li>
            </ul>
            {globalContext.connected ? (
                <div>
                    
                    <button className={headerStyles.connectButton} onClick={copyAddress}>
                        {copied ? (
                            <FlashMessage duration={750}>
                                {'copied!'}
                            </FlashMessage>
                        ) : (globalContext.account.slice(0, 6) + '...' + globalContext.account.slice(36, 42))}
                    </button>
                </div>
            ) : (
                <button className={headerStyles.connectButton} onClick={globalContext.connectWallet}>
                    Connect Metamask
                </button>
            )}
        </nav>
    )
}

export {Header}

