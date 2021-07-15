import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { db } from "../../config/firebase";

const PartidoBasketInd = () => {
    const {id} =useParams()
    const [Equipo_1, setEquipo_1] = useState("")
    const [Equipo_2,setEquipo_2]= useState("")
    const [Fecha_Partido,setFecha_Partido] = useState("")
    const [Ultimo_Partido,setUltimo_Partido] = useState("")
    const [MVP_1,setMVP_1] =useState("")
    const [MVP_2,setMVP_2] = useState("")
    const [PartidoBasketImgA,setPartidoBasketImgA] = useState("")
    const [PartidoBasketImgB,setPartidoBasketImgB] = useState("")
    const [PartidoBasketImgC,setPartidoBasketImgC] = useState("")
    const [PartidoBasketImgD,setPartidoBasketImgD] = useState("")
    const [PartidoBasketImgE,setPartidoBasketImgE] = useState("")
    const getPartidoBasketIndividual = async () => {
        await db
        .collection("Partidos-Basket")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setEquipo_1(doc.data().Equipo_1)
                setEquipo_2(doc.data().Equipo_2)
                setFecha_Partido(doc.data().Fecha_Partido)
                setUltimo_Partido(doc.data().Ultimo_Partido)
                setPartidoBasketImgA(doc.data().imgA)
                setPartidoBasketImgB(doc.data().imgB)
                setPartidoBasketImgC(doc.data().imgC)
                setPartidoBasketImgD(doc.data().imgD)
                setPartidoBasketImgE(doc.data().imgE)
                setMVP_1(doc.data().MVP_1)
                setMVP_2(doc.data().MVP_2)
                console.log("Document data: ", Equipo_1,Equipo_2,Fecha_Partido,Ultimo_Partido);
            } else {
                console.log("No matchs");
            }
        }) 
        .catch((error)=>{
            console.log("Error getting document: ", error);
        })
    };
    useEffect(()=> {
        getPartidoBasketIndividual();
    });
    return (
        <>
        <div className="container">
            <div className="row">
                <h2>{Equipo_1}</h2>
                <h2>{Equipo_2}</h2>
                <p>{MVP_1}</p>
                <p>{MVP_2}</p>
                <img src={PartidoBasketImgA} alt="sample" style={{width:"50%"}}/>
                <img src={PartidoBasketImgB} alt="sample" style={{width:"50%"}}/>
                <img src={PartidoBasketImgC} alt="sample" style={{width:"50%"}}/>
                <img src={PartidoBasketImgD} alt="sample" style={{width:"50%"}}/>
                <img src={PartidoBasketImgE} alt="sample" style={{width:"50%"}}/>
                
            </div>
        </div>
        </>
    )
}
export default PartidoBasketInd