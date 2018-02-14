import React, { Component } from 'react';
import NodeGroup from 'react-move/NodeGroup';
import { easeExpInOut, easeElasticInOut } from 'd3-ease';

const blue = "#2e6be2"
const orange = "#ff8700"
const pink = "#c73774"
const purple = "#824bb0"
const teal = "#00b8c8"

const gridSize = 24

class Container extends Component {
  static width = 137
  static height = 137
  static centerX = Container.width / 2
  static centerY = Container.height / 2

  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="container" transform="translate(5.000000, 5.000000)" stroke={this.props.color}>
          <rect id="Rectangle" fill="#FFFFFF" strokeWidth="8" x="0" y="0" width="127" height="127"></rect>
          <g id="whale" transform="translate(17.000000, 33.000000)">
            <path d="M57.8413963,31.9868061 C62.0839884,32.4685736 66.0661657,30.3689788 69.7879281,25.6880216 C69.7879281,18.9389364 71.8072284,12.7095959 75.8458289,7 L80.2175434,19.5271207 C89.4058478,19.5271207 94,19.5271207 94,19.5271207 C90.8206963,24.4962291 84.1052849,27.8836656 73.8537657,29.6894303 C73.8537657,61.2099227 9.32415718,78.7387049 0,31.9868061 C4.72344302,31.9868061 24.0039084,31.9868061 57.8413963,31.9868061 Z" id="Path-2" strokeWidth="4"></path>
            <circle id="Oval" strokeWidth="4" cx="19.5" cy="43.5" r="3.5"></circle>
            <rect id="Rectangle-2" strokeWidth="3" x="14" y="16" width="12" height="12"></rect>
            <rect id="Rectangle-2-Copy" strokeWidth="3" x="30" y="16" width="12" height="12"></rect>
            <rect id="Rectangle-2-Copy-2" strokeWidth="3" x="30" y="0" width="12" height="12"></rect>
          </g>
        </g>
      </g>
    )
  }
}
// class BlueContainer extends Container { render() { return <Container color={blue} /> } }
class OrangeContainer extends Container { render() { return <Container color={orange} /> } }
class PinkContainer extends Container { render() { return <Container color={pink} /> } }
class PurpleContainer extends Container { render() { return <Container color={purple} /> } }
class TealContainer extends Container { render() { return <Container color={teal} /> } }

class Kubernetes extends Component {
  static width = 202.4
  static height = 197.6
  static centerX = Kubernetes.width / 2
  static centerY = Kubernetes.height / 2

  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="#ffffff" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(3.000000, 5.000000)" stroke={blue} strokeWidth="8">
          <polygon points="98 0 174.619485 36.8979994 193.542935 119.807052 140.520606 186.294949 55.4793936 186.294949 2.45706461 119.807052 21.3805147 36.8979994"></polygon>
          <polygon points="98 98.7487467 67.737153 161.590196 98 98.7487467 30 114.269303 98 98.7487467 43.468234 55.2611144 98 98.7487467 98 29 98 98.7487467 152.531766 55.2611144 98 98.7487467 166 114.269303 98 98.7487467 128.262847 161.590196"></polygon>
        </g>
      </g>
    )
  }
}

class KubeNode extends Component {
  static width = 180
  static height = 720
  static centerX = KubeNode.width / 2
  static centerY = KubeNode.height / 2

  render() {
    return (
      <g stroke={blue} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width={KubeNode.width} height={KubeNode.height} />
      </g>
    )
  }
}

class LineUpLeft extends Component {
  static width = 66
  static height = 66
  static centerX = LineUpLeft.width / 2
  static centerY = LineUpLeft.height / 2

  render() {
    return (
      <line x1="0" y1="0" x2={LineUpLeft.width} y2={LineUpLeft.height} stroke={blue} strokeWidth="5" strokeLinecap="round" />
    )
  }
}

class LineUpRight extends Component {
  static width = 66
  static height = 66
  static centerX = LineUpRight.width / 2
  static centerY = LineUpRight.height / 2

  render() {
    return (
      <line x1={LineUpRight.width} y1="0" x2="0" y2={LineUpRight.height} stroke={blue} strokeWidth="5" strokeLinecap="round" />
    )
  }
}

class DevSettings extends Component {
  static width = 256
  static height = 286
  static centerX = DevSettings.width / 2
  static centerY = DevSettings.height / 2

