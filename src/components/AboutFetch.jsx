import  { useEffect, useState } from 'react'

function AboutFetch() {
  const [data,setData]=useState()

  useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>setData(data))
  },[])
  return (
    <>
      {
        data ? (<div>
          <h1>Title:{data.title}</h1>
          <p>Body:{data.body}</p>
    
        </div>) : (
            <p>loading...................</p>
        )
    }
    </>
  )
}

export default AboutFetch