import { Link } from 'react-router-dom';
import Header from '../Header';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';

import TodayIcon from '@mui/icons-material/Today';
const Third = () => {
  return (
    <div className='h-screen'>
    <Header />
    <div className='container'>
        <div className='bg-white p-5 mt-5 rounded-xl'>
           <Link to={'/second'}><KeyboardBackspaceIcon sx={{ fontSize: "40px", cursor: "pointer", padding: "5px", borderRadius: "50%", color: "#fda839" }} /></Link>
          
         <div className='status'>
            <p className='text-red-400 text-end font-bold'>Not Completed</p>
     
         </div>
    

<div className='Brad_allen_section mt-8'>
<div className='flex justify-between'>
    <p className='font-bold text-xl'>Brad ALLen</p>
    <p><AddIcCallIcon sx={{ color:"#478e00"}}></AddIcCallIcon>   <InsertCommentIcon sx={{color:"#6fc1e9"}}></InsertCommentIcon>  </p>
</div>


<div className='flex items-center justify-between mt-5'>

    <div>
        <p className='text-grey-500 font-semibold'> <TodayIcon sx={{color:"grey"}}></TodayIcon> Mar 31</p>
    </div>
    
    <div>
    <p className='text-grey-500 font-semibold'><WatchLaterIcon  sx ={{color:"#fda839"}}></WatchLaterIcon> 9:30 to 11:00 </p>
    </div>
    
    <div>
       <div className='flex items-center gap-5'>

       <p className='font-semibold'><b>Address</b> <span className='text-grey-500 font-semibold'>:28446 Brach Dr, SLC</span></p>
       <p><SendIcon sx={{bgcolor:"#2ab2eb", color:"#fff" ,borderRadius:'100%', width:'35px',lineHeight:'30px' , height:'35px', padding:'7px'}}></SendIcon></p>
       </div>
    </div>
    {/* partner */}
    <div>

        <div className='flex gap-5 items-center mt-3'>
        <p><b>Partners(s)</b> <span className='text-grey-500 font-semibold'>Kimber Stovall</span></p>
        <p><AddIcCallIcon sx={{ color:"#478e00"}}></AddIcCallIcon>   <InsertCommentIcon sx={{color:"#6fc1e9"}}></InsertCommentIcon>  </p>
        </div>
    </div>
    
    <div className='mt-3'>

    <p><b>Approx.Pay</b>: <span className='text-red-400 font-semibold'> $60.70</span></p>
    </div>
</div>




</div>


<hr className='border-dashed border-gray-500  mt-5' />


{/* buildinginformation */}
<div className="building mt-4 flex  justify-between">
   <div>
    <div><p className='font-bold '>Building Information: <span className='text-[#5e72f7] font-bold'>(Take Keys)</span> </p>
    <p>SF(2000),Beds(2),Baths(2),Take Vaccum Pets(+3),Clean Rafting(5),Flooring(Carpet,Hardwood)</p>
    </div>
   </div>


   <div>
      <div>
        <p className='font-bold'>Cleaning Types:</p>
        <p className='text-grey-500'>General Clean Plus</p>
      </div>
   </div>
   <div>
      <div>
        <p className='font-bold'>Deep Cleaning Items</p>
      
      <ol>
        <li>Kitch Cupboards (Outsides Only)</li>
        <li>Bath Cupboards (Outsides Only)</li>
        <li>Oven</li>
        <li>Refrigerator</li>

      </ol>
      </div>
   </div>
</div>




            <Link to={'/fourth'} className='flex items-center justify-center  mt-10'>
                <button type="submit" className="bg-yellow-900 text-white text-xs font-semibold px-12 py-3 rounded-lg">
                    Next
                </button>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Third
