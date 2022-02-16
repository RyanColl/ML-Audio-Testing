import Link from 'next/link'
import { AppProvider } from '../context/AppContext'
const IndexPage = () => {
  const {state, dispatch} = React.useContext(AppProvider)
  fetch('/api/audio').then(res=>res.json())
    .then(({data}) => {
      // here we receive data from api
    })
    .catch(e => console.log(e))
  return (
    <>
      <h1 className='text-info'>HOME</h1>
      <h1 className='text-warning'>Welcome to NextJs with <b className='text-success'>Context</b> and <b className='text-primary'>Bootstrap</b></h1>
      <button className='btn btn-primary'>Button</button>
      <button className='btn btn-success'>Button</button>
      <button className='btn btn-warning'>Button</button>
      <button className='btn btn-danger'>Button</button>
      <button className='btn btn-info'>Button</button>
    </>
  )
}

export default IndexPage
