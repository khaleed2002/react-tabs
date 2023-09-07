import { useState } from 'react'

const BtnContainer = ({ jobsInfo, handleCurruntJob }) => {
  const [active, setActive] = useState(jobsInfo[0].id)
  const handleActiveButton = (id) => {
    setActive(id)
    handleCurruntJob(id)
  }
  return (
    <div className="btn-container">
      {jobsInfo.map((jobInfo) => {
        return (
          <button
            className={jobInfo.id===active ? 'job-btn active-btn' : 'job-btn'}
            key={jobInfo.id}
            onClick={() => {
              handleActiveButton(jobInfo.id)
            }}
          >
            {jobInfo.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
