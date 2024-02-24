import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'spain-tour-main-card-icon',
  standalone: true,
  template: `
    <div class="w-full">
      <svg
        style="width:100%; height:100%;"
        viewBox="0 0 1266 923"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_72_394)">
          <path
            d="M7.38492 15.2122L44.1943 8.53611L111.162 6.44275L1251.69 9.70833L1249.22 886.837L1050.79 908.048C998.287 908.762 247.104 898.654 247.104 898.654L6.70605 889.66L7.38492 15.2122Z"
            fill="white"
          />
        </g>
        <g style="mix-blend-mode:multiply">
          <path
            d="M14 890L212.5 897.5L14 903.5V890Z"
            fill="black"
            fill-opacity="0.25"
          />
        </g>
        <g style="mix-blend-mode:multiply">
          <path
            d="M1240 888L1052 907.984L1244.13 907.984L1240 888Z"
            fill="black"
            fill-opacity="0.25"
          />
        </g>
        <g style="mix-blend-mode:multiply">
          <path
            d="M1248.5 846L1249.5 845L1248.5 887L1051 908L1248.5 846Z"
            fill="#EFEFEF"
            fill-opacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_72_394"
            x="0.706055"
            y="0.442749"
            width="1264.99"
            height="921.641"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_72_394"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_72_394"
              result="effect2_dropShadow_72_394"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_72_394"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCardIconComponent {}
