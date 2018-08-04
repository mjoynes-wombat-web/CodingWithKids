import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/style-prop-object */

const directionLeftLegsCSS = direction => ({
  animationDirection: direction === 'right' ? 'normal' : 'reverse',
});

const directionRightLegsCSS = direction => ({
  animationDirection: direction === 'right' ? 'reverse' : 'normal',
});

const durationCSS = difficulty => ({
  animationDuration: `${Math.max(1.65 - (difficulty * 0.15), 0.5)}s`,
});

const minCrabWidthCSS = screenWidth => ({
  minWidth: `${Math.max(screenWidth * 0.12, 96)}px`,
});

const CrabSVG = ({
  className, removePincerAction, crabClicked, walk, id, screenWidth, direction, difficulty,
}) => (
  <svg
    onLoad={() => setTimeout(walk, 2000)}
    className={`crab ${className}`}
    style={{
      ...minCrabWidthCSS(screenWidth),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'square',
      strokeMiterlimit: '1.5',
    }}
    viewBox="0 0 72 36"
    version="1.1"
    width={72}
    height={36}
  >
    <rect x={0} y={0} width={72} height="35.189" style={{ fill: 'none' }} />
    <g>
      <g className="shell">
        <path onClick={e => crabClicked(e, id)} onTouchStart={e => crabClicked(e, id)} className="outer-shell" d="M16.268,16.734l7.73,-8.8l24.001,0l7.733,8.8l-9.357,13.2l-20.752,0l-9.355,-13.2Z" style={{ fill: 'url(#_Linear1)', stroke: '#8d4a00', strokeWidth: '0.22px' }} />
        <path className="inner-shell" d="M21.061,16.239l5.808,-6.917l18.26,0l5.81,6.917l-4.565,13.695l-20.751,0l-4.562,-13.695Z" style={{ fill: 'url(#_Radial2)', stroke: '#8d4a00', strokeWidth: '0.22px' }} />
      </g>
      <g className="nose">
        <path d="M37.136,10.87l-2.272,0l-1.005,-1.656l2.141,0.002l1.223,-0.002l0.918,0l-1.005,1.656Z" style={{ fill: 'url(#_Linear3)' }} />
        <path d="M37.136,10.87l-2.272,0l-1.005,-1.656l2.141,0.002l1.223,-0.002l0.918,0l-1.005,1.656Zm0.088,-1.433l-1.224,0.001l-1.746,-0.002l0.735,1.212l2.022,0l0.735,-1.212l-0.522,0.001Z" style={{ fill: '#8d4a00' }} />
        <g>
          <ellipse cx="35.384" cy="10.042" rx="0.21" ry="0.256" style={{ fill: '#8d4a00' }} />
          <ellipse cx="36.617" cy="10.042" rx="0.21" ry="0.256" style={{ fill: '#8d4a00' }} />
        </g>
      </g>
      <g className="mouth">
        <g className="inner-mouth">
          <path className="right-mouth" d="M36,15.832l0,-2.718l-1.468,-1.21l-1.47,1.21l1.291,2.719" style={{ fill: 'url(#_Linear4)' }} />
          <path className="left-mouth" d="M36,15.832l0,-2.718l1.468,-1.21l1.47,1.21l-1.291,2.719" style={{ fill: 'url(#_Linear5)' }} />
        </g>
        <g className="outer-mouth">
          <path
            className="right-mouth"
            d="M36,15.832l0,-2.718l-1.468,-1.21l-1.47,1.21l1.291,2.719"
            style={{
              fill: 'url(#_Linear6)', stroke: '#8d4a00', strokeWidth: '0.22px', strokeLinecap: 'round',
            }}
          />
          <path
            className="left-mouth"
            d="M36,15.832l0,-2.718l1.468,-1.21l1.47,1.21l-1.291,2.719"
            style={{
              fill: 'url(#_Linear7)', stroke: '#8d4a00', strokeWidth: '0.22px', strokeLinecap: 'round',
            }}
          />
        </g>
      </g>
      <g className="eyes">
        <g className="right-eye">
          <path
            d="M28.58,9.968l-0.008,-2.77c-0.332,-0.155 -0.568,-0.549 -0.569,-1.011c-0.002,-0.598 0.391,-1.085 0.876,-1.086c0.486,-0.001 0.882,0.483 0.884,1.081c0.001,0.462 -0.233,0.857 -0.564,1.014l0.008,2.773"
            style={{
              fill: 'url(#_Linear8)', stroke: '#8d4a00', strokeWidth: '0.22px', strokeLinecap: 'round',
            }}
          />
          <path d="M28.792,5.064c-0.252,0.018 -0.444,0.183 -0.431,0.368c0.015,0.185 0.229,0.32 0.48,0.301c0.251,-0.018 0.444,-0.183 0.43,-0.368c-0.013,-0.185 -0.228,-0.32 -0.479,-0.301Z" style={{ fill: '#8d4a00' }} />
        </g>
        <g className="left-eye">
          <path
            d="M43.42,9.96l0.008,-2.77c0.331,-0.155 0.568,-0.549 0.569,-1.011c0.002,-0.598 -0.391,-1.084 -0.877,-1.086c-0.486,-0.001 -0.881,0.483 -0.883,1.081c-0.001,0.462 0.233,0.858 0.564,1.014l-0.008,2.773"
            style={{
              fill: 'url(#_Linear9)', stroke: '#8d4a00', strokeWidth: '0.22px', strokeLinecap: 'round',
            }}
          />
          <path d="M43.208,5.056c0.252,0.019 0.444,0.183 0.431,0.368c-0.014,0.185 -0.229,0.32 -0.48,0.301c-0.251,-0.018 -0.444,-0.183 -0.43,-0.368c0.013,-0.184 0.228,-0.319 0.479,-0.301Z" style={{ fill: '#8d4a00' }} />
        </g>
      </g>
      <g className="legs">
        <g
          className="left-legs leg"
          style={{
            ...directionLeftLegsCSS(direction),
            ...durationCSS(difficulty),
          }}
        >
          <g className="fourth-leg fourth-left-leg">
            <g>
              <path
                d="M39.668,29.902l-0.333,-0.53c0,0 0.197,-2.131 7.401,-4.702c-0.187,0.121 -0.303,0.334 -0.288,0.567c0.021,0.348 0.326,0.61 0.681,0.587c0.031,-0.002 0.061,-0.006 0.09,-0.013l0,0.002c0,0 -7.075,4.471 -7.551,4.089Z"
                style={{
                  fill: 'url(#_Linear10)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
              <g className="second-part fourth-left-leg-second-part">
                <path
                  d="M47.262,24.583c3.773,-0.031 8.1,4.037 8.1,4.037l-0.703,0.8c-7.238,-3.211 -7.393,-3.599 -7.396,-3.614c0.285,-0.07 0.493,-0.327 0.486,-0.627c-0.007,-0.29 -0.212,-0.529 -0.487,-0.596Z"
                  style={{
                    fill: 'url(#_Linear11)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <path
                  d="M47,24.38c-0.459,0.059 -0.786,0.473 -0.729,0.923c0.058,0.451 0.477,0.768 0.937,0.708c0.46,-0.06 0.786,-0.474 0.729,-0.924c-0.058,-0.45 -0.478,-0.767 -0.937,-0.707Z"
                  style={{
                    fill: 'url(#_Linear12)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <g className="third-part fourth-left-leg-third-part">
                  <path
                    d="M54.584,29.309c-0.001,0 -1.546,1.53 -0.994,2.656c0.438,0.896 1.512,1.031 2.192,0.378c0.896,-0.861 -0.133,-3.486 -0.133,-3.486"
                    style={{
                      fill: 'url(#_Linear13)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M55.363,28.494c-0.305,-0.163 -0.689,-0.052 -0.856,0.247c-0.166,0.3 -0.054,0.675 0.251,0.837c0.305,0.163 0.688,0.052 0.855,-0.247c0.167,-0.299 0.055,-0.674 -0.25,-0.837Z"
                    style={{
                      fill: 'url(#_Linear14)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
            </g>
            <circle
              cx="39.659"
              cy="28.825"
              r="1.109"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="third-leg third-left-leg">
            <g>
              <g>
                <clipPath id="_clip15">
                  <path d="M40.429,26.416l0,-0.524c0,0 0.223,-2.327 8.429,-5.135c-0.212,0.133 -0.346,0.365 -0.329,0.62c0.025,0.379 0.373,0.666 0.777,0.64c0.035,-0.002 0.069,-0.007 0.102,-0.013l0.001,0.001c0,0 -8.834,6.355 -9.374,5.937c0,0 0.234,-0.241 0.19,-0.919c-0.028,-0.428 0.548,-0.376 0.204,-0.607Z" />
                </clipPath>
                <g clipPath="url(#_clip15)">
                  <use xlinkHref="#_Image16" x="42.707" y="23.049" width="9.374px" height="7.204px" transform="matrix(0.93742,0,0,0.900545,0,-1.33227e-15)" />
                </g>
                <path
                  d="M40.429,26.416l0,-0.524c0,0 0.223,-2.327 8.429,-5.135c-0.212,0.133 -0.346,0.365 -0.329,0.62c0.025,0.379 0.373,0.666 0.777,0.64c0.035,-0.002 0.069,-0.007 0.102,-0.013l0.001,0.001c0,0 -8.834,6.355 -9.374,5.937c0,0 0.234,-0.241 0.19,-0.919c-0.028,-0.428 0.548,-0.376 0.204,-0.607Z"
                  style={{
                    fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                  }}
                />
              </g>
              <g className="second-part third-left-leg-second-part">
                <g>
                  <clipPath id="_clip17">
                    <path d="M49.458,20.663c4.297,-0.035 9.224,4.408 9.224,4.408l-0.8,0.873c-8.243,-3.506 -8.421,-3.93 -8.424,-3.947c0.325,-0.077 0.562,-0.357 0.554,-0.684c-0.008,-0.317 -0.243,-0.578 -0.554,-0.65Z" />
                  </clipPath>
                  <g clipPath="url(#_clip17)">
                    <use xlinkHref="#_Image18" x="53.615" y="23.472" width="9.225px" height="5.282px" transform="matrix(0.922455,0,0,0.880298,0,-1.33227e-15)" />
                  </g>
                  <path
                    d="M49.458,20.663c4.297,-0.035 9.224,4.408 9.224,4.408l-0.8,0.873c-8.243,-3.506 -8.421,-3.93 -8.424,-3.947c0.325,-0.077 0.562,-0.357 0.554,-0.684c-0.008,-0.317 -0.243,-0.578 -0.554,-0.65Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g>
                  <clipPath id="_clip19">
                    <path d="M49.26,20.435c-0.527,0.017 -0.944,0.432 -0.931,0.928c0.014,0.496 0.454,0.884 0.981,0.867c0.528,-0.017 0.945,-0.433 0.931,-0.928c-0.014,-0.496 -0.453,-0.884 -0.981,-0.867Z" />
                  </clipPath>
                  <g clipPath="url(#_clip19)">
                    <use xlinkHref="#_Image20" x="50.544" y="22.745" width="1.912px" height="1.797px" transform="matrix(0.95617,0,0,0.898381,0,-1.33227e-15)" />
                  </g>
                  <path
                    d="M49.26,20.435c-0.527,0.017 -0.944,0.432 -0.931,0.928c0.014,0.496 0.454,0.884 0.981,0.867c0.528,-0.017 0.945,-0.433 0.931,-0.928c-0.014,-0.496 -0.453,-0.884 -0.981,-0.867Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="third-part third-left-leg-third-part">
                  <g>
                    <clipPath id="_clip21">
                      <path d="M58.975,25.719c0.061,-0.168 -0.181,-0.539 -0.181,-0.539c0,0 3.275,3.372 0.967,8.604c0.378,-5.737 -1.726,-7.652 -1.726,-7.652l0.025,-0.025c0.02,0.008 0.04,0.015 0.061,0.022c0.351,0.107 0.734,-0.077 0.854,-0.41Z" />
                    </clipPath>
                    <g clipPath="url(#_clip21)">
                      <use xlinkHref="#_Image22" x="68.297" y="26.34" width="2.549px" height="8.604px" transform="matrix(0.849755,0,0,0.955977,0,-1.33227e-15)" />
                    </g>
                    <path
                      d="M58.975,25.719c0.061,-0.168 -0.181,-0.539 -0.181,-0.539c0,0 3.275,3.372 0.967,8.604c0.378,-5.737 -1.726,-7.652 -1.726,-7.652l0.025,-0.025c0.02,0.008 0.04,0.015 0.061,0.022c0.351,0.107 0.734,-0.077 0.854,-0.41Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                  <g>
                    <clipPath id="_clip23">
                      <path d="M58.805,25.02c-0.301,-0.247 -0.754,-0.221 -1.011,0.058c-0.257,0.279 -0.222,0.705 0.079,0.953c0.301,0.247 0.754,0.221 1.011,-0.058c0.256,-0.279 0.221,-0.706 -0.079,-0.953Z" />
                    </clipPath>
                    <g clipPath="url(#_clip23)">
                      <use xlinkHref="#_Image24" x="80.42" y="36.817" width="1.433px" height="1.35px" transform="matrix(0.716516,0,0,0.674963,0,-1.33227e-15)" />
                    </g>
                    <path
                      d="M58.805,25.02c-0.301,-0.247 -0.754,-0.221 -1.011,0.058c-0.257,0.279 -0.222,0.705 0.079,0.953c0.301,0.247 0.754,0.221 1.011,-0.058c0.256,-0.279 0.221,-0.706 -0.079,-0.953Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <circle
              cx="40.059"
              cy="26.701"
              r="1.254"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="second-leg second-left-leg">
            <g>
              <g>
                <clipPath id="_clip25">
                  <path d="M40.794,23.991l0,-0.575c0,0 0.237,-2.549 8.922,-5.625c-0.225,0.145 -0.367,0.4 -0.348,0.679c0.026,0.415 0.394,0.73 0.822,0.701c0.036,-0.002 0.073,-0.007 0.108,-0.015l0,0.002c0,0 -9.349,6.962 -9.921,6.504c0,0 0.248,-0.264 0.201,-1.007c-0.03,-0.469 0.58,-0.411 0.216,-0.664Z" />
                </clipPath>
                <g clipPath="url(#_clip25)">
                  <use xlinkHref="#_Image16" x="40.696" y="18.033" width="9.922px" height="7.892px" transform="matrix(0.99216,0,0,0.986553,6.66134e-16,6.66134e-16)" />
                </g>
                <path
                  d="M40.794,23.991l0,-0.575c0,0 0.237,-2.549 8.922,-5.625c-0.225,0.145 -0.367,0.4 -0.348,0.679c0.026,0.415 0.394,0.73 0.822,0.701c0.036,-0.002 0.073,-0.007 0.108,-0.015l0,0.002c0,0 -9.349,6.962 -9.921,6.504c0,0 0.248,-0.264 0.201,-1.007c-0.03,-0.469 0.58,-0.411 0.216,-0.664Z"
                  style={{
                    fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                  }}
                />
              </g>
              <g className="second-part second-left-leg-second-part">
                <g>
                  <clipPath id="_clip26">
                    <path d="M50.35,17.687c4.548,-0.038 9.763,4.829 9.763,4.829l-0.847,0.957c-8.724,-3.841 -8.912,-4.305 -8.916,-4.323c0.344,-0.085 0.596,-0.391 0.587,-0.75c-0.008,-0.347 -0.257,-0.634 -0.587,-0.713Z" />
                  </clipPath>
                  <g clipPath="url(#_clip26)">
                    <use xlinkHref="#_Image18" x="51.571" y="18.341" width="9.763px" height="5.786px" transform="matrix(0.976321,0,0,0.964371,6.66134e-16,6.66134e-16)" />
                  </g>
                  <path
                    d="M50.35,17.687c4.548,-0.038 9.763,4.829 9.763,4.829l-0.847,0.957c-8.724,-3.841 -8.912,-4.305 -8.916,-4.323c0.344,-0.085 0.596,-0.391 0.587,-0.75c-0.008,-0.347 -0.257,-0.634 -0.587,-0.713Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g>
                  <clipPath id="_clip27">
                    <path d="M50.141,17.438c-0.558,0.018 -1,0.474 -0.985,1.017c0.015,0.543 0.479,0.968 1.038,0.95c0.558,-0.019 1,-0.474 0.985,-1.017c-0.014,-0.543 -0.48,-0.969 -1.038,-0.95Z" />
                  </clipPath>
                  <g clipPath="url(#_clip27)">
                    <use xlinkHref="#_Image28" x="72.858" y="17.717" width="2.024px" height="1.968px" transform="matrix(0.67467,0,0,0.984181,6.66134e-16,6.66134e-16)" />
                  </g>
                  <path
                    d="M50.141,17.438c-0.558,0.018 -1,0.474 -0.985,1.017c0.015,0.543 0.479,0.968 1.038,0.95c0.558,-0.019 1,-0.474 0.985,-1.017c-0.014,-0.543 -0.48,-0.969 -1.038,-0.95Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="third-part second-left-leg-third-part">
                  <g>
                    <clipPath id="_clip29">
                      <path d="M60.423,23.227c0.064,-0.185 -0.191,-0.591 -0.191,-0.591c0,0 3.466,3.694 1.022,9.426c0.401,-6.285 -1.825,-8.383 -1.825,-8.383l0.026,-0.027c0.021,0.009 0.042,0.017 0.064,0.024c0.372,0.117 0.777,-0.085 0.904,-0.449Z" />
                    </clipPath>
                    <g clipPath="url(#_clip29)">
                      <use xlinkHref="#_Image30" x="66.078" y="24.016" width="2.698px" height="9.426px" transform="matrix(0.899375,0,0,0.942551,6.66134e-16,6.66134e-16)" />
                    </g>
                    <path
                      d="M60.423,23.227c0.064,-0.185 -0.191,-0.591 -0.191,-0.591c0,0 3.466,3.694 1.022,9.426c0.401,-6.285 -1.825,-8.383 -1.825,-8.383l0.026,-0.027c0.021,0.009 0.042,0.017 0.064,0.024c0.372,0.117 0.777,-0.085 0.904,-0.449Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                  <g>
                    <clipPath id="_clip31">
                      <path d="M60.243,22.461c-0.318,-0.271 -0.797,-0.242 -1.07,0.063c-0.272,0.306 -0.235,0.773 0.084,1.044c0.318,0.271 0.797,0.243 1.069,-0.063c0.272,-0.305 0.235,-0.774 -0.083,-1.044Z" />
                    </clipPath>
                    <g clipPath="url(#_clip31)">
                      <use xlinkHref="#_Image24" x="77.788" y="30.125" width="1.517px" height="1.479px" transform="matrix(0.758356,0,0,0.739425,6.66134e-16,6.66134e-16)" />
                    </g>
                    <path
                      d="M60.243,22.461c-0.318,-0.271 -0.797,-0.242 -1.07,0.063c-0.272,0.306 -0.235,0.773 0.084,1.044c0.318,0.271 0.797,0.243 1.069,-0.063c0.272,-0.305 0.235,-0.774 -0.083,-1.044Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <circle
              cx="40.406"
              cy="24.245"
              r="1.442"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="first-leg first-left-leg">
            <g>
              <path
                d="M41.31,21.235l0,-0.649c0,0 0.272,-2.879 10.265,-6.352c-0.259,0.164 -0.422,0.451 -0.401,0.766c0.03,0.47 0.454,0.824 0.946,0.792c0.042,-0.002 0.084,-0.008 0.125,-0.016l0,0.002c0,0 -10.757,7.861 -11.415,7.344c0,0 0.285,-0.298 0.231,-1.136c-0.034,-0.531 0.668,-0.465 0.249,-0.751Z"
                style={{
                  fill: 'url(#_Linear32)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
              <g className="second-part first-left-leg-second-part">
                <path
                  d="M52.305,14.117c5.232,-0.043 11.233,5.453 11.233,5.453l-0.974,1.081c-10.039,-4.338 -10.255,-4.863 -10.259,-4.883c0.396,-0.095 0.685,-0.442 0.675,-0.847c-0.009,-0.392 -0.296,-0.715 -0.675,-0.804Z"
                  style={{
                    fill: 'url(#_Linear33)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <path
                  d="M52.065,13.835c-0.643,0.021 -1.151,0.535 -1.134,1.149c0.017,0.612 0.552,1.093 1.194,1.072c0.642,-0.021 1.151,-0.535 1.134,-1.148c-0.017,-0.614 -0.552,-1.094 -1.194,-1.073Z"
                  style={{
                    fill: 'url(#_Linear34)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <g className="third-part first-left-leg-third-part">
                  <path
                    d="M63.895,20.372c0.074,-0.208 -0.22,-0.666 -0.22,-0.666c0,0 3.988,4.17 1.176,10.644c0.461,-7.098 -2.1,-9.467 -2.1,-9.467l0.03,-0.031c0.024,0.01 0.048,0.019 0.074,0.027c0.427,0.132 0.894,-0.095 1.04,-0.507Z"
                    style={{
                      fill: 'url(#_Linear35)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M63.687,19.508c-0.366,-0.306 -0.917,-0.274 -1.23,0.071c-0.313,0.345 -0.27,0.873 0.096,1.179c0.366,0.305 0.918,0.274 1.23,-0.071c0.313,-0.345 0.27,-0.874 -0.096,-1.179Z"
                    style={{
                      fill: 'url(#_Linear36)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
            </g>
            <circle
              cx="40.832"
              cy="21.586"
              r="1.558"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
        </g>
        <g
          className="right-legs leg"
          style={{
            ...directionRightLegsCSS(direction),
            ...durationCSS(difficulty),
          }}
        >
          <g className="fourth-leg fourth-right-leg">
            <g>
              <path
                d="M32.332,29.902l0.333,-0.53c0,0 -0.197,-2.131 -7.401,-4.702c0.186,0.121 0.303,0.334 0.288,0.567c-0.021,0.348 -0.327,0.61 -0.681,0.587c-0.031,-0.002 -0.061,-0.006 -0.09,-0.013l0,0.002c0,0 7.075,4.471 7.551,4.089Z"
                style={{
                  fill: 'url(#_Linear37)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
              <g className="second-part fourth-right-leg-second-part">
                <path
                  d="M24.738,24.583c-3.773,-0.031 -8.1,4.037 -8.1,4.037l0.703,0.8c7.238,-3.211 7.393,-3.599 7.396,-3.614c-0.285,-0.07 -0.493,-0.327 -0.487,-0.627c0.008,-0.29 0.213,-0.529 0.488,-0.596Z"
                  style={{
                    fill: 'url(#_Linear38)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <path
                  d="M25,24.38c0.459,0.059 0.786,0.473 0.729,0.923c-0.058,0.451 -0.477,0.768 -0.937,0.708c-0.46,-0.06 -0.786,-0.474 -0.729,-0.924c0.058,-0.45 0.478,-0.767 0.937,-0.707Z"
                  style={{
                    fill: 'url(#_Linear39)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <g className="third-part fourth-right-leg-third-part">
                  <path
                    d="M17.416,29.309c0,0 1.546,1.53 0.994,2.656c-0.439,0.896 -1.512,1.031 -2.192,0.378c-0.896,-0.861 0.133,-3.486 0.133,-3.486"
                    style={{
                      fill: 'url(#_Linear40)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M16.637,28.494c0.305,-0.163 0.689,-0.052 0.856,0.247c0.166,0.3 0.054,0.675 -0.251,0.837c-0.305,0.163 -0.688,0.052 -0.855,-0.247c-0.167,-0.299 -0.055,-0.674 0.25,-0.837Z"
                    style={{
                      fill: 'url(#_Linear41)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
            </g>
            <circle
              cx="32.341"
              cy="28.825"
              r="1.109"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="third-leg third-right-leg">
            <g>
              <g>
                <clipPath id="_clip42">
                  <path d="M31.571,26.416l0,-0.524c0,0 -0.223,-2.327 -8.429,-5.135c0.212,0.133 0.346,0.365 0.329,0.62c-0.025,0.379 -0.373,0.666 -0.777,0.64c-0.035,-0.002 -0.069,-0.007 -0.102,-0.013l-0.001,0.001c0,0 8.834,6.355 9.374,5.937c0,0 -0.234,-0.241 -0.19,-0.919c0.028,-0.428 -0.548,-0.376 -0.204,-0.607Z" />
                </clipPath>
                <g clipPath="url(#_clip42)">
                  <use xlinkHref="#_Image43" x="24.099" y="23.049" width="9.374px" height="7.204px" transform="matrix(0.93742,0,0,0.900545,1.06581e-14,-1.33227e-15)" />
                </g>
                <path
                  d="M31.571,26.416l0,-0.524c0,0 -0.223,-2.327 -8.429,-5.135c0.212,0.133 0.346,0.365 0.329,0.62c-0.025,0.379 -0.373,0.666 -0.777,0.64c-0.035,-0.002 -0.069,-0.007 -0.102,-0.013l-0.001,0.001c0,0 8.834,6.355 9.374,5.937c0,0 -0.234,-0.241 -0.19,-0.919c0.028,-0.428 -0.548,-0.376 -0.204,-0.607Z"
                  style={{
                    fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                  }}
                />
              </g>
              <g className="second-part third-right-leg-second-part">
                <g>
                  <clipPath id="_clip44">
                    <path d="M22.542,20.663c-4.297,-0.035 -9.224,4.408 -9.224,4.408l0.8,0.873c8.243,-3.506 8.421,-3.93 8.424,-3.947c-0.325,-0.077 -0.562,-0.357 -0.554,-0.684c0.008,-0.317 0.243,-0.578 0.554,-0.65Z" />
                  </clipPath>
                  <g clipPath="url(#_clip44)">
                    <use xlinkHref="#_Image45" x="14.437" y="23.472" width="9.225px" height="5.282px" transform="matrix(0.922455,0,0,0.880298,1.06581e-14,-1.33227e-15)" />
                  </g>
                  <path
                    d="M22.542,20.663c-4.297,-0.035 -9.224,4.408 -9.224,4.408l0.8,0.873c8.243,-3.506 8.421,-3.93 8.424,-3.947c-0.325,-0.077 -0.562,-0.357 -0.554,-0.684c0.008,-0.317 0.243,-0.578 0.554,-0.65Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g>
                  <clipPath id="_clip46">
                    <path d="M22.74,20.435c0.527,0.017 0.944,0.432 0.931,0.928c-0.014,0.496 -0.454,0.884 -0.981,0.867c-0.528,-0.017 -0.945,-0.433 -0.931,-0.928c0.014,-0.496 0.453,-0.884 0.981,-0.867Z" />
                  </clipPath>
                  <g clipPath="url(#_clip46)">
                    <use xlinkHref="#_Image47" x="22.756" y="22.745" width="1.912px" height="1.797px" transform="matrix(0.95617,0,0,0.898381,1.06581e-14,-1.33227e-15)" />
                  </g>
                  <path
                    d="M22.74,20.435c0.527,0.017 0.944,0.432 0.931,0.928c-0.014,0.496 -0.454,0.884 -0.981,0.867c-0.528,-0.017 -0.945,-0.433 -0.931,-0.928c0.014,-0.496 0.453,-0.884 0.981,-0.867Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="third-part third-right-leg-third-part">
                  <g>
                    <clipPath id="_clip48">
                      <path d="M13.025,25.719c-0.061,-0.168 0.181,-0.539 0.181,-0.539c0,0 -3.275,3.372 -0.967,8.604c-0.378,-5.737 1.726,-7.652 1.726,-7.652l-0.025,-0.025c-0.02,0.008 -0.04,0.015 -0.061,0.022c-0.351,0.107 -0.734,-0.077 -0.854,-0.41Z" />
                    </clipPath>
                    <g clipPath="url(#_clip48)">
                      <use xlinkHref="#_Image49" x="13.434" y="26.34" width="2.549px" height="8.604px" transform="matrix(0.849755,0,0,0.955977,1.06581e-14,-1.33227e-15)" />
                    </g>
                    <path
                      d="M13.025,25.719c-0.061,-0.168 0.181,-0.539 0.181,-0.539c0,0 -3.275,3.372 -0.967,8.604c-0.378,-5.737 1.726,-7.652 1.726,-7.652l-0.025,-0.025c-0.02,0.008 -0.04,0.015 -0.061,0.022c-0.351,0.107 -0.734,-0.077 -0.854,-0.41Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                  <g>
                    <clipPath id="_clip50">
                      <path d="M13.195,25.02c0.301,-0.247 0.754,-0.221 1.011,0.058c0.257,0.279 0.222,0.705 -0.079,0.953c-0.301,0.247 -0.754,0.221 -1.011,-0.058c-0.256,-0.279 -0.221,-0.706 0.079,-0.953Z" />
                    </clipPath>
                    <g clipPath="url(#_clip50)">
                      <use xlinkHref="#_Image51" x="18.066" y="36.817" width="1.433px" height="1.35px" transform="matrix(0.716516,0,0,0.674963,1.06581e-14,-1.33227e-15)" />
                    </g>
                    <path
                      d="M13.195,25.02c0.301,-0.247 0.754,-0.221 1.011,0.058c0.257,0.279 0.222,0.705 -0.079,0.953c-0.301,0.247 -0.754,0.221 -1.011,-0.058c-0.256,-0.279 -0.221,-0.706 0.079,-0.953Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.09px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <circle
              cx="31.941"
              cy="26.701"
              r="1.254"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="second-leg second-right-leg">
            <g>
              <g>
                <clipPath id="_clip52">
                  <path d="M31.206,23.991l0,-0.575c0,0 -0.237,-2.549 -8.922,-5.625c0.225,0.145 0.367,0.4 0.348,0.679c-0.026,0.415 -0.394,0.73 -0.822,0.701c-0.036,-0.002 -0.073,-0.007 -0.108,-0.015l0,0.002c0,0 9.349,6.962 9.921,6.504c0,0 -0.248,-0.264 -0.201,-1.007c0.03,-0.469 -0.58,-0.411 -0.216,-0.664Z" />
                </clipPath>
                <g clipPath="url(#_clip52)">
                  <use xlinkHref="#_Image43" x="21.873" y="18.033" width="9.922px" height="7.892px" transform="matrix(0.99216,0,0,0.986553,1.06581e-14,6.66134e-16)" />
                </g>
                <path
                  d="M31.206,23.991l0,-0.575c0,0 -0.237,-2.549 -8.922,-5.625c0.225,0.145 0.367,0.4 0.348,0.679c-0.026,0.415 -0.394,0.73 -0.822,0.701c-0.036,-0.002 -0.073,-0.007 -0.108,-0.015l0,0.002c0,0 9.349,6.962 9.921,6.504c0,0 -0.248,-0.264 -0.201,-1.007c0.03,-0.469 -0.58,-0.411 -0.216,-0.664Z"
                  style={{
                    fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                  }}
                />
              </g>
              <g className="second-part second-right-leg-second-part">
                <g>
                  <clipPath id="_clip53">
                    <path d="M21.65,17.687c-4.548,-0.038 -9.763,4.829 -9.763,4.829l0.847,0.957c8.724,-3.841 8.912,-4.305 8.916,-4.323c-0.344,-0.085 -0.596,-0.391 -0.587,-0.75c0.008,-0.347 0.257,-0.634 0.587,-0.713Z" />
                  </clipPath>
                  <g clipPath="url(#_clip53)">
                    <use xlinkHref="#_Image45" x="12.175" y="18.341" width="9.763px" height="5.786px" transform="matrix(0.976321,0,0,0.964371,1.06581e-14,6.66134e-16)" />
                  </g>
                  <path
                    d="M21.65,17.687c-4.548,-0.038 -9.763,4.829 -9.763,4.829l0.847,0.957c8.724,-3.841 8.912,-4.305 8.916,-4.323c-0.344,-0.085 -0.596,-0.391 -0.587,-0.75c0.008,-0.347 0.257,-0.634 0.587,-0.713Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g>
                  <clipPath id="_clip54">
                    <path d="M21.859,17.438c0.558,0.018 1,0.474 0.985,1.017c-0.015,0.543 -0.479,0.968 -1.038,0.95c-0.558,-0.019 -1,-0.474 -0.985,-1.017c0.014,-0.543 0.48,-0.969 1.038,-0.95Z" />
                  </clipPath>
                  <g clipPath="url(#_clip54)">
                    <use xlinkHref="#_Image55" x="30.86" y="17.717" width="2.024px" height="1.968px" transform="matrix(0.67467,0,0,0.984181,1.06581e-14,6.66134e-16)" />
                  </g>
                  <path
                    d="M21.859,17.438c0.558,0.018 1,0.474 0.985,1.017c-0.015,0.543 -0.479,0.968 -1.038,0.95c-0.558,-0.019 -1,-0.474 -0.985,-1.017c0.014,-0.543 0.48,-0.969 1.038,-0.95Z"
                    style={{
                      fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="third-part second-right-leg-third-part">
                  <g>
                    <clipPath id="_clip56">
                      <path d="M11.577,23.227c-0.064,-0.185 0.191,-0.591 0.191,-0.591c0,0 -3.466,3.694 -1.022,9.426c-0.401,-6.285 1.825,-8.383 1.825,-8.383l-0.026,-0.027c-0.021,0.009 -0.042,0.017 -0.064,0.024c-0.372,0.117 -0.777,-0.085 -0.904,-0.449Z" />
                    </clipPath>
                    <g clipPath="url(#_clip56)">
                      <use xlinkHref="#_Image57" x="10.978" y="24.016" width="2.698px" height="9.426px" transform="matrix(0.899375,0,0,0.942551,1.06581e-14,6.66134e-16)" />
                    </g>
                    <path
                      d="M11.577,23.227c-0.064,-0.185 0.191,-0.591 0.191,-0.591c0,0 -3.466,3.694 -1.022,9.426c-0.401,-6.285 1.825,-8.383 1.825,-8.383l-0.026,-0.027c-0.021,0.009 -0.042,0.017 -0.064,0.024c-0.372,0.117 -0.777,-0.085 -0.904,-0.449Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                  <g>
                    <clipPath id="_clip58">
                      <path d="M11.757,22.461c0.318,-0.271 0.797,-0.242 1.07,0.063c0.272,0.306 0.235,0.773 -0.084,1.044c-0.318,0.271 -0.797,0.243 -1.069,-0.063c-0.272,-0.305 -0.235,-0.774 0.083,-1.044Z" />
                    </clipPath>
                    <g clipPath="url(#_clip58)">
                      <use xlinkHref="#_Image51" x="15.154" y="30.125" width="1.517px" height="1.479px" transform="matrix(0.758356,0,0,0.739425,1.06581e-14,6.66134e-16)" />
                    </g>
                    <path
                      d="M11.757,22.461c0.318,-0.271 0.797,-0.242 1.07,0.063c0.272,0.306 0.235,0.773 -0.084,1.044c-0.318,0.271 -0.797,0.243 -1.069,-0.063c-0.272,-0.305 -0.235,-0.774 0.083,-1.044Z"
                      style={{
                        fill: 'none', stroke: '#8d4a00', strokeWidth: '0.1px', strokeLinecap: 'round',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <circle
              cx="31.594"
              cy="24.245"
              r="1.442"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
          <g className="first-leg first-right-leg">
            <g>
              <path
                d="M30.69,21.235l0,-0.649c0,0 -0.272,-2.879 -10.265,-6.352c0.259,0.164 0.422,0.451 0.401,0.766c-0.03,0.47 -0.454,0.824 -0.946,0.792c-0.042,-0.002 -0.084,-0.008 -0.125,-0.016l0,0.002c0,0 10.757,7.861 11.415,7.344c0,0 -0.285,-0.298 -0.231,-1.136c0.034,-0.531 -0.668,-0.465 -0.249,-0.751Z"
                style={{
                  fill: 'url(#_Linear59)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
              <g className="second-part first-right-leg-second-part">
                <path
                  d="M19.695,14.117c-5.232,-0.043 -11.233,5.453 -11.233,5.453l0.974,1.081c10.039,-4.338 10.255,-4.863 10.259,-4.883c-0.396,-0.095 -0.685,-0.442 -0.675,-0.847c0.009,-0.392 0.296,-0.715 0.675,-0.804Z"
                  style={{
                    fill: 'url(#_Linear60)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <path
                  d="M19.935,13.835c0.643,0.021 1.151,0.535 1.134,1.149c-0.017,0.612 -0.552,1.093 -1.194,1.072c-0.642,-0.021 -1.151,-0.535 -1.134,-1.148c0.017,-0.614 0.552,-1.094 1.194,-1.073Z"
                  style={{
                    fill: 'url(#_Linear61)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                  }}
                />
                <g className="third-part first-right-leg-third-part">
                  <path
                    d="M8.105,20.372c-0.074,-0.208 0.22,-0.666 0.22,-0.666c0,0 -3.988,4.17 -1.176,10.644c-0.461,-7.098 2.1,-9.467 2.1,-9.467l-0.03,-0.031c-0.024,0.01 -0.048,0.019 -0.074,0.027c-0.427,0.132 -0.894,-0.095 -1.04,-0.507Z"
                    style={{
                      fill: 'url(#_Linear62)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M8.313,19.508c0.366,-0.306 0.917,-0.274 1.23,0.071c0.313,0.345 0.27,0.873 -0.096,1.179c-0.366,0.305 -0.918,0.274 -1.23,-0.071c-0.313,-0.345 -0.27,-0.874 0.096,-1.179Z"
                    style={{
                      fill: 'url(#_Linear63)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
            </g>
            <circle
              cx="31.168"
              cy="21.586"
              r="1.558"
              style={{
                fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
          </g>
        </g>
      </g>
      <g className="pincers">
        <g className="left-pincer" onAnimationEnd={removePincerAction}>
          <path
            d="M40.346,17.229c-0.001,0 0.544,-2.023 3.7,-2.779c0.012,-0.003 1.731,1.377 1.731,1.377c0,0 -0.225,1.869 -3.791,4.087c-0.008,0.006 -1.641,-2.685 -1.641,-2.685Z"
            style={{
              fill: 'url(#_Linear64)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
            }}
          />
          <circle
            cx="39.876"
            cy="19.314"
            r="2.246"
            style={{
              fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
            }}
          />
          <g className="second-part">
            <path
              d="M47.717,11.761c0,0 0.02,2.887 -1.888,3.883c-0.01,0.005 -2.086,-0.809 -2.086,-0.809c0,0 0.258,-2.764 2.312,-3.521c0.013,-0.004 1.662,0.447 1.662,0.447Z"
              style={{
                fill: 'url(#_Linear65)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
            <circle
              cx="44.729"
              cy="15.21"
              r="1.221"
              style={{
                fill: 'url(#_Linear66)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
            <g className="third-part">
              <g>
                <g>
                  <path
                    d="M48.044,11.371c0,0 2.362,-2.834 2.418,-4.278c0.018,-0.459 -2.185,-0.455 -2.638,-1.389c-0.256,-0.529 0.291,-0.803 0.087,-1.131c-0.194,-0.312 -0.469,-0.402 -0.582,-0.629c-0.228,-0.46 0.044,-0.721 -0.072,-0.806c-0.116,-0.085 -0.519,0.157 -0.689,0.5c-0.169,0.344 -0.3,1.154 -0.334,2.15c-0.036,0.997 -0.25,3.131 -0.364,3.763c-0.114,0.633 -0.118,1.224 0.108,1.397c0.013,0.01 2.065,0.423 2.065,0.423Z"
                    style={{
                      fill: 'url(#_Linear67)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M48.044,11.37c0,0 2.362,-2.833 2.418,-4.277c0.018,-0.459 -2.185,-0.455 -2.638,-1.389c-0.256,-0.529 0.291,-0.803 0.087,-1.13c-0.194,-0.313 -0.469,-0.403 -0.582,-0.63c-0.228,-0.46 0.044,-0.721 -0.072,-0.806c-0.116,-0.085 -0.519,0.157 -0.689,0.5c-0.169,0.344 -0.3,1.154 -0.334,2.15c-0.036,0.997 -0.25,3.131 -0.364,3.763c-0.114,0.632 -0.118,1.224 0.108,1.397c0.013,0.01 2.065,0.422 2.065,0.422Z"
                    style={{
                      fill: 'url(#_Linear68)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="moving-pincer">
                  <path
                    d="M49.559,2.946c0.013,-0.123 1.297,-0.233 1.547,1.4c0.25,1.634 -0.633,2.587 -0.633,2.587l-1.682,-0.504c0,0 0.308,-0.383 0.273,-0.783c-0.02,-0.239 0.106,-0.77 0.198,-0.848c0.11,-0.093 0.503,0.05 0.601,-0.127c0.098,-0.176 -0.034,-0.612 0.009,-0.766c0.044,-0.154 0.19,-0.339 0.097,-0.544c-0.094,-0.204 -0.424,-0.292 -0.41,-0.415Z"
                    style={{
                      fill: 'url(#_Linear69)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M50.558,6.511c0.112,0.504 -0.205,1.005 -0.708,1.118c-0.502,0.112 -1.001,-0.207 -1.113,-0.712c-0.111,-0.505 0.207,-1.006 0.709,-1.118c0.502,-0.112 1.001,0.207 1.112,0.712Z"
                    style={{
                      fill: 'url(#_Linear70)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
              <ellipse
                cx="46.822"
                cy="11.358"
                rx="1.21"
                ry="1.152"
                style={{
                  fill: 'url(#_Linear71)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
            </g>
          </g>
        </g>
        <g className="right-pincer">
          <path
            d="M32.157,17.142c0,0 -0.618,-2.296 -4.199,-3.154c-0.013,-0.004 -1.963,1.563 -1.963,1.563c0,0 0.255,2.12 4.3,4.638c0.01,0.006 1.862,-3.047 1.862,-3.047Z"
            style={{
              fill: 'url(#_Linear72)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
            }}
          />
          <circle
            cx="32.253"
            cy="19.311"
            r="2.246"
            style={{
              fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
            }}
          />
          <g className="second-part">
            <path
              d="M23.793,10.937c0,0 -0.022,3.275 2.142,4.406c0.012,0.006 2.367,-0.918 2.367,-0.918c0,0 -0.293,-3.136 -2.624,-3.994c-0.014,-0.006 -1.885,0.506 -1.885,0.506Z"
              style={{
                fill: 'url(#_Linear73)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
            <circle
              cx="27.184"
              cy="14.85"
              r="1.386"
              style={{
                fill: 'url(#_Linear74)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
              }}
            />
            <g className="third-part">
              <g>
                <g>
                  <path
                    d="M23.423,10.494c0,0 -2.681,-3.215 -2.745,-4.852c-0.02,-0.523 2.48,-0.517 2.994,-1.577c0.291,-0.601 -0.33,-0.912 -0.1,-1.282c0.221,-0.355 0.534,-0.458 0.661,-0.715c0.258,-0.523 -0.049,-0.818 0.082,-0.915c0.132,-0.096 0.59,0.178 0.782,0.568c0.192,0.39 0.34,1.31 0.38,2.44c0.04,1.13 0.283,3.551 0.412,4.269c0.129,0.717 0.134,1.388 -0.122,1.585c-0.015,0.011 -2.344,0.479 -2.344,0.479Z"
                    style={{
                      fill: 'url(#_Linear75)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M23.423,10.494c-0.001,0 -2.681,-3.215 -2.745,-4.852c-0.02,-0.523 2.48,-0.517 2.994,-1.577c0.291,-0.601 -0.33,-0.912 -0.1,-1.282c0.221,-0.355 0.534,-0.458 0.661,-0.715c0.258,-0.523 -0.049,-0.818 0.082,-0.915c0.132,-0.096 0.59,0.178 0.782,0.568c0.192,0.39 0.34,1.31 0.38,2.44c0.04,1.13 0.283,3.551 0.412,4.269c0.129,0.717 0.134,1.388 -0.122,1.585c-0.015,0.011 -2.345,0.479 -2.345,0.479Z"
                    style={{
                      fill: 'url(#_Linear76)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
                <g className="moving-pincer">
                  <path
                    d="M21.703,0.935c-0.015,-0.14 -1.472,-0.264 -1.755,1.59c-0.284,1.852 0.718,2.934 0.718,2.934l1.908,-0.572c0,0 -0.349,-0.434 -0.31,-0.889c0.024,-0.27 -0.12,-0.874 -0.224,-0.962c-0.124,-0.106 -0.57,0.057 -0.682,-0.143c-0.111,-0.201 0.039,-0.695 -0.01,-0.87c-0.05,-0.174 -0.215,-0.384 -0.11,-0.617c0.106,-0.232 0.481,-0.331 0.465,-0.471Z"
                    style={{
                      fill: 'url(#_Linear77)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                  <path
                    d="M20.564,4.973c-0.127,0.573 0.233,1.142 0.804,1.269c0.57,0.128 1.136,-0.234 1.262,-0.808c0.127,-0.572 -0.233,-1.141 -0.803,-1.268c-0.57,-0.127 -1.137,0.234 -1.263,0.807Z"
                    style={{
                      fill: 'url(#_Linear78)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                    }}
                  />
                </g>
              </g>
              <ellipse
                cx="24.826"
                cy="10.476"
                rx="1.372"
                ry="1.307"
                style={{
                  fill: 'url(#_Linear79)', stroke: '#8d4a00', strokeWidth: '0.11px', strokeLinecap: 'round',
                }}
              />
            </g>
          </g>
        </g>
      </g>
      <g className="chest">
        <path d="M32.342,29.934l2.691,0l0.708,-1.981l-2.053,0.002l-1.174,-0.001l-0.88,-0.001l0.708,1.981Z" style={{ fill: 'url(#_Linear80)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M31.964,27.953l3.075,0l0.809,-2.265l-2.346,0.003l-1.342,-0.002l-1.006,-0.001l0.81,2.265Z" style={{ fill: 'url(#_Linear81)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M31.584,25.688l3.455,0l0.909,-2.545l-2.637,0.003l-1.506,-0.002l-1.131,-0.001l0.91,2.545Z" style={{ fill: 'url(#_Linear82)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M31.196,23.144l3.804,-0.001l1.001,-2.802l-2.903,0.003l-1.66,-0.001l-1.244,-0.001l1.002,2.802Z" style={{ fill: 'url(#_Radial83)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M32.2,17.063l7.604,0l2.002,3.279l-5.805,-0.003l-3.316,0.002l-2.488,0.001l2.003,-3.279Z" style={{ fill: 'url(#_Radial84)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M39.658,29.934l-2.691,0l-0.708,-1.981l2.053,0.002l1.174,-0.001l0.88,-0.001l-0.708,1.981Z" style={{ fill: 'url(#_Linear85)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M40.036,27.953l-3.075,0l-0.809,-2.265l2.346,0.003l1.342,-0.002l1.006,-0.001l-0.81,2.265Z" style={{ fill: 'url(#_Linear86)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M40.416,25.688l-3.455,0l-0.909,-2.545l2.637,0.003l1.506,-0.002l1.131,-0.001l-0.91,2.545Z" style={{ fill: 'url(#_Linear87)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
        <path d="M40.805,23.144l-3.805,-0.001l-1.001,-2.802l2.903,0.003l1.66,-0.001l1.244,-0.001l-1.002,2.802Z" style={{ fill: 'url(#_Radial88)', stroke: '#8d4a00', strokeWidth: '0.11px' }} />
      </g>
      <g className="tail">
        <path d="M34.799,21.803l2.403,0l0.632,3.251l-1.834,-0.004l-1.048,0.002l-0.786,0.002l0.633,-3.251Z" style={{ fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.17px' }} />
        <path d="M34.166,25.049l3.669,0l0.965,4.885l-2.8,-0.005l-1.6,0.003l-1.2,0.002l0.965,-4.885Z" style={{ fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.17px' }} />
        <path d="M35.214,19.628l1.572,0l0.413,2.175l-1.199,-0.002l-0.685,0.001l-0.514,0.001l0.413,-2.175Z" style={{ fill: '#ffd175', stroke: '#8d4a00', strokeWidth: '0.17px' }} />
      </g>
    </g>
    <defs>
      <linearGradient id="_Linear1" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.32613e-15,-21.6573,21.6573,1.32613e-15,35.6547,29.788)">
        <stop offset={0} style={{ stopColor: '#ff8e00', stopOpacity: 1 }} />
        <stop offset="0.54" style={{ stopColor: '#ff8200', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="_Radial2" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(13.9974,0,0,13.9974,35.9213,19.9265)">
        <stop offset={0} style={{ stopColor: '#ff8e00', stopOpacity: 1 }} />
        <stop offset="0.52" style={{ stopColor: '#ff9e1b', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </radialGradient>
      <linearGradient id="_Linear3" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(8.85828e-17,-1.44667,1.44667,8.85828e-17,35.775,10.8228)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.54" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear4" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.30205e-16,-3.75953,3.75953,2.30205e-16,37.5988,15.7504)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 0 }} />
        <stop offset="0.52" style={{ stopColor: '#ab6e1f', stopOpacity: '0.729412' }} />
        <stop offset={1} style={{ stopColor: '#8d4a00', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear5" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.30205e-16,-3.75953,3.75953,2.30205e-16,37.5988,15.7504)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 0 }} />
        <stop offset="0.52" style={{ stopColor: '#ab6e1f', stopOpacity: '0.729412' }} />
        <stop offset={1} style={{ stopColor: '#8d4a00', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear6" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.30205e-16,-3.75953,3.75953,2.30205e-16,37.5988,15.7504)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 0 }} />
        <stop offset="0.46" style={{ stopColor: '#ffd175', stopOpacity: '0.776471' }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear7" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.30205e-16,-3.75953,3.75953,2.30205e-16,37.5988,15.7504)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 0 }} />
        <stop offset="0.46" style={{ stopColor: '#ffd175', stopOpacity: '0.776471' }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear8" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.0270154,4.32902,-4.32902,-0.0270154,28.8986,5.62934)">
        <stop offset={0} style={{ stopColor: '#fff', stopOpacity: 1 }} />
        <stop offset="0.42" style={{ stopColor: '#ffc858', stopOpacity: 1 }} />
        <stop offset="0.92" style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffb828', stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="_Linear9" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0270154,4.32902,-4.32902,0.0270154,43.1014,5.6215)">
        <stop offset={0} style={{ stopColor: '#fff', stopOpacity: 1 }} />
        <stop offset="0.42" style={{ stopColor: '#ffc858', stopOpacity: 1 }} />
        <stop offset="0.92" style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffb828', stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="_Linear10" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.864645,1.53182,-1.53182,0.864645,42.4195,26.5522)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear11" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.9424,1.88183,-1.88183,-0.9424,51.1589,25.7357)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear12" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0125291,1.55004,-1.55004,0.0125291,47.0809,24.4112)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear13" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.59818,0.167632,-0.167632,1.59818,54.3542,30.4737)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.52" style={{ stopColor: '#ffb459', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear14" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.08927,0.764476,-0.764476,-1.08927,55.5183,28.71)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <image id="_Image16" width="10px" height="8px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAfElEQVQYlYXPOw7CMBCE4d9oLXuLPHhUkEikiGOOgcQduP9JkmIjQiQjpt1Pmlk3v5n5lbqCPEFOSBE4B4/J0OUMGguw7wz1HaiCRvD+Cx5bA2lcgUIMn7PgPeRkNacW4ooOblckvJ5wu1qFKkh5tjDcDYVQBBtsavvyTxZPEQg1RYEtTwAAAABJRU5ErkJggg==" />
      <image id="_Image18" width="10px" height="6px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVQImX3LMQ6AIBAAwb2E5KhoxMoY9T2+03dxfEEqKyxMDA1svSP1OiuWIWUohV6OdYE5wrF9cwc4QgB9wCvEBliGuzSjCHgPqkPgftIFOyRrxiGYeAFK+CEV5mgRmwAAAABJRU5ErkJggg==" />
      <image id="_Image20" width="2px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVQImWP83673n4GTg4GFwcaSgYGRiQEALhADQgdsZlkAAAAASUVORK5CYII=" />
      <image id="_Image22" width="3px" height="9px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAJCAYAAAD3s5bZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQ0lEQVQImU3HoQ2AMABE0Z+TEAQktRRBy0idgAkYlJEOg7jnHn4f+17sgYUEvQEgAPoZKSUyT3DUPwBXi9Q9sq0RiQ/ocgndZOjX1gAAAABJRU5ErkJggg==" />
      <image id="_Image24" width="2px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAG0lEQVQImWP4vzXq//9Ytv+M/0/l/Wd49ZoBAGS6Cnt4yu3vAAAAAElFTkSuQmCC" />
      <image id="_Image28" width="3px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVQImWP8X6/+n4GXh4GBl4eBhcHJjoGBiZmBgZmZAQBHfwNn+AioawAAAABJRU5ErkJggg==" />
      <image id="_Image30" width="3px" height="10px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAKCAYAAABxJ+R3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAARUlEQVQImU3MsQ2AIAAF0Qu1RKOdRKNUykLMwJ7s9W2I+de95lBvUkWqKBAnyBcAAYDyGs7DsMyQ9gGA8hjybdhWwz8YfWJHCd/JxlUcAAAAAElFTkSuQmCC" />
      <linearGradient id="_Linear32" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.55778,2.57753,-2.57753,1.55778,45.4324,16.8454)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear33" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.46254,2.84273,-2.84273,-1.46254,57.7385,15.7094)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear34" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.214734,2.35729,-2.35729,0.214734,51.9592,13.8148)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear35" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.07733,0.351614,-0.351614,-1.07733,65.0446,22.8464)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.63" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear36" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.07478,1.01915,-1.01915,-1.07478,63.6077,19.701)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear37" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.864645,1.53182,1.53182,0.864645,29.5805,26.5522)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear38" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.9424,1.88183,1.88183,-0.9424,20.8411,25.7357)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear39" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.0125291,1.55004,1.55004,0.0125291,24.9191,24.4112)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear40" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.59818,0.167632,0.167632,1.59818,17.6458,30.4737)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.52" style={{ stopColor: '#ffb459', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear41" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.08927,0.764476,0.764476,-1.08927,16.4817,28.71)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <image id="_Image43" width="10px" height="8px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAhUlEQVQYlXXOQQ6CMBSE4R8D1NiAsNT2BkbjebwnZ6GtS9lr9AB18SgaApO83Td5k8XuFnEBnIf3h7XktA1cL2CN4N5DjAtQayhLubaRQu/hMcwgQFHIpcLxAOEuhefrD6Zs1Q+fT2DGOS7MIMAmA70DNRb2NVizAKdROVTV9GEdpiiZ8wWMCB0ZESRUGwAAAABJRU5ErkJggg==" />
      <image id="_Image45" width="10px" height="6px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAT0lEQVQImYXKMQqAMAxA0R8I1KUuZk+zi4v0LN7/JHWQDorWD3970g4aX+UM4VAcHYJwMIMpPeCcodwB6Vr/ACIAKNsKUcCWV9BT6j4EvROReAc1u7JJZgAAAABJRU5ErkJggg==" />
      <image id="_Image47" width="2px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAG0lEQVQImWP8P8HsP8P3HwwsDCbGDAz//zEAAEkmBx07Bz0yAAAAAElFTkSuQmCC" />
      <image id="_Image49" width="3px" height="9px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAJCAYAAAD3s5bZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQ0lEQVQImU3HMQ6AIBREweeWEE0goQULgSN5Awvv32PzMUw327gZHDu8DwKgVZBmLgBLSpazgHeWXplEyUtiWCL9+QDjKQUZUo5UEAAAAABJRU5ErkJggg==" />
      <image id="_Image51" width="2px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAG0lEQVQImWP4H8v2///WqP+M/7dE/mcQE2UAAFzKCKbpZmltAAAAAElFTkSuQmCC" />
      <image id="_Image55" width="3px" height="2px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVQImWP8P9P+P8PnLwwMn78wsDDo6jAw/P3LwPDvLwMAm0IK+PJBFxYAAAAASUVORK5CYII=" />
      <image id="_Image57" width="3px" height="10px" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAKCAYAAABxJ+R3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQImVXHMQ5AMAAAwGMmhI0QOtEPeYPB/8daKqnbrkqXBJ5bDcJG2+TEE3LWJWee6LucePjUwl5kHIoUfnkBK6UFNlxT3RgAAAAASUVORK5CYII=" />
      <linearGradient id="_Linear59" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.55778,2.57753,2.57753,1.55778,26.5676,16.8454)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear60" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.46254,2.84273,2.84273,-1.46254,14.2615,15.7094)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear61" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.214734,2.35729,2.35729,0.214734,20.0408,13.8148)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear62" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.07733,0.351614,0.351614,-1.07733,6.95537,22.8464)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.63" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear63" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.07478,1.01915,1.01915,-1.07478,8.39233,19.701)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear64" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.21116,2.65813,-2.65813,2.21116,41.4611,15.6727)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear65" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.40835,-1.41757,1.41757,-2.40835,46.8694,14.3161)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.55" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear66" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.02618,1.25123,-1.25123,2.02618,43.6698,14.6408)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.46" style={{ stopColor: '#ffb65b', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear67" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(3.29366,1.2786,-1.2786,3.29366,46.7228,7.14331)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.48" style={{ stopColor: '#ffb55a', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear68" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.00213308,1.6277,-1.6277,-0.00213308,46.9886,4.00172)">
        <stop offset={0} style={{ stopColor: '#000', stopOpacity: 1 }} />
        <stop offset="0.53" style={{ stopColor: '#000', stopOpacity: '0.266667' }} />
        <stop offset={1} style={{ stopColor: '#000', stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="_Linear69" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.065168,-1.75421,1.75421,0.065168,50.2086,5.25924)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.49" style={{ stopColor: '#bd4100', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#000', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear70" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.111797,1.76951,-1.76951,0.111797,49.6152,5.84244)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear71" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.02539,-0.873787,0.873787,-2.02539,47.8355,11.804)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.52" style={{ stopColor: '#ffb459', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear72" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.5089,3.01606,-3.01606,-2.5089,30.8916,15.3756)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.45" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear73" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.73265,-1.60846,1.60846,2.73265,24.755,13.8363)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.55" style={{ stopColor: '#ffb75c', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear74" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.29901,1.41972,-1.41972,-2.29901,28.3858,14.2042)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.46" style={{ stopColor: '#ffb65b', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear75" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-3.73717,1.45077,-1.45077,-3.73717,24.9214,5.69768)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.48" style={{ stopColor: '#ffb55a', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear76" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.00242031,1.84687,-1.84687,0.00242031,24.6197,2.13305)">
        <stop offset={0} style={{ stopColor: '#000', stopOpacity: 1 }} />
        <stop offset="0.53" style={{ stopColor: '#000', stopOpacity: '0.266667' }} />
        <stop offset={1} style={{ stopColor: '#000', stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="_Linear77" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.0739432,-1.99042,1.99042,-0.0739432,20.9662,3.55989)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset="0.49" style={{ stopColor: '#bd4100', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#000', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear78" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.12685,2.00778,-2.00778,-0.12685,21.6344,4.21511)">
        <stop offset={0} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear79" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.29812,-0.991447,0.991447,2.29812,23.676,10.9821)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset="0.52" style={{ stopColor: '#ffb459', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ff5700', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear80" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.45588,1.78294e-16,-1.78294e-16,-1.45588,33.479,28.9435)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear81" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.89876,2.32531e-16,-2.32531e-16,-1.89876,33.8209,26.8204)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear82" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.66747,0,0,2.66747,31.5675,24.4156)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="_Radial83" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.0603,0,0,4.0603,34.827,21.8483)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </radialGradient>
      <radialGradient id="_Radial84" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.98766,0,0,4.98766,36.0016,20.2936)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </radialGradient>
      <linearGradient id="_Linear85" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.45588,0,0,1.45588,38.521,28.9435)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear86" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.89876,0,0,1.89876,38.1791,26.8204)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="_Linear87" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.66747,3.2667e-16,-3.2667e-16,-2.66747,40.4325,24.4156)">
        <stop offset={0} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="_Radial88" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.0603,0,0,4.0603,37.173,21.8483)">
        <stop offset={0} style={{ stopColor: '#ffb828', stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: '#ffd175', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
  </svg>
);

CrabSVG.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string.isRequired,
  removePincerAction: PropTypes.func.isRequired,
  crabClicked: PropTypes.func,
  walk: PropTypes.func,
  screenWidth: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};

CrabSVG.defaultProps = {
  id: '',
  crabClicked: () => null,
  walk: () => null,
};

export default CrabSVG;
