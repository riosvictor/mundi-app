import { useRouter } from 'next/router'
import Image from 'next/image'
import useSWR from 'swr'
import Header from '../../components/Header'
import { Data } from '../../server/local'
import styles from './Place.module.css'
import { Tooltip } from '@chakra-ui/tooltip'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Place = () => {
  const router = useRouter()
  const { local } = router.query

  const { data, error } = useSWR<Data>(`/api/place/${local}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Header routerBack="/" />
      <div className={styles.banner}>
        <Image
          src={data.urlPlaceBanner} 
          alt="banner" 
          layout="fill"
        />

        <div className={styles.title}>
          {data.title}
        </div>
      </div>

      <main className={styles.mainContainer}>
        <span>
          {
            data.text.split("\n").map(paragrahp => 
              <p key={paragrahp.length}>{paragrahp}</p>)
          }
        </span>

        <div>
          <span>
            <strong>{data.countries}</strong>
            <br/>
            países
          </span>
          
          <span>
            <strong>{data.languages}</strong>
            <br/>
            línguas
          </span>
          
          <span>
            <strong>{data.citiesMoreVisited}</strong>
            <br/>
            <Tooltip label="Hover me" fontSize="md">
              cidades +100
            </Tooltip>
            <Image src="/Info.svg" alt="Icon" width={16} height={16} />
          </span>
        </div>
        
      </main>
    </>
  )
}

export default Place