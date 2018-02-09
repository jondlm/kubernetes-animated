import React, { Component } from 'react';
import NodeGroup from 'react-move/NodeGroup';
import { easeExpInOut, easeElasticInOut } from 'd3-ease';
import './App.css';

class Container extends Component {
  static width = 137
  static height = 137
  static centerX = 68.5
  static centerY = 68.5
  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="container" transform="translate(5.000000, 5.000000)" stroke="#2E6BE2">
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

class Kubernetes extends Component {
  static width = 205
  static height = 200
  static centerX = 102.5
  static centerY = 100
  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(3.000000, 5.000000)" stroke="#2E6BE2" strokeWidth="8">
          <polygon points="98 0 174.619485 36.8979994 193.542935 119.807052 140.520606 186.294949 55.4793936 186.294949 2.45706461 119.807052 21.3805147 36.8979994"></polygon>
          <polygon points="98 98.7487467 67.737153 161.590196 98 98.7487467 30 114.269303 98 98.7487467 43.468234 55.2611144 98 98.7487467 98 29 98 98.7487467 152.531766 55.2611144 98 98.7487467 166 114.269303 98 98.7487467 128.262847 161.590196"></polygon>
        </g>
      </g>
    )
  }
}

class LineUpLeft extends Component {
  static width = 100
  static height = 100
  static centerX = 50
  static centerY = 50
  render() {
    return (
      <path d="M0,0 L100,100" stroke="#2E6BE2" strokeWidth="5" strokeLinecap="round"></path>
    )
  }
}

class LineUpRight extends Component {
  static width = 100
  static height = 100
  static centerX = 50
  static centerY = 50
  render() {
    return (
      <path d="M100,0 L0,100" stroke="#2E6BE2" strokeWidth="5" strokeLinecap="round"></path>
    )
  }
}

const width = 800
const height = 800
const defaultTiming = { duration: 850, ease: easeExpInOut }

const states = [
  // key 0
  [],
  // key 1
  [
    { key: 'container1', component: Container, anim: { x: [493], y: [100], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [142], y: [603], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [615], y: [562], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [200], y: [300], opacity: [1], scale: [0.75], timing: defaultTiming } },
  ],
  // key 2
  [
    { key: 'container1', component: Container, anim: { x: [493], y: [100], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [142], y: [603], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [615], y: [562], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [200], y: [300], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
  ],
  // key 3
  [
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
  ],
  // key 4
  [
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
  ],
  // key 5
  [
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [560], y: [560], opacity: [1], scale: [1.25], timing: { duration: 1000, ease: easeElasticInOut } } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
  ],
  // key 6
  [
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
  ],
  // key 7
  [
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [0.90], timing: defaultTiming } },
  ],
  // key 8
  [
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [1.25], timing: defaultTiming } },
  ],
  // key 9
  [
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1.25], timing: { duration: 1000, ease: easeElasticInOut } } },
    { key: 'container1', component: Container, anim: { x: [650], y: [145], opacity: [1], scale: [1.25], timing: defaultTiming } },
  ],
  // key 10
  [
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'container1', component: Container, anim: { x: [600], y: [145], opacity: [1], scale: [0.5], timing: defaultTiming } },
    { key: 'container1b', component: Container, anim: { x: [625], y: [170], opacity: [1], scale: [0.5], timing: defaultTiming } },
    { key: 'container1c', component: Container, anim: { x: [650], y: [195], opacity: [1], scale: [0.5], timing: defaultTiming } },
  ],
  // key 11
  [
    { key: 'container2', component: Container, anim: { x: [145], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container3', component: Container, anim: { x: [650], y: [650], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'container4', component: Container, anim: { x: [145], y: [145], opacity: [1], scale: [0.75], timing: defaultTiming } },
    { key: 'kube', component: Kubernetes, anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line1', component: LineUpLeft, anim: { x: [260], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line2', component: LineUpLeft, anim: { x: [540], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line3', component: LineUpRight, anim: { x: [260], y: [540], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'line4', component: LineUpRight, anim: { x: [540], y: [260], opacity: [1], scale: [1], timing: defaultTiming } },
    { key: 'container1', component: Container, anim: { x: [600], y: [145], opacity: [1], scale: [0.5], timing: defaultTiming } },
    { key: 'container1b', component: Container, anim: { x: [625], y: [170], opacity: [1], scale: [0.5], timing: defaultTiming } },
    { key: 'container1c', component: Container, anim: { x: [650], y: [195], opacity: [1], scale: [0.5], timing: defaultTiming } },
  ],
];

class App extends Component {
  state = {
    currentStateIndex: 10,
  }

  handleStart = () => {
    this.setState({ currentStateIndex: 0 })
  }

  handleForward = () => {
    if (this.state.currentStateIndex < states.length - 1) {
      this.setState({ currentStateIndex: this.state.currentStateIndex + 1 })
    }
  }

  handleBackward = () => {
    if (this.state.currentStateIndex > 0) {
      this.setState({ currentStateIndex: this.state.currentStateIndex - 1 })
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <button onClick={this.handleStart}>start</button>
          </div>
          <button onClick={this.handleBackward}>backward</button>
          <button onClick={this.handleForward}>forward</button>
          <span style={{ marginLeft: 10 }}>Keyframe: {this.state.currentStateIndex}</span>
        </div>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          onClick={({ clientY, clientX, target }) => console.log({
            x: clientX - target.getBoundingClientRect().left,
            y: clientY - target.getBoundingClientRect().top,
          })}
        >
          <path fill="none" stroke="black" strokeWidth="4" d={`M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} L 0 0 z`} />
          <NodeGroup
            data={states[this.state.currentStateIndex]}
            keyAccessor={d => d.key}
            start={() => ({
              x: (width / 2),
              y: (height / 2),
              opacity: 0,
              scale: 0.5,
              rotate: 0,
            })}
            enter={({ anim }) => ({ ...anim })}
            update={({ anim }) => ({ ...anim })}
            leave={({ anim: { x, y } }) => {
              return {
                x: [x[0]],
                y: [y[0]],
                opacity: [0],
                scale: [0.25],
                rotate: [0],
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
                        <data.component/>
                        <text>{key}</text>
                      </g>
                    </g>
                  )
                })}
              </g>
            )}
          </NodeGroup>
        </svg>
      </div>
    );
  }
}

export default App;
