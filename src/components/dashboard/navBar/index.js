import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {AiFillHome} from "react-icons/ai"
import './index.scss'
// import SearchBar from './searchBar'
// import {getDbList} from './../../../actions/dataActions'


export default function NavBar() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const dispatch=useDispatch()

    const handleOnClick=() => {
        window.location.href=`${window.location.origin}/adding-data`
    }
    const handleBackToHomePage=() => {
        window.location.href=`${window.location.origin}`
    }
    const handleGoToUpdatePage=() => {
        window.location.href=`${window.location.origin}/update-data`
    }
    const handleGoToDeletePage=() => {
        window.location.href=`${window.location.origin}/delete-data`
    }
    const handleSelectingSearchOption=(e) => {
        // console.log(e.target.value,'e.target.value');


        // setSelectedDropdown(e.target.value)
    }
    console.log(window.location.href,'window.location.href');
    return (
        <div className='nav-bar'>
            <div className='heading' onClick={handleBackToHomePage} >
                Anand Marga Pracharak sangh
            </div>
            {(!window.location.href.includes('data')||window.location.href.includes('delete'))&&<div className='heading-adding' onClick={handleOnClick} >
                Add New State and location
            </div>}
            {window.location.href.includes('adding')&&<div className='heading-adding' onClick={handleGoToUpdatePage} >
                Update State and location
            </div>}
            {window.location.href.includes('update')&&<div className='heading-adding' onClick={handleGoToDeletePage} >
                Delete State and location
            </div>}
            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}