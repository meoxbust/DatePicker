import "./Date.css"

const DateDisplay = (props) => {
    const {date} = props
    return (
        <section className="date-display">
            My date: {date}
        </section>
    );
}

export default DateDisplay;