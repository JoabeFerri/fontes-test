import * as React from "react"
import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={140}
      height={141}
      viewBox="0 0 140 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={140} height={140} rx={16} fill="#7A6EB2" />
      <path
        d="M140 53.5C66 69.1 15.833 38 0 20.5V128c2 8 9.5 11.667 13 12.5h113c10.8-1.6 13.833-10.667 14-15v-72z"
        fill="#8F82CC"
      />
      <path
        d="M139.5 104C80.7 118.8 22.333 89.833.5 73.5V127c0 7.6 8.667 11.833 13 13h111c12 0 15-10 15-15v-21z"
        fill="#D9D2FF"
      />
    </svg>
  )
}
