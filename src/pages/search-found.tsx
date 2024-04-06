import React from 'react'
import { useRouter } from 'next/router'

const searchFound = () => {
  const router = useRouter()
  const { search } = router.query
  return (
    <div>
       <h2>
        Hola, soy la página de búsqueda y he encontrado lo siguiente:
       </h2>
      <h1>Result: {search}</h1>
    </div>
  )
}

export default searchFound