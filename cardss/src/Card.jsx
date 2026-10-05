

const Card = ({el}) => {
  return (
    <div style={{height:'350px',padding:'10px',width:'300px',border:'solid',display:'flex',
    flexDirection:'column',alignItems:'center',borderRadius:'20px',backgroundColor:'white'}}>
        <img style={{width:'250px',borderRadius:'20px'}} 
        src={el.img} alt="" />
        <h2>{el.text}</h2>
        <p>{el.content}</p>
        <button style={{width:'100px'}}>Click</button>

    </div>
  )
}

export default Card