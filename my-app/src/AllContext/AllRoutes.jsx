import {Routes,Route}   from "react-router-dom"
import {Login} from "../AllPages/Login"
import {Home} from "../AllPages/Home"
import {Cart} from "../AllPages/Cart"
import { SignUp } from "../AllPages/SignUp"
import Brand from "../Pages/Brand"
import Fragrance from "../Pages/Fragrance"
import HairCare from "../Pages/HairCare"
import Makup from "../Pages/Makup"
import Sale from "../Pages/Sale"
import Skincare from "../Pages/Skincare"
import ToolBrushes from "../Pages/ToolBrushes"
import { Nopage } from "../Component/Nopage"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import {Checkout} from "../Pages/Checkout"
 export const AllRoutes=()=>{

return <>
<Routes>
 <Route path="/" element={<PrivateRoute><Makup/></PrivateRoute> } />
 <Route path="/login" element={<Login/>} />
 <Route path="/signup" element={<SignUp/>} />
 <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute> } />
 <Route path="/brands" element={<PrivateRoute><Brand/></PrivateRoute>} />
 <Route path="/fragrance" element={<PrivateRoute><Fragrance/></PrivateRoute>} />
 <Route path="/hairCare" element={<PrivateRoute><HairCare/></PrivateRoute>} />
 <Route path="/makeup" element={<PrivateRoute><Makup/></PrivateRoute> } />
 <Route path="/sale" element={<PrivateRoute> <Sale/> </PrivateRoute>} />
 <Route path="/skincare" element={<PrivateRoute><Skincare/> </PrivateRoute>} />
 <Route path="/toolsBrushes" element={<PrivateRoute><ToolBrushes/></PrivateRoute>} />
 <Route path="cart/checkout" element={<Checkout></Checkout>} />
 <Route path="*" element={<Nopage/>}/>
</Routes>
 


</>

}