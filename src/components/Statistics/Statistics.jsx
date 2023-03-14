import { Notification } from "components/Notification/Notification"


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<section>
       <div>
        <h2>
          Statistics
        </h2>
        {total() === 0 
                ? <Notification message="There is no feedback"/>
                : <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total()}</li>
                    <li>Positive feedback: {positivePercentage()}%</li>
                 </ul>
            }
        </div>
      </section>)
}