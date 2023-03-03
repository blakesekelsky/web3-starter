import { Header } from "@/components/Header"
import { RequireSigner } from '@/components/RequireSigner'
import { Successful } from "@/components/Messages/Successful"

const Home = () => {
  return (
    <>
      <Header />
      <RequireSigner>
        <Successful />
      </RequireSigner>
    </>
  )
}

export default Home
