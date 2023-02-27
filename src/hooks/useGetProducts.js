import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, SetProducts] = useState([]);

    useEffect( async () =>{
     const response = await axios(API);
	 SetProducts(response.data);
	}, [])
 return products;
 
};


export default useGetProducts;