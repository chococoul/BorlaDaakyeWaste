import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="page-footer  fixed-bottom bg-dark text-white text-center">
               <ul className=".list-unstyled d-inline  ">
                   <li className="ml-3 ">@2019 Borla Daakye Waste Management Ltd</li>
                   <li>
                       <a href='https://www.facebook.com/borladaakye'><i className="fab fa-facebook-f "></i> </a>
                   </li>
                   <li>
                       <a href='https://instagram.com/borladaakye/'><i className="fab fa-twitter "></i> </a>
                   </li>
                   <li>
                       <a href='https://twitter.com/BorlaDaakye'><i className="fab fa-instagram "></i> </a>
                   </li>
                   <li>
                       <a href='https://www.youtube.com/channel/UCsoHsehNDKXnJaie_ywimtQ'><i className="fab fa-youtube  "></i> </a>
                   </li>
               </ul>
               </footer>
            </div>
        )
    }
}
