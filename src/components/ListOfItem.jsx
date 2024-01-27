
function ListOfItem() {
  const items = [
    1,2,3,4,5,6,7,8
  ]
  return (
    <>
      <ul>
        {items.map((item,i) => {
          return <li key={i}>{item}</li>
        })}
    </ul>
    
    
    </>
  )
}

export default ListOfItem