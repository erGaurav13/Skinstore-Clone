import {Routes,Route}   from "react-router-dom"
import {Login} from "../AllPages/Login"
import {Home} from "../AllPages/Home"
import {Cart} from "../AllPages/Cart"
import Brand from "../Pages/Brand"
import Fragrance from "../Pages/Fragrance"
import HairCare from "../Pages/HairCare"
import Makup from "../Pages/Makup"
import Sale from "../Pages/Sale"
import Skincare from "../Pages/Skincare"
import ToolBrushes from "../Pages/ToolBrushes"
export const AllRoutes=()=>{

return <>
<Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/login" element={<Login/>} />
 <Route path="/cart" element={<Cart/>} />
 <Route path="/brands" element={<Brand/>} />
 <Route path="/fragrance" element={<Fragrance/>} />
 <Route path="/hairCare" element={<HairCare/>} />
 <Route path="/makeup" element={<Makup/>} />
 <Route path="/sale" element={<Sale/>} />
 <Route path="/skincare" element={<Skincare/>} />
 <Route path="/toolsBrushes" element={<ToolBrushes/>} />
</Routes>
 


</>

}