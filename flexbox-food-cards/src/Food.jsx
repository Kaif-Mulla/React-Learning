

const Food = (props) => {
    let {img, text}= props.el;
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        
        textAlign :'center'
    }}>
        <img
          src={img}
          alt={text}
          style={{
            height: '200px',
            width: '200px',
            borderRadius: '100px',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        />
        <p> <b>{text}</b> </p>
    </div>
  )
}

export default Food