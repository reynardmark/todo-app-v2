import { useRouteError } from "react-router-dom"


export default function NotFound() {
  const error = useRouteError();
  console.log(error)


  return (<div>
    <p>{error.statusText}</p>
    <p>Error: {error.status}</p>
  </div>)
}