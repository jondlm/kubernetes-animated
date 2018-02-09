import React, { Component } from 'react';
import NodeGroup from 'react-move/NodeGroup';
import { easeExpInOut } from 'd3-ease';
import './App.css';

class Container extends Component {
  static width = 137
  static height = 137
  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="container" transform="translate(5.000000, 5.000000)" stroke="#2E6BE2">
          <rect id="Rectangle" strokeWidth="10" x="0" y="0" width="127" height="127"></rect>
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
  render() {
    return (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(3.000000, 5.000000)" stroke="#2E6BE2" strokeWidth="10">
          <polygon points="98 0 174.619485 36.8979994 193.542935 119.807052 140.520606 186.294949 55.4793936 186.294949 2.45706461 119.807052 21.3805147 36.8979994"></polygon>
          <polygon points="98 98.7487467 67.737153 161.590196 98 98.7487467 30 114.269303 98 98.7487467 43.468234 55.2611144 98 98.7487467 98 29 98 98.7487467 152.531766 55.2611144 98 98.7487467 166 114.269303 98 98.7487467 128.262847 161.590196"></polygon>
        </g>
      </g>
    )
  }
}

const width = 800
const height = 800

const states = [
  [
    {
      key: 'container1', component: Container,
      anim: { x: [493], y: [100], opacity: [0], scale: [0.5], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container2', component: Container,
      anim: { x: [142], y: [603], opacity: [0], scale: [0.5], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container3', component: Container,
      anim: { x: [615], y: [562], opacity: [0], scale: [0.5], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container4', component: Container,
      anim: { x: [150], y: [159], opacity: [0], scale: [0.5], timing: { duration: 500, ease: easeExpInOut } }
    },
  ],
  [
    {
      key: 'container1', component: Container,
      anim: { x: [493], y: [100], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container2', component: Container,
      anim: { x: [142], y: [603], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container3', component: Container,
      anim: { x: [615], y: [562], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container4', component: Container,
      anim: { x: [150], y: [159], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
  ],
  [
    {
      key: 'container1', component: Container,
      anim: { x: [493], y: [100], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container2', component: Container,
      anim: { x: [142], y: [603], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container3', component: Container,
      anim: { x: [615], y: [562], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'container4', component: Container,
      anim: { x: [150], y: [159], opacity: [1], scale: [0.75], timing: { duration: 500, ease: easeExpInOut } }
    },
    {
      key: 'kube', component: Kubernetes,
      anim: { x: [width/2], y: [height/2], opacity: [1], scale: [1], timing: { duration: 500, ease: easeExpInOut } }
    },
  ],
];

class App extends Component {
  state = {
    currentStateIndex: 0,
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
          <path
            fill="none"
            stroke="black"
            strokeWidth="4"
            d={`M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} L 0 0 z`}
          />
          <NodeGroup
            data={states[this.state.currentStateIndex]}
            keyAccessor={d => d.key}
            start={() => ({
              x: (width / 2) + 50,
              y: (width / 2) + 50,
              opacity: 0,
              scale: 0.5,
            })}
            enter={({ anim }) => ({ ...anim })}
            update={({ anim }) => ({ ...anim })}
            leave={() => ({
              x: [(width / 2) + 50],
              y: [(width / 2) + 50],
              opacity: [0],
              scale: [0.5]
            })}
          >
            {(nodes) => (
              <g>
                {nodes.map(({key, data, state}) => (
                  <g key={key} transform={`translate(${data.component.width / -2}, ${data.component.height / -2})`}>
                    <g
                      transform={`translate(${state.x}, ${state.y}) scale(${state.scale})`}
                      style={{
                        opacity: state.opacity,
                      }}
                    >
                      <data.component/>
                    </g>
                  </g>
                ))}
              </g>
            )}
          </NodeGroup>
        </svg>
      </div>
    );
  }
}

export default App;
