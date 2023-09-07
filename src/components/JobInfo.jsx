import Duties from './Duties'
import { v4 as uuidv4 } from 'uuid'

const JobInfo = ({ curruntJob }) => {
  return (
    <article className="job-info">
      <h3>{curruntJob.title}</h3>
      <span className="job-company">{curruntJob.company}</span>
      <p className="job-date">{curruntJob.dates}</p>
      {curruntJob.duties.map((duty) => {
        return <Duties duty={duty} key={uuidv4()} />
      })}
    </article>
  )
}
export default JobInfo
