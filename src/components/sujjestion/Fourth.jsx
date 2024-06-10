

import { Link } from 'react-router-dom';
import Header from '../Header';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Fourth = () => {
    return (
        <div className='h-screen'>
            <Header />
            <div className='container '>
                <div className='bg-white p-5 mt-5 rounded-xl mx-auto'>
                   <Link to={'/third'}><KeyboardBackspaceIcon sx={{ fontSize: "40px", cursor: "pointer", padding: "5px", borderRadius: "50%", color: "#fda839" }} /></Link>
                  
                    <div>
                             <ul className='list-disc once_list'>
                                <li className='text-grey-500 font-semibold'>Once you have brought in all your supplies and read the details carefully, click on the Start Job button</li>
                                <li className='text-grey-500 font-semibold'>Once you click the Start Job button, your timer will begin.</li>
                             </ul>
                  
                      
                    </div>
                    <div className='ps-2 mt-3'>
                    <label className='text-grey-500 font-semibold' htmlFor="vehicle1 ">All needed supplies have been brought into the property</label>
                    <input className='ms-2  checkbox_class' type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    
                    </div>
                    
                    <div className='ps-2 mt-3'>
                    <label className='text-grey-500 font-semibold' htmlFor="vehicle2">All details have been read</label>
                    <input className='ms-2 checkbox_class' type="checkbox" id="vehicle2" name="vehicle1" value="Bike"/>
                    
                    </div>

                    <div className='text-center mt-5'>
                  <button className='btn_start'>Start Job</button>
                    </div>
                    
                    <Link to={'/fifth'} className='flex items-center justify-center  mt-10'>
                        <button type="submit" className="bg-yellow-900 text-white text-xs font-semibold px-12 py-3 rounded-lg">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fourth;