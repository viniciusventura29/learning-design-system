import { CircularProgressbar } from "react-circular-progressbar";

export interface CircularProgressProps{}

export function CircularProgress() {
  return(
  <div
  x-data="scrollProgress"
  className="w-30 h-30 fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
>
  <svg className="w-20 h-20">
    <circle
      className="text-gray-300" stroke-width="5" stroke="black"
      fill="transparent" r="30"
      cx="40" cy="40"
    />
    <circle
      className="text-cyan-500"
      stroke-width="5"
      stroke-dasharray="circumference"
      stroke-dashoffset="circumference - percent / 100 * circumference"
      stroke-linecap="round"
      stroke="black"
      fill="transparent"
      r="30"
      cx="40"
      cy="40"
    />
  </svg>
  <span className="absolute text-xl text-cyan-500" x-text="`${percent}%`"></span>
  <h1>SDFSDFSDF</h1>
</div>
  )
}
