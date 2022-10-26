import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Creatable from 'react-select/creatable';

import './home.scss'
import axios from 'axios'

import {AiFillHome} from "react-icons/ai"
import {RiCloseCircleFill} from "react-icons/ri";

// import './index.scss'
// import SearchBar from './searchBar'
import img from './../../../media/scenery.jpg'
import {getCreatedNewEntity} from './../../../actions/dataActions'



export default function Home() {
    const [selectedDropdown,setSelectedDropdown]=useState("1")
    const [inputData,setInputData]=useState("")
    const [address,setAddress]=useState([''])
    const locState=useSelector((state) => state.dataReducer.inputData.locState)


    const dispatch=useDispatch()

    const style={
        indicatorSeparator: () => {},
        dropdownIndicator: defaultStyles => ({
            ...defaultStyles,
            color: '#939393' // your changes to the arrow
        }),
        menu: provided => ({
            ...provided,
            marginTop: 0,
            width: '100%',
            marginTop: '-1px',


        }),
        control: base => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: 'none',
            minHeight: 35,
            height: 35,
            fontSize: 14,

        }),
        singleValue: (provided,state) => ({
            ...provided,
            fontSize: 14,
            overflow: 'visible',


        }),
        input: (provided,state) => ({
            ...provided,
            margin: '0px',
            fontSize: 14,
            '& input': {
                fontSize: 14,

            },
        }),
        group: provided => ({
            ...provided,
        }),
        option: (provided,state) => ({
            ...provided,
            fontSize: 14,
            height: "40px",
            "&:hover": {
                backgroundColor: "#5E81F4",
            },
            backgroundColor: state.isSelected? "#5E81F4":"white",
        }

        ),
    };

    const handleOnClick=() => {
        // window.location.href=`${window.location.origin}/catalog`

    }

    const handleInput=(e) => {
        let ansResult=address
        ansResult[e.target.id]=e.target.value
        // ansResult[e.target.id]=e.target.value
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])
        // console.log(e.target.id,'e');
        // setInputData(e.target.value)
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleInputlocation=(e) => {
        console.log(e.label,'handleInputlocation');
        setInputData(e.label)
        // window.location.href=`${window.location.origin}/catalog`
    }
    const handleSubmit=() => {
        // console.log('e');
        // window.location.href=`${window.location.origin}/catalog`
        let data={
            // "location": inputData,
            "state": inputData,

            "location": address
        }
        axios.post(`https://location-mu.vercel.app/api/tutorials`,data

        )
            .then(response => {

                getCreatedNewEntity(response.data)

            })
            .catch(error => {

                let showError=error.toString()

            })
    }

    const handleSelectingSearchOption=(e) => {
        // console.log(e.target.value,'e.target.value');


        // setSelectedDropdown(e.target.value)
    }
    const handleRemoveInput=(id) => {
        let ansResult=address
        ansResult.splice(id,1);

        // ansResult[e.target.id]=e.target.value
        // console.log(ansResult,'ansResult',id);
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])

    }
    const handleAddOneMoreInput=(e) => {
        let ansResult=address
        ansResult.push('')
        // ansResult[e.target.id]=e.target.value
        // console.log('e',ansResult);
        // // dispatch(getState(ansResult))
        setAddress([...ansResult])

    }
    // console.log(locState,'locState');

    return (
        <div className='adding-Data'

        // background-image: url("img_tree.png");
        // style={{backgroundImage: `url(${img})`}
        // }
        // background-repeat: no-repeat;
        >
            <div className='heading'>
                Select state

            </div>

            {/* <input onChange={handleInputlocation}
                placeholder='Any State ...'
            >

            </input> */}
            <div className="input-main">

                <div className="input">
                    <Creatable
                        // id={index}
                        onChange={(e) => {
                            handleInputlocation(e)

                        }}

                        // value={mandatoryField[index].dataType}
                        // isDisabled={mandatoryField[index].disable=='yes'? true:false}
                        isSearchable={false}
                        placeholder={'Data Type...'}
                        options={locState}
                        // value={inputData}
                        styles={style}
                        maxMenuHeight={200}

                    />
                </div>

            </div>

            <div className="address">

                <div className='heading'>
                    Please input location with full address

                </div>



                {address!==undefined&&
                    address.map((value,index) => {
                        return (
                            <div id={index} className="row">
                                <input
                                    id={index}
                                    onChange={handleInput}
                                    value={value}
                                >
                                    {/* {address.length} */}
                                </input>
                                <div
                                    id={index}
                                    className="close"
                                    onClick={() => handleRemoveInput(index)}
                                >

                                    <RiCloseCircleFill size={35}
                                        id={index}

                                    />


                                </div>
                            </div>

                        )
                    })
                }
                {/* <input onChange={handleInputlocation}
                    placeholder='Any State ...'
                >

                </input> */}
            </div>
            <div className="new-input" onClick={handleAddOneMoreInput}>

                + Add more location
            </div>
            <div className="adding-btn">
                <button onClick={handleSubmit}>

                    Adding State and Location
                </button>
            </div>
            {/* jos */}
            {/* <p className='title' onClick={handleOnClick}><AiFillHome /> Naukri Data Catalog</p> */}


        </div>
    )

}