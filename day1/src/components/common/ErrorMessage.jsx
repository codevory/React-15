
const ErrorMessage = ({title,error,onRetry}) => {
  return (
   <div className="error-container">
        <h3>{title}</h3>
        <p>{error}</p>
        <button onClick={onRetry}>Try Again</button>
      </div>
  )
}

export default ErrorMessage
