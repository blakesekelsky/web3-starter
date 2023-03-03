import styles from '@/styles/SampleContractInteraction.module.css'
import {useState, useEffect, useContext } from 'react'
import {ethers} from 'ethers'
import GlobalContext from "@/components/Context/GlobalContext"

const SampleContractInteract = () => {
    const globalContext = useContext(GlobalContext)

    const setData = async () => {
        try {
            let signer = await globalContext.provider.getSigner()
            await (await globalContext.sampleContract.connect(signer).setData(stringVal)).wait()
            setStringVal('')
        } catch (e) {
            console.log(e)
        }
    }

    const readData = async () => {
        try {
            globalContext.setMyInt(await globalContext.sampleContract.myInt())
            globalContext.setMyData(await globalContext.sampleContract.myData())
            globalContext.setIsEnabled(await globalContext.sampleContract.isEnabled())
        } catch (e) {
            console.log(e)
            
        }
    }

    const toggle = async () => {
        try {
            let signer = await globalContext.provider.getSigner()
            await (await globalContext.sampleContract.connect(signer).toggle()).wait()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        readData()
    }, [toggle])

    const [stringVal, setStringVal] = useState('')

    const handleChange = (e) => {
        setStringVal(e.target.value)
    } 

    return (
        <div className={styles.container}>
            <div className={styles.above}>
                <strong className={styles.hint}>Read</strong><br />
                <button className={styles.btn} onClick={readData}>Refresh Contract Data</button>
                <p>myInt: {globalContext.myInt ? globalContext.myInt.toString() : 0}</p>
                <p>myData: {globalContext.myData ? globalContext.myData.toString() : ''}</p>
                <p>isEnabled: {globalContext.isEnabled ? 'true' : 'false'}</p>
            </div>
            <hr className={styles.hr} />
            <div className={styles.below}>
                <strong className={styles.hint}>Write</strong><br />
                <button className={styles.btn} onClick={toggle}>Toggle</button><br />
                <span>
                    <input value={stringVal} onChange={handleChange} placeholder="my data..."/>
                    <button className={styles.btn} onClick={setData}>Set myData</button>
                </span>
            </div>
        </div>
        
    )
}

export default SampleContractInteract