import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bootcamp-hd-close-icon',
  template: `
    <div class="w-full">
      <svg
        style="width: 100%; height: 100%;"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.12433"
          y="-1.05392"
          width="65.6295"
          height="16.6905"
          transform="matrix(0.435894 -0.899998 0.980326 0.197388 29.2247 80.4122)"
          fill="black"
          stroke="black"
          stroke-width="3"
        />
        <path
          d="M25.0312 24.2836L91.4998 63.1499L79.3502 76.6727L12.8816 37.8064L25.0312 24.2836Z"
          fill="black"
          stroke="black"
          stroke-width="3"
        />
        <rect
          x="2.12433"
          y="-1.05392"
          width="65.6295"
          height="16.6905"
          transform="matrix(0.435894 -0.899998 0.980326 0.197388 25.7186 79.0099)"
          fill="#FF0000"
          stroke="black"
          stroke-width="3"
        />
        <path
          d="M21.5251 22.8813L87.9937 61.7476L75.8441 75.2704L9.37552 36.4041L21.5251 22.8813Z"
          fill="#FF0000"
          stroke="black"
          stroke-width="3"
        />
      </svg>
    </div>
  `,
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent {}
