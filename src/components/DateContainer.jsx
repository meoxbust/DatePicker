import { useEffect, useState } from "react";
import moment from "moment/moment";
import "./Date.css"
import DateDisplay from  "./DateDisplay"
const DateContainer = () => {
    const [date, setDate] = useState(moment().format('LL'));
    useEffect(() => {
        console.log("rendered")
    }, [date])
    return (
        <>
            <input type="date" className="date-input" onChange={(e) => {setDate(moment(e.target.value).format('LL'))}}/>
            <DateDisplay date={date}/>
        </>
    );
}

export default DateContainer;