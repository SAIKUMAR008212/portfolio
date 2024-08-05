import React from 'react'

export default function Skills() {
    return (
        <div className='skill-1'>
            <div style={{display: "flex" ,alignItems: "center", backgroundColor: "black", color: "white", padding: "4px" ,justifyContent:"center" }}>
                {/* <i className="fa-brands fa-html5 fa-xl icon"> </i> */}
                <img style={{width:"27%"}} src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
                <p style={{ marginLeft: "6px" }}>HTML</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", color: "white", padding: "4px" ,justifyContent:"center"  }}>
                {/* <i className="fa-brands fa-css3-alt fa-xl"></i> */}
                <img  style={{width:"32%"}}  src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="" />
                <p style={{ marginLeft: "5px" }}>CSS</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", color: "white", padding: "4px", justifyContent:"center"  }}>
                {/* <i className="fa-brands fa-python fa-xl"></i> */}
                <img  style={{width:"27%"}} src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="" />
                <p style={{ marginLeft: "5px" }}>python</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", color: "white", padding: "10px",justifyContent:"center"  }}>
            <img  style={{width:"25%"}} src="https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000" alt="" />
                <p style={{ marginLeft: "5px" }}>java</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", color: "white", padding: "8px" ,justifyContent:"center" }}>
            <img  style={{width:"25%"}} src="https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" alt="" />
                <p style={{ marginLeft: "5px" }}>React</p>
            </div>
            <br />

        </div>
    )
}
