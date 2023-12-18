import React from 'react'

function Footer() {
  return (

    <div>
        <div style={{backgroundColor:'black'}} className='d-flex justify-content-between border-bottom '>
        <div><h3 style={{color:'white'}} className='fs-5 p-2'>Get Connected with us on social networks</h3></div>
        <div className='d-flex justify-content-evenly p-2'>
        <i style={{color:'white'}} class="fa-brands fa-facebook fs-2 me-2"></i>
        <i style={{color:'white'}} class="fa-brands fa-twitter fs-2 me-2"></i>
        <i style={{color:'white'}} class="fa-solid fa-envelope fs-2 me-2"></i>
        <i style={{color:'white'}} class="fa-brands fa-instagram fs-2 me-2"></i>
        <i style={{color:'white'}} class="fa-brands fa-linkedin-in fs-2 me-2"></i>       
         <i style={{color:'white'}} class="fa-brands fa-github fs-2 me-2"></i>
        </div>
        </div>
        <div className='d-flex justify-content-evenly p-3' style={{backgroundColor:'yellowgreen'}}>
          <div st>
            <h3><i style={{color:'white'}} class="fa-regular fa-user"> <span style={{color:'black'}}>PROJECT FAIR</span> </i></h3>

            <p> Your go-to platform for hosting and showcasing innovative projects! 🚀 <br /> Explore a diverse range of ideas, <br /> connect with talented creators, and celebrate the spirit of innovation. <br /> From tech breakthroughs to creative endeavors, <br />  Project Fair is where ideas come to life. </p>

        </div> 

        <div>
            <ul>
                <li style={{listStyle:'none'}}>PRODUCTS</li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Angular</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">React</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Vue</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Larvel</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li style={{listStyle:'none'}}>UESFUL LINKS</li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Pricing</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Settings</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Orders</a></li>
                <li style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'black'}} href="">Help</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li style={{listStyle:'none'}}>CONTACT</li>
                <li style={{listStyle:'none'}}><i style={{color:'white'}} class="fa-solid fa-location-dot fs-5"></i> New York,NY 10012,US</li>
                <li style={{listStyle:'none'}}><i style={{color:'white'}} class="fa-regular fa-envelope fs-5"></i><a style={{textDecoration:'none',color:'black'}} href=""> info@example.com</a></li>
                <li style={{listStyle:'none'}}><i style={{color:'white'}} class="fa-solid fa-phone fs-5"></i> +01 234 567 88</li>
                <li style={{listStyle:'none'}} ><i style={{color:'white'}} class="fa-solid fa-print fs-5"></i> +01 234 567 89</li>
            </ul>
        </div>

        </div>
    </div>
  )
}

export default Footer