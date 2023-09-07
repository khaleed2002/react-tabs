import { BiSolidChevronsRight } from 'react-icons/bi'
const Duties = ({ duty }) => {

  return (
    <div>
      <div className="job-desc">
        <BiSolidChevronsRight className="job-icon" />
        <p>{duty}</p>
      </div>
    </div>
  )
}
export default Duties
