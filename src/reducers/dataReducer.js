const initialState={

    inputData: {
        tenantId: '',
        entityname: '',
        entityIDColumn: '',

        checkBox: {

            transactional: {
                value: false,
                profile: false,
                activity: false,
            },
            behavioural: {
                value: false,
                behavioural_goals: false
            },
        },
        summary: {},
        switchBtnPages: 'dashboard',
        location: {},
        stateLocation: [],
        stateId: [],
        resAfterUpdate: '',
        resAfterDelete: '',
        address: {},
        createdResponse: '',
        locState: [{label: "Andhra Pradesh",value: "Andhra Pradesh"},
        {label: "Arunachal Pradesh",value: "Arunachal Pradesh"},
        {label: "Assam",value: "Assam"},
        {label: "Bihar",value: "Bihar"},
        {label: "Chhattisgarh",value: "Chhattisgarh"},
        {label: "Goa",value: "Goa"},
        {label: "Gujarat",value: "Gujarat"},
        {label: "Haryana",value: "Haryana"},
        {label: "Himachal Pradesh",value: "Himachal Pradesh"},
        {label: "Jammu and Kashmir",value: "Jammu and Kashmir"},
        {label: "Jharkhand",value: "Jharkhand"},
        {label: "Karnataka",value: "Karnataka"},
        {label: "Kerala",value: "Kerala"},
        {label: "Madhya Pradesh",value: "Madhya Pradesh"},
        {label: "Maharashtra",value: "Maharashtra"},
        {label: "Manipur",value: "Manipur"},
        {label: "Meghalaya",value: "Meghalaya"},
        {label: "Mizoram",value: "Mizoram"},
        {label: "Nagaland",value: "Nagaland"},
        {label: "Odisha",value: "Odisha"},
        {label: "Punjab",value: "Punjab"},
        {label: "Rajasthan",value: "Rajasthan"},
        {label: "Sikkim",value: "Sikkim"},
        {label: "Tamil Nadu",value: "Tamil Nadu"},
        {label: "Telangana",value: "Telangana"},
        {label: "Tripura",value: "Tripura"},
        {label: "Uttarakhand",value: "Uttarakhand"},
        {label: "Uttar Pradesh",value: "Uttar Pradesh"},
        {label: "West Bengal",value: "West Bengal"},
        {label: "Andaman and Nicobar Islands",value: "Andaman and Nicobar Islands"},
        {label: "Chandigarh",value: "Chandigarh"},
        {label: "Dadra and Nagar Haveli",value: "Dadra and Nagar Haveli"},
        {label: "Daman and Diu",value: "Daman and Diu"},
        {label: "Delhi",value: "Delhi"},
        {label: "Lakshadweep",value: "Lakshadweep"},
        {label: "Puducherry",value: "Puducherry"}],




    },
    schemaUpdatingFieldValue: [{
        'id': '0',
        'columnName': '',
        'dataType': '',
        'nullable': '',
        'fill': 'no',
    }],
    schemaUpdatingFieldValueOne: [{
        'id': '0',
        'columnName': '',
        'dataType': '',
        'nullable': '',
        'fill': 'no',
    }],
    schemaUpdatingFieldValueTwo: [{
        'id': '0',
        'columnName': '',
        'dataType': '',
        'nullable': '',
        'fill': 'no',
    }],
    schemaUpdatingShowingValue: [],
    activityShowingData: [
        // created_on : STRING
        // tenantName : STRING
        // entityName : STRING
        // entityId : STRING
        // action : STRING
        {
            'id': 0,
            'columnName': 'created_on',
            'dataType': {value: 'string',label: "STRING"},
            // 'nullable': result[1],
            'disable': 'yes',
            'fill': 'no',
        },
        {
            'id': 1,
            'columnName': 'tenantName',
            'dataType': {value: 'string',label: "STRING"},

            // 'dataType': result[0],
            // 'nullable': result[1],
            'disable': 'yes',
            'fill': 'no',
        },
        {
            'id': 2,
            'columnName': 'entityName',
            'dataType': {value: 'string',label: "STRING"},

            // 'dataType': result[0],
            // 'nullable': result[1],
            'disable': 'yes',
            'fill': 'no',
        },
        {
            'id': 3,
            'columnName': 'action',
            'dataType': {value: 'string',label: "STRING"},

            // 'dataType': result[0],
            // 'nullable': result[1],
            'disable': 'yes',
            'fill': 'no',
        },
        // {
        //     'id': 4,
        //     'columnName': 'entityId',
        //     'dataType': {value: 'string',label: "STRING"},

        //     // 'dataType': result[0],
        //     // 'nullable': result[1],
        //     'disable': 'yes',
        //     'fill': 'no',
        // }

    ],


    reportLink: [['datalake.infoedge.com/ssip/','title'],
    ['datalake.infoedge.com/ssip/','datalake']
    ],


}

const dataReducer=(state=initialState,action) => {

    switch(action.type) {
        case "UPDATE_INPUT_DATA": return {...state,inputData: action.payload}
        case "UPDATE_Report_LINK": return {...state,reportLink: action.payload}

        case "GETTING_SCHEMA_UPDATING_FIELD_RESPONSE": return {...state,schemaUpdatingFieldValue: action.payload}

        case "GETTING_SCHEMA_UPDATING_FIELD_RESPONSE_ONE": return {...state,schemaUpdatingFieldValueOne: action.payload}
        case "GETTING_SCHEMA_UPDATING_FIELD_RESPONSE_TWO": return {...state,schemaUpdatingFieldValueTwo: action.payload}


        case "GETTING_SCHEMA_UPDATING_ONLY_SHOWING_RESPONSE": return {...state,schemaUpdatingShowingValue: action.payload}


        case "GEETING_SWITCH_BTN_PAGES": return {...state,switchBtnPages: action.payload}

        case "GETTING_LOCATION_RESPONSE": return {...state,location: action.payload}

        case "GETTING_STATE": return {...state,stateLocation: action.payload}
        case "GETTING_STATE_ID": return {...state,stateId: action.payload}

        case "GETTING_RESPONSE_UPDATE": return {...state,resAfterUpdate: action.payload}

        case "GETTING_RESPONSE_DELETE": return {...state,resAfterDelete: action.payload}



        case "GETTING_ADDRESS": return {...state,address: action.payload}
        case "GETTING_CREATED_RESPONSE": return {...state,createdResponse: action.payload}


        default: return state;
    }
}

export default dataReducer