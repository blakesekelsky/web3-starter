import { Header } from "@/components/Header"
import { RequireSigner } from '@/components/RequireSigner'
import SampleContractInteract from "@/components/SampleContractInteract"

const contract = () => {
  return (
      <>
          <Header />
          <RequireSigner>
              <SampleContractInteract />
          </RequireSigner>
      </>
  )
}

export default contract