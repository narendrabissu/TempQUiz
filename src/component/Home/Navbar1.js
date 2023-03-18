import React,{useState} from 'react'
import logo from "./images/logo.png"




const Navbar1 = () => {
  const [isCollapsed,setIsCollapsed] = useState(true);
  
  const toggleCollapse = () =>{
    setIsCollapsed(!isCollapsed);
  };
  console.log(isCollapsed);
  return (
    <>
    <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">

      <div class="flex justify-between items-center">
        <div class = "flex justify-start ">
        <a href="" class="font-bold text-xl text-indigo-600 "><img style = {{justifyContent:"flex-start"}} className='justify-content:flex-start' src= {logo} width="60" /> </a>
        <p style={{ fontFamily:"Calligraffitti",color:"#476778"}}  className = "flex font-bold text-xl mx-auto  mt-4">SQUIZ</p>
        </div>
        
        {/* <link rel="icon" href="%PUBLIC_URL%/logo.png" /> */}
        <button onClick = {toggleCollapse} class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div className={`${
            isCollapsed ? "hidden" : "flex"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`} id="navbar-collapse">
        <a href="#" style={{color:"#476778" }}  class="p-2 lg:px-4 md:mx-2 text-dark rounded ">Home</a>
        
                   
        {/* <a href="#" style={{color:"#476778"}}  class="p-2 lg:px-4 md:mx-2 text-dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
        <a href="#" style={{color:"#476778"}}  class="p-2 lg:px-4 md:mx-2 text-dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a> */}
        <a href="#" style={{color:"#476778"}}  class="p-2 lg:px-4 md:mx-2 text-dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
        <a href="#"style={{color:"#476778"}}  class="p-2 lg:px-4 md:mx-2 text-dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
        <a href="#" style={{color:"#476778",backgroundColor:"#ffb14c"}}  class="p-2 lg:px-4 md:mx-2   text-center border border-transparent  hover:bg-white hover:text-dark transition-colors duration-300">Login</a>
       

      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar1
