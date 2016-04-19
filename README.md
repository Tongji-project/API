# Location Store Api

use nodejs and mongodb to handle frenquent request of inserting data

## api
- [fetch devices](#fetch-all-the-devices)
- [fetch records](#fetch-all-the-records)
- [add device](#add-a-new-device)
- [add record](#add-a-new-record)
- [add records](#add-new-records)

## fetch all the devices

### URL

`IP:host/devices`

### Method
GET

### description

fetch all the devices from remote database

### response
```json
//failed
	{"result": "failed"}
//success
	{"result": "success"}
```

## fetch all the records

### URL

`IP:host/records`

### Method
GET

### description

fetch all the records from remote database

### response
```json
//failed
	{"result": "failed"}
//success
	{"result": "success"}
```


## add a new device

### URL

`IP:host/device`

### Method
POST

### description

insert a new device 

### Data Params
```json
{
   "device_id": int,
   "mcc": int,
   "mnc": int,
   "info": String
}
```

### response
```json
//failed
	{"result": "failed"}
//success
	{"result": "success"}
```

## add a new record

### URL

`IP:host/record`

### Method
POST

### description

insert a new device 

### Data Params
```json
{
   "created_time": timeStamp,
   "device_id": int,
   "signal": [
   		{
   			"lac": int,
   			"bass": int
   		},
   		{
   			"lac": int,
   			"bass": int
   		},
   		...
   ],
	"gps": {
		"latitude": double,
		"longitude": double
	},
	"state":{
		"battery_usage": double
	}
}
```

### response
```json
//failed
	{"result": "failed"}
//success
	{"result": "success"}
```

## add new records

### URL

`IP:host/records`

### Method
POST

### description

insert new devices

### Data Params
```json
[{
   "created_time": timeStamp,
   "device_id": int,
   "signal": [
   		{
   			"lac": int,
   			"bass": int
   		},
   		{
   			"lac": int,
   			"bass": int
   		},
   		...
   ],
	"gps": {
		"latitude": double,
		"longitude": double
	},
	"state":{
		"battery_usage": double
	}
},
{
   "created_time": timeStamp,
   "device_id": int,
   "signal": [
   		{
   			"lac": int,
   			"bass": int
   		},
   		{
   			"lac": int,
   			"bass": int
   		},
   		...
   ],
	"gps": {
		"latitude": double,
		"longitude": double
	},
	"state":{
		"battery_usage": double
	}
}
]

```

### response
```json
//failed
	{"result": "failed"}
//success
	{"result": "success"}
```





