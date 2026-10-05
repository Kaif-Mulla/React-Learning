import Card from "./Card"

let allData = [
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCIzrwPBMt-99B16y1g498yBoUoRin1TlP8_ZoL-BYQ&s=10",
        text : "Good Morning",
        content : "Every morning, you have two choices: continue to sleep with your dreams or wake up and chase them — Arnold Schwarzenegger"
    },
     {
        img : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        text : "Good Morning",
        content : "Every morning, you have two choices: continue to sleep with your dreams or wake up and chase them — Arnold Schwarzenegger"
    },
     {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCIzrwPBMt-99B16y1g498yBoUoRin1TlP8_ZoL-BYQ&s=10",
        text : "Good Morning",
        content : "Every morning, you have two choices: continue to sleep with your dreams or wake up and chase them — Arnold Schwarzenegger"
    }
]

const Container = () => {
  return (
    <div style={{height:'400px',border:'solid',display:'flex',alignItems:'center', 
    justifyContent:'space-between', padding:'20px',width:'1200px',borderRadius:'10px',backgroundColor:'lavender'}}>
        {
            allData.map ((el) =>{
                return <Card el = {el}/>
            })
        }

    </div>
  )
}

export default Container