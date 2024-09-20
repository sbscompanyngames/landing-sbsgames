import React from "react";

export function FacebookIcon({ size = "70px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 52 51"
    >
      <g filter="url(#filter0_d_98_3576)">
        <ellipse
          cx="25.725"
          cy="20.626"
          fill="#3D5A96"
          rx="15.725"
          ry="15.725"
        ></ellipse>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M26.785 27.073h-2.86V20.98h-1.43v-2.348h1.43v-1.408c0-1.914.807-3.054 3.1-3.054h1.909v2.348H27.74c-.893 0-.952.328-.952.94l-.004 1.174h2.162l-.253 2.348h-1.909v6.093z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_98_3576"
          width="50.803"
          height="50.803"
          x="0.323"
          y="0.062"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4.838"></feOffset>
          <feGaussianBlur stdDeviation="4.838"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_98_3576"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_98_3576"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
