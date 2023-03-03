import "@/styles/global.css"
import { useState, useEffect, useContext } from 'react'
import { ethers } from 'ethers'

import GlobalContext from '@/components/Context/GlobalContext'

// Smart Contract Addresses
const SmartContractAddresses = require('@/pages/abis/SmartContracts.json')

// Compiled Contract ABIs
const SampleContractABI = require('@/pages/abis/SampleContract.sol/SampleContract.json')

const App = ({ Component, pageProps }) => {
  // Global Context Variables
  const [metamask, setMetamask] = useState(false)
  const [connected, setConnected] = useState(false)
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [connectedChainId, setConnectedChainId] = useState(null)
  const [requiredChainId, setRequiredChainId] = useState(process.env.NEXT_PUBLIC_CHAIN_ID)
  const [balance, setBalance] = useState(null)

  // SampleContract Data
  const [sampleContract, setSampleContract] = useState(null)
  const [myInt, setMyInt] = useState(null)
  const [myData, setMyData] = useState(null)
  const [isEnabled, setIsEnabled] = useState(null)

  // Establish wallet connection
  const connectWallet = async () => {
    try {
      let _provider = new ethers.providers.Web3Provider(window.ethereum, "any")
      let _accounts = await _provider.send('eth_requestAccounts', [])
      let _network = await _provider.getNetwork()
      let _sampleContract = new ethers.Contract(SmartContractAddresses.SampleContract,
                                                SampleContractABI.abi,
                                                _provider)

      setMetamask(true)
      setProvider(_provider)
      setAccount(_accounts[0])
      setConnectedChainId(_network.chainId)
      setBalance(await _provider.getBalance(_accounts[0]))
      setSampleContract(_sampleContract)
      setConnected(true)
    } catch (e) {
      setConnected(false)
      console.log(e)
    }
  }

  // Listen for metamask events
  useEffect(() => {
    window.ethereum.on('accountsChanged', () => {
      connectWallet()
    })

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      connectWallet,
      provider, setProvider,
      account, setAccount,
      connected, setConnected,
      connectedChainId, setConnectedChainId,
      requiredChainId, setRequiredChainId,
      metamask, setMetamask,
      balance, setBalance,
      sampleContract, setSampleContract,
      myInt, setMyInt,
      myData, setMyData,
      isEnabled, setIsEnabled
    }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default App
