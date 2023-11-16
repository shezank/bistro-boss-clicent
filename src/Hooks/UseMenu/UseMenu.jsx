import { useEffect, useState } from "react";

const useMenu = () =>{

    const [menu, setMenu] = useState([]);
    const [loadding, setLoadding] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data =>{
            setMenu(data);
            setLoadding(false)
        })
    },[]);

    return [menu, loadding];

}


export default useMenu;