  render() {
    return (
      <g transform="translate(3, 3)">
        <rect stroke="#00B8C8" strokeWidth="6" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" x="0" y="0" width="250" height="280" rx="15"></rect>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill="#00B8C8">
          <tspan x="24" y="63">dev:</tspan>
          <tspan x="24" y="91">	thing: false</tspan>
        </text>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill="#00B8C8">
          <tspan x="17" y="205">constrained:</tspan>
          <tspan x="17" y="233">	memory: 100Mi</tspan>
        </text>
        <path d="M0,140 L251.182205,140" stroke="#00B8C8" strokeWidth="5"></path>
      </g>
    )
  }
}

class ProdSettings extends Component {
  static width = 256
  static height = 286
  static centerX = ProdSettings.width / 2
  static centerY = ProdSettings.height / 2

  render() {
    return (
      <g transform="translate(3, 3)">
        <rect stroke={pink} strokeWidth="6" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" x="0" y="0" width="250" height="280" rx="15"></rect>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill={pink}>
          <tspan x="24" y="63">production:</tspan>
          <tspan x="24" y="91">	thing: true</tspan>
        </text>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill={pink}>
          <tspan x="17" y="205">natural:</tspan>
          <tspan x="17" y="233">	memory: 1Gi</tspan>
        </text>
        <path d="M0,140 L251.182205,140" stroke={pink} strokeWidth="5"></path>
      </g>
    )
  }
}

class Chart extends Component {
  static width = 108.5
  static height = 140.5
  static centerX = Chart.width / 2
  static centerY = Chart.height / 2

  render() {
    return (
      <g transform="translate(3, 3)">
        <path d="M0,10.5541699 L10.539501,3.94131731e-13 L87,-5.32907052e-14 C94.1797017,-8.64938758e-14 100,5.82029825 100,13 L100,108.382979 C100,115.399257 96.3233645,121.902444 90.3115063,125.519864 L86.1897218,128 L0,10.5541699 Z" stroke="#2E6BE2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff"></path>
        <path d="M0,11 L78,11 C84.0751322,11 89,15.9248678 89,22 L89,120 C89,126.627417 83.627417,132 77,132 L0,132 L0,11 Z" stroke="#2E6BE2" strokeWidth="6" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"></path>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill="#2E6BE2">
          <tspan x="9" y="113">{"{{ }}"}</tspan>
        </text>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="24" fontWeight="normal" fill="#2E6BE2">
          <tspan x="8" y="43">helm</tspan>
          <tspan x="8" y="71">chart</tspan>
        </text>
      </g>
    )
  }
}

class YamlFile extends Component {
  static width = 98
  static height = 131
  static centerX = YamlFile.width / 2
  static centerY = YamlFile.height / 2

  render() {
    return (
      <g transform="translate(3.000000, 3.000000)">
        <rect stroke={pink} strokeWidth="6" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" x="0" y="0" width="92" height="125" rx="15"></rect>
        <path d="M18,48.5 L79.6836735,48.5" stroke={pink} strokeWidth="3"></path>
        <path d="M18,61.5 L74.6868132,61.5" stroke={pink} strokeWidth="3"></path>
        <path d="M18,75.5 L72.683908,75.5" stroke={pink} strokeWidth="3"></path>
        <path d="M18,88.5 L69.6829268,88.5" stroke={pink} strokeWidth="3"></path>
        <path d="M18,102.5 L76.6827957,102.5" stroke={pink} strokeWidth="3"></path>
        <text fontFamily="Menlo-Regular, Menlo" fontSize="22" fontWeight="normal" fill={pink} >
          <tspan x="13" y="34">.yaml</tspan>
        </text>
      </g>
    )
  }
}

const width = 800
const height = 800
const defaultTiming = { duration: 850, ease: easeExpInOut }
const defaultAnim = (overwrites) => ({
  x: [0],
  y: [0],
  opacity: [1],
  scale: [1],
  rotate: [0],
  timing: defaultTiming,
  ...overwrites,
});

const stories = [
  { name: 'Container organization', start: 1, timings: [0, 1000, 2000] },
  { name: 'Auto-restart', start: 3, timings: [0, 1000, 2000, 3000] },
  { name: 'Auto-scale', start: 6, timings: [0, 1000, 2000, 3000, 4000] },
  { name: 'Node failure self-healing', start: 10, timings: [0, 1000, 3500, 4000, 5700, 6000] },
  { name: 'Ankh apply', start: 16, timings: [0, 2000, 5000, 6000, 8000, 8700] },
];

