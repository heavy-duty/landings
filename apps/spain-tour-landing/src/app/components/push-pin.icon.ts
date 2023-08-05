import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-push-pin-icon',
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
            .{{classPrefix}}-cls-11 {
              fill: url(#{{classPrefix}}-radial-gradient);
            }
            .{{classPrefix}}-cls-2 {
              fill: url(#{{classPrefix}}-radial-gradient-2);
            }
            .{{classPrefix}}-cls-3 {
              fill: url(#{{classPrefix}}-radial-gradient-3);
            }
            .{{classPrefix}}-cls-4 {
              fill: url(#{{classPrefix}}-radial-gradient-4);
            }
            .{{classPrefix}}-cls-5 {
              opacity: 0.62;
            }
            .{{classPrefix}}-cls-6 {
              fill: #fff;
            }
            .{{classPrefix}}-cls-7 {
              opacity: 0.66;
            }
          </style>
          <radialGradient
            id="{{classPrefix}}-radial-gradient"
            cx="364.98"
            cy="740.34"
            r="367.51"
            gradientTransform="translate(-23.62 17.53) scale(1.15 0.93)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" [attr.stop-color]="currentColorData.radialGradient.first" stop-opacity="0.68" />
            <stop offset="0.08" [attr.stop-color]="currentColorData.radialGradient.second" stop-opacity="0.61" />
            <stop offset="0.69" [attr.stop-color]="currentColorData.radialGradient.third" stop-opacity="0.17" />
            <stop offset="1" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="{{classPrefix}}-radial-gradient-2"
            cx="704.9"
            cy="586.41"
            r="373.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" [attr.stop-color]="currentColorData.radialGradient2.first" />
            <stop offset="1" [attr.stop-color]="currentColorData.radialGradient2.second" />
          </radialGradient>
          <radialGradient
            id="{{classPrefix}}-radial-gradient-3"
            cx="739.99"
            cy="492.8"
            r="188.55"
            gradientTransform="translate(-290.28 -172.14) scale(1.42 1.38)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" [attr.stop-color]="currentColorData.radialGradient3.first" />
            <stop offset="0.53" [attr.stop-color]="currentColorData.radialGradient3.second" />
            <stop offset="0.72" [attr.stop-color]="currentColorData.radialGradient3.third" />
            <stop offset="0.86" [attr.stop-color]="currentColorData.radialGradient3.fourth" />
            <stop offset="0.97" [attr.stop-color]="currentColorData.radialGradient3.fifth" />
            <stop offset="1" [attr.stop-color]="currentColorData.radialGradient3.sixth"/>
          </radialGradient>
          <radialGradient
            id="{{classPrefix}}-radial-gradient-4"
            cx="886.73"
            cy="440"
            r="287.76"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" [attr.stop-color]="currentColorData.radialGradient4.first" />
            <stop offset="0.3" [attr.stop-color]="currentColorData.radialGradient4.second" />
            <stop offset="0.41" [attr.stop-color]="currentColorData.radialGradient4.third" />
            <stop offset="0.49" [attr.stop-color]="currentColorData.radialGradient4.fourth" />
            <stop offset="0.5" [attr.stop-color]="currentColorData.radialGradient4.fifth" />
            <stop offset="0.62" [attr.stop-color]="currentColorData.radialGradient4.sixth" />
            <stop offset="1" [attr.stop-color]="currentColorData.radialGradient4.seventh" />
          </radialGradient>
        </defs>
        <ellipse class="{{classPrefix}}-cls-11" cx="382.9" cy="703.78" rx="420" ry="345" />
        <ellipse class="{{classPrefix}}-cls-2" cx="704.9" cy="586.41" rx="369" ry="378" />
        <ellipse
          class="{{classPrefix}}-cls-3"
          cx="758.54"
          cy="507.57"
          rx="273.55"
          ry="253.78"
        />
        <ellipse class="{{classPrefix}}-cls-4" cx="887.93" cy="441.22" rx="285.5" ry="290" />
        <g class="{{classPrefix}}-cls-5">
          <path
            class="{{classPrefix}}-cls-6"
            d="M1043.59,279.53a267.08,267.08,0,0,1,16.21,25.32c4.67,8.13,10.62,16.54,12.84,25.68,1.1,4.53,3.73,8.49,5.19,12.91s3.53,9.23,4.43,13.95a145.39,145.39,0,0,1,2.6,27.61c0,6.48,26,6.56,26,0a146.21,146.21,0,0,0-2.6-27.61c-.89-4.71-2.93-9.39-4.43-13.95-1.59-4.85-4.4-9.3-5.47-14.27-1.93-8.91-8.1-17.3-12.59-25.15a274.23,274.23,0,0,0-17.11-26.91c-3-4-11.69-3.6-16-3.18-1.91.19-11.93,1.74-9.08,5.6Z"
          />
        </g>
        <g class="{{classPrefix}}-cls-7">
          <path
            class="{{classPrefix}}-cls-6"
            d="M392.18,703.78c4.74,15.58,9,31.68,20.06,44.09,5.2,5.81,10,11.93,15.09,17.8,2,2.33,3.64,4.87,6.1,6.79,3.46,2.68,7.56,3.37,11.81,3.94L435.7,772l.39,1.62c1.76,7.38,27.19,5,26,0L461.7,772c-.84-3.51-6.76-4-9.54-4.38,7.22,1,4.86,1.89,3.34-.49a33.31,33.31,0,0,0-2.34-3c-2-2.41-4.17-4.6-6.07-7.1-3.87-5.09-8.27-9.62-12.32-14.55-9-11-12.53-25.38-16.59-38.73-2.27-7.46-27.36-4.48-26,0Z"
          />
        </g>
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PushPinIconComponent {
  _colorSet = 'red';
  _redColorDataSet = {
    radialGradient: {
      first: '#5c5c5c',
      second: '#535353',
      third: '#171717'
    },
    radialGradient2: {
      first: '#a20202',
      second: '#ab0e0e',
    },
    radialGradient3: {
      first: '#7a0909',
      second: '#7c0909',
      third: '#830909',
      fourth: '#8e0909',
      fifth: '#9f0808',
      sixth: '#a60808'
    },
    radialGradient4: {
      first: '#a30202',
      second: '#a40404',
      third: '#a90b0b',
      fourth: '#b11616',
      fifth: '#b31919',
      sixth: '#bc1412',
      seventh: '#d40700'
    },
  };
  _blueColorDataSet = {
    radialGradient: {
      first: '#5c5c5c',
      second: '#535353',
      third: '#171717'
    },
    radialGradient2: {
      first: '#0225a3',
      second: '#0e28ab',
    },
    radialGradient3: {
      first: '#09217a',
      second: '#09217c',
      third: '#092383',
      fourth: '#09258e',
      fifth: '#08299f',
      sixth: '#082aa6'
    },
    radialGradient4: {
      first: '#0225a3',
      second: '#0327a4',
      third: '#072ea7',
      fourth: '#0f39ac',
      fifth: '#194ab3',
      sixth: '#1243bc',
      seventh: '#002ed4'
    },
  };
  _greenColorDataSet = {
    radialGradient: {
      first: '#5c5c5c',
      second: '#535353',
      third: '#171717'
    },
    radialGradient2: {
      first: '#02a317',
      second: '#0eab2a',
    },
    radialGradient3: {
      first: '#097a21',
      second: '#097a21',
      third: '#098323',
      fourth: '#098e25',
      fifth: '#089f29',
      sixth: '#08a62a'
    },
    radialGradient4: {
      first: '#02a325',
      second: '#03a427',
      third: '#05a52e',
      fourth: '#0aa939',
      fifth: '#11ad4a',
      sixth: '#19b35e',
      seventh: '#0fc04d'
    },
  };
  _yellowColorDataSet = {
    radialGradient: {
      first: '#5c5c5c',
      second: '#535353',
      third: '#171717'
    },
    radialGradient2: {
      first: '#D1B90D',
      second: '#CCBE15',
    },
    radialGradient3: {
      first: '#7A7819',
      second: '#7C7A19',
      third: '#83801B',
      fourth: '#8E8B1D',
      fifth: '#9F9C21',
      sixth: '#A6A322'
    },
    radialGradient4: {
      first: '#A39400',
      second: '#A49500',
      third: '#A99A00',
      fourth: '#B1A209',
      fifth: '#B3A40C',
      sixth: '#BCAD04',
      seventh: '#EDDC11'
    },
  };
  _purpleColorDataSet = {
    radialGradient: {
      first: '#5c5c5c',
      second: '#535353',
      third: '#171717'
    },
    radialGradient2: {
      first: '#A3008F',
      second: '#AB0087',
    },
    radialGradient3: {
      first: '#7A006A',
      second: '#7C006B',
      third: '#830072',
      fourth: '#8E007B',
      fifth: '#9F008B',
      sixth: '#A60091'
    },
    radialGradient4: {
      first: '#A3008F',
      second: '#A40091',
      third: '#A7009A',
      fourth: '#AC00A3',
      fifth: '#B300B2',
      sixth: '#BC00B6',
      seventh: '#D400B9'
    },
  };
  _lightBlueColorDataSet = {
    radialGradient: {
      first: '#535353',
      second: '#171717',
      third: '#000000'
    },
    radialGradient2: {
      first: '#0187A2',
      second: '#0690AB',
    },
    radialGradient3: {
      first: '#04667A',
      second: '#04687C',
      third: '#046E83',
      fourth: '#04778E',
      fifth: '#03859F',
      sixth: '#038BA6'
    },
    radialGradient4: {
      first: '#0188A3',
      second: '#0289A4',
      third: '#048EA9',
      fourth: '#0E96B1',
      fifth: '#1198B3',
      sixth: '#0A99BC',
      seventh: '#009FD4'
    },
  };
  currentColorData = this._redColorDataSet;
  
  @Input() classPrefix = '-first-pin'
  @Input() set colorData(color: string) {
    this._colorSet = color;
    this._render();
  }

  _render() {
    switch(this._colorSet) {
      case 'red': 
        this.currentColorData = this._redColorDataSet;
        break;
      case 'blue': 
        this.currentColorData = this._blueColorDataSet;
        break;
      case 'green': 
        this.currentColorData = this._greenColorDataSet;
        break;
      case 'yellow': 
        this.currentColorData = this._yellowColorDataSet;
        break;
      case 'purple': 
        this.currentColorData = this._purpleColorDataSet;
        break;        
      case 'lightBlue': 
        this.currentColorData = this._lightBlueColorDataSet;
        break;                

        
      default:
        break;
    }
  }

}
