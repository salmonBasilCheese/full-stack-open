import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({ text, value, unit }) => (
  <tr>
    <td>{text}</td>
    <td>{value} {unit}</td>
  </tr>
)

const Statistics = ({ props }) => {
  const all = props[0] + props[1] + props[2]
  const average = (props[0] - props[2]) / all
  const positive = (props[0] / all) * 100

  console.log(all)
  console.log(average)
  console.log(positive)

  if (all != 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' value={props[0]} />
            <StatisticsLine text='neutral' value={props[1]} />
            <StatisticsLine text='bad' value={props[2]} />
            <StatisticsLine text='all' value={all} />
            <StatisticsLine text='average' value={average} />
            <StatisticsLine text='positive' value={positive} unit='%' />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const props = [good, neutral, bad]

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />

      <h1>statistics</h1>
      <Statistics props={props} />
    </div>
  )
}

export default App