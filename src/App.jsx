import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const url = 'https://openapi.programming-hero.com/api/all'
const countriesPromise = fetch(url)
  .then(res => res.json())


function App() {

  return (
    <>
      <Suspense fallback={<p>Nadir vai Loading...</p>}>
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
    </>
  )
}

export default App
