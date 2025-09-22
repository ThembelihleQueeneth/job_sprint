import '../../styles/Spinner.css'
import spinner from '../../assets/arrows-spin-solid-full.svg'


export const SpinnerLoader = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="Loading..." className="spinner" />
      <p>Loading... Please wait</p>
    </div>
  )
}
