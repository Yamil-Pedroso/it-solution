import React from 'react'
import { useRouter } from 'next/router'

const searchFound = () => {
  const router = useRouter()
  const { search } = router.query
  return (
    <div>searchFound ja ja ja!
      <h1>Result: {search}</h1>
    </div>
  )
}

export default searchFound