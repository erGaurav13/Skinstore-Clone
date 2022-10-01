import {axios} from "axios"

 

fetch('http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=100')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
function Sale(){
    return <>
    <h1>Sale</h1>
    </>
    }
    export default Sale;