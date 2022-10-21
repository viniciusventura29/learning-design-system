import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export interface CircularProgressProps{}

export function CircularProgress() {
  const [step, setStep] = useState(0);

  var progress = step > 0 ? step / 4 : 0;
var percentage = 100 * progress;

// Status from "Stopped" to "Done"
var status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
  return(<div>
    <h1>Step {step}</h1>
<div className="progress-container">
  <CircularProgressbar value={percentage} text={`${percentage}%`} />
</div>
<h2>Status: {status}</h2>
</div>
  )
}
