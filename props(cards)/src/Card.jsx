

const Card = (props) => {
  let {title,body} = props.el;
  return (
    <div style={{height:'250px',border:'solid',width:'300px',
      borderRadius:'20px'
    }}>
      <h2>{title}</h2>
      <p>{body}</p>

    </div>
  )
}

export default Card