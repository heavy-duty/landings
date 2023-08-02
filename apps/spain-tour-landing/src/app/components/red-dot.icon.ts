import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-red-dot-icon',
  template: `
    <div class="w-full">
      <svg
        id="Layer_2"
        data-name="Layer 2"
        style="width: 100%; height: 100%;"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1200 1200"
      >
        <defs>
          <style>
            .cls-11 {
              fill: url(#radial-gradient);
            }
            .cls-2 {
              fill: url(#radial-gradient-2);
            }
            .cls-3 {
              fill: url(#radial-gradient-3);
            }
            .cls-4 {
              fill: url(#radial-gradient-4);
            }
            .cls-5 {
              opacity: 0.62;
            }
            .cls-6 {
              fill: #fff;
            }
            .cls-7 {
              opacity: 0.66;
            }
          </style>
          <radialGradient
            id="radial-gradient"
            cx="364.98"
            cy="740.34"
            r="367.51"
            gradientTransform="translate(-23.62 17.53) scale(1.15 0.93)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#5c5c5c" stop-opacity="0.68" />
            <stop offset="0.08" stop-color="#535353" stop-opacity="0.61" />
            <stop offset="0.69" stop-color="#171717" stop-opacity="0.17" />
            <stop offset="1" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-2"
            cx="704.9"
            cy="586.41"
            r="373.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#a20202" />
            <stop offset="1" stop-color="#ab0e0e" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-3"
            cx="739.99"
            cy="492.8"
            r="188.55"
            gradientTransform="translate(-290.28 -172.14) scale(1.42 1.38)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#7a0909" />
            <stop offset="0.53" stop-color="#7c0909" />
            <stop offset="0.72" stop-color="#830909" />
            <stop offset="0.86" stop-color="#8e0909" />
            <stop offset="0.97" stop-color="#9f0808" />
            <stop offset="1" stop-color="#a60808" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-4"
            cx="886.73"
            cy="440"
            r="287.76"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#a30202" />
            <stop offset="0.3" stop-color="#a40404" />
            <stop offset="0.41" stop-color="#a90b0b" />
            <stop offset="0.49" stop-color="#b11616" />
            <stop offset="0.5" stop-color="#b31919" />
            <stop offset="0.62" stop-color="#bc1412" />
            <stop offset="1" stop-color="#d40700" />
          </radialGradient>
        </defs>
        <ellipse class="cls-11" cx="382.9" cy="703.78" rx="420" ry="345" />
        <ellipse class="cls-2" cx="704.9" cy="586.41" rx="369" ry="378" />
        <ellipse
          class="cls-3"
          cx="758.54"
          cy="507.57"
          rx="273.55"
          ry="253.78"
        />
        <ellipse class="cls-4" cx="887.93" cy="441.22" rx="285.5" ry="290" />
        <g class="cls-5">
          <path
            class="cls-6"
            d="M1043.59,279.53a267.08,267.08,0,0,1,16.21,25.32c4.67,8.13,10.62,16.54,12.84,25.68,1.1,4.53,3.73,8.49,5.19,12.91s3.53,9.23,4.43,13.95a145.39,145.39,0,0,1,2.6,27.61c0,6.48,26,6.56,26,0a146.21,146.21,0,0,0-2.6-27.61c-.89-4.71-2.93-9.39-4.43-13.95-1.59-4.85-4.4-9.3-5.47-14.27-1.93-8.91-8.1-17.3-12.59-25.15a274.23,274.23,0,0,0-17.11-26.91c-3-4-11.69-3.6-16-3.18-1.91.19-11.93,1.74-9.08,5.6Z"
          />
        </g>
        <g class="cls-7">
          <path
            class="cls-6"
            d="M392.18,703.78c4.74,15.58,9,31.68,20.06,44.09,5.2,5.81,10,11.93,15.09,17.8,2,2.33,3.64,4.87,6.1,6.79,3.46,2.68,7.56,3.37,11.81,3.94L435.7,772l.39,1.62c1.76,7.38,27.19,5,26,0L461.7,772c-.84-3.51-6.76-4-9.54-4.38,7.22,1,4.86,1.89,3.34-.49a33.31,33.31,0,0,0-2.34-3c-2-2.41-4.17-4.6-6.07-7.1-3.87-5.09-8.27-9.62-12.32-14.55-9-11-12.53-25.38-16.59-38.73-2.27-7.46-27.36-4.48-26,0Z"
          />
        </g>
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedDotIconComponent {}
