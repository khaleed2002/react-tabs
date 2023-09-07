import { useEffect, useState } from 'react'
import BtnContainer from './components/BtnContainer'
import JobInfo from './components/JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobsInfo, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [curruntJob, setCurruntJob] = useState({})

  const fetchData = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    setData(data)
    setCurruntJob(data[0])
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData(url)
  }, [])

  if (isLoading) {
    return <div className="loading"></div>
  }
  const handleCurruntJob = (id) => {
    setCurruntJob(jobsInfo.find((jobInfo) => jobInfo.id ===id))
  }
  return (
    <section className="jobs-center">
      <BtnContainer jobsInfo={jobsInfo} handleCurruntJob={handleCurruntJob} />
      <JobInfo curruntJob={curruntJob} />
    </section>
  )
}
export default App