const keyframes = [
  // key 0
  [],
  // key 1
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [493] , y: [100] , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [142] , y: [603] , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [615] , y: [562] , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [200] , y: [300] , scale: [0.75] } } ,
  ],
  // key 2
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [493]     , y: [100]          , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [142]     , y: [603]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [615]     , y: [562]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [200]     , y: [300]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
  ],
  // key 3
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
  ],
  // key 4
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
  ],
  // key 5
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533]          , scale: [1.25]     , timing: { duration: 1000 , ease: easeElasticInOut } } } ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
  ],
  // key 6
  [
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.75] } } ,
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
  ],
  // key 7
  [
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.90] } } ,
  ],
  // key 8
  [
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [1.25] } } ,
  ],
  // key 9
  [
    { key: 'container2' , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3' , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4' , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'       , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'      , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'      , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'      , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'      , component: LineUpRight     , anim: { x: [533]     , y: [267]          , scale: [1.25]     , timing: { duration: 1000 , ease: easeElasticInOut } } } ,
    { key: 'container1' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [1.25] } } ,
  ],
  // key 10
  [
    { key: 'container2'  , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4'  , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
  ],
  // key 11
  [
    { key: 'container2'  , component: TealContainer   , anim: { x: [133]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4'  , component: OrangeContainer , anim: { x: [133]     , y: [133]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
    { key: 'kubenode1'   , component: KubeNode        , anim: { x: [133]     , y: [400] } }      ,
    { key: 'kubenode2'   , component: KubeNode        , anim: { x: [667]     , y: [400] } }      ,
  ],
  // key 12
  [
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [267]     , y: [267] } }      ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [267]     , y: [533] } }      ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
    { key: 'kubenode2'   , component: KubeNode        , anim: { x: [667]     , y: [400] } }      ,
  ],
  // key 13
  [
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [267]     , y: [267]          , scale: [1.25]     , timing: { duration: 1000 , ease: easeElasticInOut } } } ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [267]     , y: [533]          , scale: [1.25]     , timing: { duration: 1000 , ease: easeElasticInOut } } } ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
    { key: 'kubenode2'   , component: KubeNode        , anim: { x: [667]     , y: [400] } }      ,
  ],
  // key 14
  [
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [267]     , y: [267]          , scale: [1.25] } } ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [267]     , y: [533]          , scale: [1.25] } } ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
    { key: 'kubenode2'   , component: KubeNode        , anim: { x: [667]     , y: [400] } }      ,
  ],
  // key 15
  [
    { key: 'container2'  , component: TealContainer   , anim: { x: [667]     , y: [500]          , scale: [0.75] } } ,
    { key: 'container3'  , component: PurpleContainer , anim: { x: [667]     , y: [667]          , scale: [0.75] } } ,
    { key: 'container4'  , component: OrangeContainer , anim: { x: [667]     , y: [300]          , scale: [0.75] } } ,
    { key: 'kube'        , component: Kubernetes      , anim: { x: [width/2] , y: [height/2] } } ,
    { key: 'line1'       , component: LineUpLeft      , anim: { x: [567]     , y: [333]          , rotate: [-60] } } ,
    { key: 'line2'       , component: LineUpLeft      , anim: { x: [533]     , y: [533] } }      ,
    { key: 'line3'       , component: LineUpRight     , anim: { x: [567]     , y: [467]          , rotate: [60] } }  ,
    { key: 'line4'       , component: LineUpRight     , anim: { x: [533]     , y: [267] } }      ,
    { key: 'container1'  , component: PinkContainer   , anim: { x: [633]     , y: [100]          , scale: [0.5] } }  ,
    { key: 'container1b' , component: PinkContainer   , anim: { x: [667]     , y: [133]          , scale: [0.5] } }  ,
    { key: 'container1c' , component: PinkContainer   , anim: { x: [698]     , y: [167]          , scale: [0.5] } }  ,
    { key: 'kubenode2'   , component: KubeNode        , anim: { x: [667]     , y: [400] } }      ,
  ],
  // key 16
  [
    { key: 'dev'   , component: DevSettings  , anim: { x: [700] , y: [200]     , scale: [0.6] } } ,
    { key: 'prod'  , component: ProdSettings , anim: { x: [700] , y: [600]     , scale: [0.6] } } ,
    { key: 'chart' , component: Chart        , anim: { x: [533] , y: [400]     , scale: [0.8] } } ,
    { key: 'kube'  , component: Kubernetes   , anim: { x: [133] , y: [400] } } ,
  ],
  // key 17
  [
    { key: 'prod'  , component: ProdSettings , anim: { x: [700] , y: [600]     , scale: [0.75] } } ,
    { key: 'chart' , component: Chart        , anim: { x: [533] , y: [400]     , scale: [0.8] } }  ,
    { key: 'kube'  , component: Kubernetes   , anim: { x: [133] , y: [400] } } ,
  ],
  // key 18
  [
    { key: 'prod'  , component: ProdSettings , anim: { x: [533] , y: [400]     , scale: [0.2] } } ,
    { key: 'yaml1' , component: YamlFile     , anim: { x: [533] , y: [400]     , scale: [0.6]     , opacity: [0] } }         ,
    { key: 'yaml2' , component: YamlFile     , anim: { x: [533] , y: [400]     , scale: [0.6]     , opacity: [0] } }         ,
    { key: 'yaml3' , component: YamlFile     , anim: { x: [533] , y: [400]     , scale: [0.6]     , opacity: [0] } }         ,
    { key: 'kube'  , component: Kubernetes   , anim: { x: [133] , y: [400] } } ,
    { key: 'chart' , component: Chart        , anim: { x: [533] , y: [400]     , scale: [0.9]     , timing: { duration: 1000 , ease: easeElasticInOut } } } ,
  ],
  // key 19
  [
    { key: 'prod'  , component: ProdSettings , anim: { x: [533] , y: [400]     , scale: [0.2] } } ,
    { key: 'yaml1' , component: YamlFile     , anim: { x: [333] , y: [367]     , scale: [0.6] } } ,
    { key: 'yaml2' , component: YamlFile     , anim: { x: [349] , y: [400]     , scale: [0.6] } } ,
    { key: 'yaml3' , component: YamlFile     , anim: { x: [365] , y: [433]     , scale: [0.6] } } ,
    { key: 'kube'  , component: Kubernetes   , anim: { x: [133] , y: [400] } } ,
    { key: 'chart' , component: Chart        , anim: { x: [533] , y: [400]     , scale: [0.8] } } ,
  ],
  // key 20
  [
    { key: 'line1'      , component: LineUpLeft    , anim: { x: [133] , y: [400]     , rotate: [45], opacity: [0] } } ,
    { key: 'prod'  , component: ProdSettings , anim: { x: [533] , y: [400] , scale: [0.2] } } ,
    { key: 'yaml1' , component: YamlFile     , anim: { x: [133] , y: [400] , scale: [0.2] } } ,
    { key: 'yaml2' , component: YamlFile     , anim: { x: [133] , y: [400] , scale: [0.2] } } ,
    { key: 'yaml3' , component: YamlFile     , anim: { x: [133] , y: [400] , scale: [0.2] } } ,
    { key: 'kube'  , component: Kubernetes   , anim: { x: [133] , y: [400] , scale: [1.15]    , timing: { duration: 1000 , ease: easeElasticInOut}} } ,
    { key: 'chart' , component: Chart        , anim: { x: [533] , y: [400] , scale: [0.8] } } ,
  ],
  // key 21
  [
    { key: 'container1' , component: PinkContainer , anim: { x: [133] , y: [67]      , scale: [0.75] } } ,
    { key: 'line1'      , component: LineUpLeft    , anim: { x: [133] , y: [200]     , rotate: [45] } } ,
    { key: 'prod'       , component: ProdSettings  , anim: { x: [533] , y: [400]     , scale: [0.2] } } ,
    { key: 'yaml1'      , component: YamlFile      , anim: { x: [133] , y: [400]     , scale: [0.2] } } ,
    { key: 'yaml2'      , component: YamlFile      , anim: { x: [133] , y: [400]     , scale: [0.2] } } ,
    { key: 'yaml3'      , component: YamlFile      , anim: { x: [133] , y: [400]     , scale: [0.2] } } ,
    { key: 'kube'       , component: Kubernetes    , anim: { x: [133] , y: [400] } } ,
    { key: 'chart'      , component: Chart         , anim: { x: [533] , y: [400]     , scale: [0.8] } } ,
  ],
];

