import React from "react";

export function TwitchIcon({ size = "70px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 52 52"
    >
      <g filter="url(#filter0_d_98_3579)">
        <ellipse
          cx="25.725"
          cy="21.527"
          fill="#6344A2"
          rx="15.725"
          ry="15.725"
        ></ellipse>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19.271 17.491l.86-2.419h12.043v7.855l-3.44 3.435h-2.581l-1.72 1.613h-1.72v-1.613H19.27v-8.87zm9.637 7.264l2.408-2.419v-6.451H20.994v8.87h3.01v1.264l1.854-1.264h3.05zM25.3 18.303h.86v3.225h-.86v-3.225zm3.434 0h-.86v3.225h.86v-3.225z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_98_3579"
          width="50.803"
          height="50.803"
          x="0.323"
          y="0.963"
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
            result="effect1_dropShadow_98_3579"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_98_3579"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
