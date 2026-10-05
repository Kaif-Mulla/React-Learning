
import SuperheroCard from './SuperheroCard';

const SuperheroContainer = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',background:'yellow'}}>
        <SuperheroCard imgAddress="https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp" name="ironman"/>
        <SuperheroCard imgAddress ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0MISV7-9CDbxC2gcXI--ZZo5DiqxqLXXXTyI0FMZ96pXPt7bLx0AXes&s=10" name="batman"/>
        
        </div>
  )
}

export default SuperheroContainer