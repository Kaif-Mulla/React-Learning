import Food from './Food'
let allData = [
    {
        img : "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
        text :"Biryani"

    },
    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwOQB3LpoC565BmmFHBZNsB1eVX29K-nVFt2MTpBQ9pu6rMZ_81GVJ4JM&s=10',
        text:'PanCake'
    },
    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnCHBilTn9jMLJqemKkq5f04MIV64Nis3v-aXny7C6C-vxwou_h5KlKrf&s=10',
        text :'Pizza'
    },
    {
        img:'https://www.tomatoblues.com/wp-content/uploads/2022/08/vegan-masala-chai-3.jpg',
        text :'Tea'
    },
    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpYzqZLEXxwpzeD942NoSYI-xhZWWujpKuSLqHIhoeStD7SBJcrDciLc&s=10',
        text :'Burger'
    },
    {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Bff8Q9FzVcDl162sjIevH0ZY8MnIHOEU_2kIyaQkQw&s=10",
        text:"Pasta"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7h6GHsNYY74-60bzeaqDpjpK2fEIh6od8nzMn6JQ3w&s=10",
        text :'Dosa'
    },
    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3biLSxML2qlUGrROfAAoKS0NSE5knaK8yLF8H3IO1ign3UAi6oEpRx4&s=10',
        text:'Salad'
    },
    {
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3RnlgjhF-SvhzCYIcby9ooTSQ7d9--F-UfnS-IUdJA&s=10',
        text :'Uttapa'
    },
    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_XuebdPialIJF-goTsBANLsthc7tDFljh7ErVSRYAg&s=10',
        text:'Idli'
    },
    {
        img : 'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg',
        text :'Vada-Pav'
    },

    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRb8kmFnfeRSjB9wN_Ye0k17mTO0mLRux8uagmXBRCw&s=10',
        text :'Chicken Kebab'
    },

    
    {
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUF8pNH1v_-tuNcnz41utPQehVB-VrJW-DlfQrgWJHA&s=10',
        text :'Deserts'
    },

    {
        img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Pfsncwr1d_rW0dpvbJicI1MNH1SsazEENsX3sbCgx9zFC5SRWcT3mEJP&s=10',
        text :'Mojito'
    },

]
const FoodData = () => {
  return (
    <div style={{display:'flex',
    flexWrap:'wrap',
    gap:'100px',width:'1700px', 
    padding :'20px'}}>
        {
            allData.map((el) =>{
                return <Food el = {el}/>

            })
        }
    </div>
  )
}

export default FoodData