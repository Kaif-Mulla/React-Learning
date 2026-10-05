

const Naturecard = (props) => {
  return (
    <div style={{width:'320px',border:'solid'}}>
        <img height ='200px' src ={props.img}/>
        <h2><b>{props.name}</b></h2>
        <p>{props.content}</p>
        <button style={{alignItems : "center"}}>Explore</button>

    </div>
  )
}

export default Naturecard