class App extends Component {
  state = {
    currentStateIndex: 1,
    debugMode: false,
    snapToGrid: true,
    mouseX: 0,
    mouseY: 0,
  }

  handleForward = () => {
    if (this.state.currentStateIndex < keyframes.length - 1) {
      this.setState({ currentStateIndex: this.state.currentStateIndex + 1 })
    }
  }

  handleBackward = () => {
    if (this.state.currentStateIndex > 0) {
      this.setState({ currentStateIndex: this.state.currentStateIndex - 1 })
    }
  }

  handleDebugModeToggle = () => {
    this.setState({ debugMode: !this.state.debugMode })
  }

  handleSnapToGridToggle = () => {
    this.setState({ snapToGrid: !this.state.snapToGrid })
  }

  render() {
    const { mouseX, mouseY, debugMode } = this.state;

    return (
      <div className="App">
        <div className="floater">
          {stories.map((story) => (
            <button
              style={{ width: '100%' }}
              onClick={() => {
                this.setState({ currentStateIndex: story.start })

                story.timings.reduce((acc, t) => {
                  setTimeout(() => {
                    this.setState({ currentStateIndex: acc })
                  }, t);

                  return acc + 1
                }, story.start)
              }}
            >
              {story.name}
            </button>
          ))}
          <div style={{ display: 'flex' }}>
            <button style={{ flexGrow: 1 }} onClick={this.handleBackward}>←</button>
            <button style={{ flexGrow: 1 }} onClick={this.handleForward}>→</button>
          </div>
          <label>
            debug mode
            <input type="checkbox" onChange={this.handleDebugModeToggle} checked={this.state.debugMode} />
          </label>
          {debugMode ? [
            <label>
              snap to grid
              <input type="checkbox" onChange={this.handleSnapToGridToggle} checked={this.state.snapToGrid} />
            </label>,
            <span>Keyframe: {this.state.currentStateIndex}</span>,
            <span> ({Math.round(mouseX)}, {Math.round(mouseY)})</span>,
          ] : null}
        </div>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="artboard"
        >
          {/* grid lines */}
          {debugMode ?
            <g strokeWidth="0.5" stroke="#ccc">
              {Array.apply(null, Array(gridSize+1)).map((x, i) => {
                const p = i * (width / gridSize)
                return (
                  <g key={i}>
                    <line x1={p} y1={0} x2={p} y2={height} />
                    <line x1={0} y1={p} x2={width} y2={p} />
                  </g>
                )
              })}
            </g>
          : null}

          {/* objects */}
          <NodeGroup
            data={keyframes[this.state.currentStateIndex].map((item) => ({ ...item, anim: defaultAnim(item.anim) }))}
            keyAccessor={d => d.key}
            start={({ anim: { x, y, rotate }}) => ({
              x: x,
              y: y,
              opacity: 0,
              scale: 0.5,
              rotate: rotate,
            })}
            enter={({ anim }) => ({ ...anim })}
            update={({ anim }) => ({ ...anim })}
            leave={({ anim: { x, y, rotate } }) => {
              return {
                x: [x[0]],
                y: [y[0]],
                opacity: [0],
                scale: [0.25],
                rotate: [rotate[0]],
              }
            }}
          >
            {(nodes) => (
              <g>
                {nodes.map(({key, data, state: { x, y, scale, opacity, rotate }}) => {
                  const centerX = data.component.centerX
                  const centerY = data.component.centerY
                  return (
                    <g
                      key={key}
                      id={key}
                      transform={`translate(${x - centerX}, ${y - centerY}), rotate(${rotate || 0}, ${centerX}, ${centerY})`}
                      style={{
                        opacity: opacity,
                      }}
                    >
                      <g
                        transform={`translate(${(1 - scale) * centerX}, ${(1 - scale) * centerY}) scale(${scale})`}
                      >
                        <data.component />
                        {debugMode ?
                          <text>{key}</text>
                        : null}
                      </g>
                    </g>
                  )
                })}
              </g>
            )}
          </NodeGroup>

          {/* mouse reticles */}
          {debugMode ?
            <g>
              <line stroke="#555" strokeWidth="0.5" x1="0" y1={mouseY} x2={width} y2={mouseY} />
              <line stroke="#555" strokeWidth="0.5" x1={mouseX} y1="0" x2={mouseX} y2={height} />
              <rect
                fill="white"
                opacity="0.001"
                x="0"
                y="0"
                width={width}
                height={height}
                onMouseMove={({ clientY, clientX, target }) => {
                  const x = clientX - target.getBoundingClientRect().left
                  const y = clientY - target.getBoundingClientRect().top
                  const step = width / gridSize
                  const stepMid = step / 2
                  const xMod = x % step
                  const xSnapped = xMod > stepMid ? x + (step - xMod) : x - xMod
                  const yMod = y % step
                  const ySnapped = yMod > stepMid ? y + (step - yMod) : y - yMod

                  this.setState({
                    mouseX: this.state.snapToGrid ? xSnapped : x,
                    mouseY: this.state.snapToGrid ? ySnapped : y,
                  })
                }}
              />
            </g>
          : null}

        </svg>
      </div>
    );
  }
}

export default App;
