import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useMenu = () =>{

    const axiosPublice = useAxiosPublic()
    const {data: menu = [], isPending: loadding, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublice.get('menu');
            return res.data;
        }
    })

    // const [menu, setMenu] = useState([]);
    // const [loadding, setLoadding] = useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data);
    //         setLoadding(false)
    //     })
    // },[]);

    return [menu, loadding, refetch];

}


export default useMenu;