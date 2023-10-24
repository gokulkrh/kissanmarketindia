import {React} from "react";
import "./styles/header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <a href="http://localhost:3000/">
                        <img src="https://kissanmarketindia.com/storage/app/logo/thumb-500x100-logo-6007d777841c6.png" alt="" />
                    </a>
                </div>
                <div className="user-buttons">
                    <button className="user-button">Login</button>
                    <button className="user-button">Register</button>
                    <button className="add-product-button">Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default Header

// export default class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 <div className="header-container">
//                     <div className="header-logo">
//                         <a href="http://localhost:3000/">
//                             <img src="https://kissanmarketindia.com/storage/app/logo/thumb-500x100-logo-6007d777841c6.png" alt="" />
//                         </a>
//                     </div>
//                     <div className="user-buttons">
//                         <button className="user-button">Login</button>
//                         <button className="user-button">Register</button>
//                         <button className="add-product-button">Add Product</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
