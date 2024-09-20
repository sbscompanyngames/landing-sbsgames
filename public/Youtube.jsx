import React from "react";

export function YoutubeIcon({ size = "70px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 52 52"
    >
      <g filter="url(#filter0_d_98_3586)">
        <ellipse
          cx="25.725"
          cy="21.427"
          fill="#F52929"
          rx="15.725"
          ry="15.725"
        ></ellipse>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M32.25 16.628c.426.488.576 1.59.576 1.59s.15 1.31.15 2.618v1.206c0 1.283-.15 2.591-.15 2.591s-.15 1.104-.576 1.591c-.523.586-1.115.638-1.408.663l-.043.004c-2.027.18-5.08.18-5.08.18s-3.78-.026-4.93-.154a2.686 2.686 0 00-.223-.038c-.37-.053-.932-.134-1.38-.655-.425-.487-.575-1.59-.575-1.59s-.15-1.284-.15-2.592v-1.206c0-1.309.15-2.617.15-2.617s.125-1.104.576-1.591c.523-.586 1.115-.638 1.408-.663l.043-.004c2.027-.154 5.08-.18 5.08-.18s3.054.026 5.08.18l.07.005c.3.024.874.07 1.382.662zm-8.287 7.764v-5.568l4.755 2.848-4.755 2.72z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_98_3586"
          width="50.803"
          height="50.803"
          x="0.323"
          y="0.864"
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
            result="effect1_dropShadow_98_3586"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_98_3586"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
