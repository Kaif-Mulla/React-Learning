

const SuperheroCard = (props) => {
  return (
    <div style={{border:'solid',width:'350px'}}>
        <img height='200' src={props.imgAddress} alt="" />
        <h2>{props.name}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus tempora consequuntur, aliquid perferendis delectus ullam facilis voluptatem totam sequi adipisci expedita a voluptatibus nostrum suscipit inventore rem. Id, sunt?</p>
    </div>
  )
}

export default SuperheroCard