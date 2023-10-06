import { useNavigate } from 'react-router-dom'
import './category-item.style.scss'

const CategoryItem = ({category}) => {
   
    const navigate = useNavigate() 
   
   return (
    <div className='category-container' onClick={()=>navigate(`shop/${category.title}`)}  >
        <div className='background-image' style={{
            backgroundImage:`url(${category.imageUrl})`
        }}/>
        
        <div className='category-body-container'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
)}

export default CategoryItem


