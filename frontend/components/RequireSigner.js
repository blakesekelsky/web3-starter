import { useContext } from 'react'
import GlobalContext from '@/components/Context/GlobalContext'

import { WrongChain } from '@/components/Messages/WrongChain'
import { NotConnected } from '@/components/Messages/NotConnected'

const RequireSigner = (appContent) => {
    const globalContext = useContext(GlobalContext)
    
    return (
        <>
            {globalContext.connected ? (
                <>
                    {globalContext.connectedChainId == globalContext.requiredChainId ? (
                        <>{appContent.children}</>
                    ) : (
                        <WrongChain />
                    )}
                </>
            ) : (
                <NotConnected />
            )}
        </>
    )
}

export { RequireSigner }