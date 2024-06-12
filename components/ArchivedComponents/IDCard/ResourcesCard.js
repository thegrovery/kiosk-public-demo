/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IDCard({ 
  //Props
  text, link, cardID, 
  color, animation, animationDelay
}) {

  //console.log(author);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="277.719" height="363.512" viewBox="0 0 277.719 363.512">
      <g id="Patient_Resources" data-name="Patient Resources" transform="translate(-1140.661 -3016.408)">
        <g id="Background">
          <g id="Group_104" data-name="Group 104">
            <g id="Group_103" data-name="Group 103">
              <path id="Path_143" data-name="Path 143" d="M1404.671,3379.919h-250.3a13.71,13.71,0,0,1-13.71-13.709V3030.118a13.712,13.712,0,0,1,13.71-13.71h250.3a13.71,13.71,0,0,1,13.709,13.71V3366.21a13.708,13.708,0,0,1-13.709,13.709ZM1241.6,3032.8a7.956,7.956,0,0,0,0,15.911h75.839a7.956,7.956,0,0,0,0-15.911Z" fill="#fff"/>
            </g>
          </g>
        </g>
        <text id="Patient_Resources-2" data-name="Patient Resources" transform="translate(1160.998 3220.511)" fill="#453939" fontSize="30"  fontWeight="700"><tspan x="0" y="32">Patient </tspan><tspan x="0" y="65.609">Resources</tspan></text>
        <path id="Accent" d="M0,0H277.646a0,0,0,0,1,0,0V59.813a14.256,14.256,0,0,1-14.256,14.256H14.256A14.256,14.256,0,0,1,0,59.813V0A0,0,0,0,1,0,0Z" transform="translate(1140.661 3305.852)" fill="#ceecce" opacity="0.6"/>
        <g id="patientresources-icon">
          <path id="Path_150" data-name="Path 150" d="M1304.374,3086.515h-11.965a.944.944,0,0,1-.944-.944v-.63a.945.945,0,0,1,.944-.945h11.965a.945.945,0,0,1,.944.945v.63a.944.944,0,0,1-.944.944m-21.725,10.076H1268.8a1.294,1.294,0,0,1-1.259-1.326v-9.942A1.294,1.294,0,0,1,1268.8,3084h13.854a1.294,1.294,0,0,1,1.259,1.327v9.942a1.294,1.294,0,0,1-1.259,1.326m-12.6-10.076v7.557h11.335v-7.557Zm34.32,10.076h-11.965a.945.945,0,0,1-.944-.945v-.63a.944.944,0,0,1,.944-.944h11.965a.944.944,0,0,1,.944.944v.63a.945.945,0,0,1-.944.945m-.033,10.075h-35.828a.96.96,0,0,1-.977-.944v-.63a.961.961,0,0,1,.977-.945h35.828a.961.961,0,0,1,.977.945v.63a.96.96,0,0,1-.977.944m10.423-32.745H1258.09a1.889,1.889,0,0,0-1.889,1.889v37.153H1235.42a1.889,1.889,0,0,0-1.889,1.889v40.3a1.889,1.889,0,0,0,1.889,1.889h66.75a1.889,1.889,0,0,0,1.889-1.889v-5.667h10.705a1.889,1.889,0,0,0,1.889-1.889V3075.81a1.889,1.889,0,0,0-1.889-1.889m-14.483,79.344h-62.972v-36.523h62.972Zm12.594-7.557h-8.816v-30.856a1.889,1.889,0,0,0-1.889-1.889h-42.191V3077.7h52.9Z" fill="#453838"/>
          <path id="Path_151" data-name="Path 151" d="M1259.979,3143.188v-16.373a1.26,1.26,0,0,1,1.9-1.084l13.853,8.186a1.26,1.26,0,0,1,0,2.169l-13.853,8.186a1.26,1.26,0,0,1-1.9-1.084m2.519-14.166v11.959l10.118-5.98Z" fill="#267148"/>
        </g>
        <g id="BMS_Logo" data-name="BMS Logo">
          <g id="Group_114" data-name="Group 114">
            <path id="Path_158" data-name="Path 158" d="M1311.332,3358.2a.293.293,0,0,1-.206-.4l.206-.713c.063-.206.222-.238.412-.159a6.2,6.2,0,0,0,2.252.46c1.079,0,2.221-.507,2.221-1.761,0-.888-.523-1.348-1.4-1.808l-2.014-1.078a2.868,2.868,0,0,1-1.744-2.569c0-1.824,1.7-2.808,3.362-2.808a5.794,5.794,0,0,1,2.585.508c.191.095.238.206.175.381l-.238.634c-.064.19-.206.238-.412.143a5.136,5.136,0,0,0-2.031-.46c-.888,0-1.919.412-1.919,1.475,0,.824.476,1.237,1.237,1.633l1.7.9c1.269.667,2.157,1.46,2.157,2.934,0,2.078-1.728,3.125-3.68,3.125A8.314,8.314,0,0,1,1311.332,3358.2Zm7.612-2.427v-4.631a.278.278,0,0,1,.317-.317h.73c.206,0,.3.095.3.317v4.425c0,1.126.253,1.919,1.522,1.919a3.525,3.525,0,0,0,2.094-.935v-5.409a.278.278,0,0,1,.317-.317h.729c.206,0,.3.095.3.317v7.026c0,.222-.079.317-.3.317h-.7c-.191,0-.3-.079-.3-.285l-.016-.508a3.826,3.826,0,0,1-2.5.952C1319.61,3358.645,1318.944,3357.471,1318.944,3355.774Zm8.1,5.789v-10.42c0-.222.08-.317.3-.317h.65c.19,0,.3.079.3.285l.016.555a3.235,3.235,0,0,1,2.363-1.015c2.253,0,3.252,1.888,3.252,3.934,0,2.109-1.142,4.06-3.442,4.06a2.744,2.744,0,0,1-2.094-.888v3.806a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,1327.048,3361.563Zm5.472-6.947c0-1.379-.46-2.886-2.11-2.886a2.668,2.668,0,0,0-2.014,1.015v3.727a2.3,2.3,0,0,0,1.919,1.11C1331.949,3357.582,1332.52,3356.028,1332.52,3354.616Zm2.838,6.947v-10.42c0-.222.079-.317.3-.317h.651c.19,0,.3.079.3.285l.016.555a3.235,3.235,0,0,1,2.363-1.015c2.252,0,3.251,1.888,3.251,3.934,0,2.109-1.142,4.06-3.441,4.06a2.744,2.744,0,0,1-2.094-.888v3.806a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,1335.358,3361.563Zm5.472-6.947c0-1.379-.46-2.886-2.11-2.886a2.668,2.668,0,0,0-2.014,1.015v3.727a2.3,2.3,0,0,0,1.919,1.11C1340.259,3357.582,1340.83,3356.028,1340.83,3354.616Zm2.473.016c0-2.236,1.285-3.981,3.648-3.981,2.458,0,3.569,1.7,3.569,4,0,2.237-1.3,4-3.664,4C1344.4,3358.645,1343.3,3356.9,1343.3,3354.632Zm5.821.032c0-1.475-.539-2.966-2.189-2.966-1.713,0-2.236,1.507-2.236,2.9,0,1.459.492,3,2.173,3C1348.537,3357.6,1349.124,3356.139,1349.124,3354.664Zm2.759,3.489v-7.01c0-.222.079-.317.3-.317h.7c.19,0,.3.079.3.285l.016.54a2.211,2.211,0,0,1,1.856-1c.349,0,.586.048.555.286l-.111.714a.2.2,0,0,1-.222.19,4.058,4.058,0,0,0-.46-.048,2.076,2.076,0,0,0-1.586.952v5.408a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,1351.883,3358.153Zm5.677-2.014v-4.362h-.872c-.175,0-.238-.063-.238-.238v-.475c0-.175.063-.238.238-.238h.872v-1.792c0-.206.048-.3.238-.333l.793-.111c.222-.032.318.063.318.269v1.967h1.855c.175,0,.238.063.238.238v.475c0,.175-.063.238-.238.238h-1.855v4.267c0,1.031.19,1.538,1.125,1.538a2.933,2.933,0,0,0,.968-.174c.159-.064.285-.032.333.143l.143.475c.047.175-.016.254-.207.333a4.515,4.515,0,0,1-1.49.286C1357.941,3358.645,1357.56,3357.757,1357.56,3356.139Zm10.311,3.447,5.157-5.157a.622.622,0,0,0,0-.879l-5.157-5.157a.622.622,0,0,0-.879.88l4.717,4.717-4.717,4.717a.622.622,0,1,0,.879.879Zm-6.178-10.14a1.259,1.259,0,0,1,2.518,0,1.259,1.259,0,0,1-2.518,0Zm2.288,0a1.029,1.029,0,1,0-1.029,1.025A.984.984,0,0,0,1363.981,3349.45Zm-1.385.575v-1.14c0-.035.014-.046.046-.046h.254c.254,0,.453.087.453.367a.359.359,0,0,1-.241.341l.287.478c.013.024.017.045-.025.045h-.118a.06.06,0,0,1-.06-.031l-.261-.457h-.147v.443c0,.035-.014.045-.042.045h-.1C1362.61,3350.07,1362.6,3350.06,1362.6,3350.025Zm.311-.593a.219.219,0,0,0,.25-.223c0-.16-.1-.216-.275-.216h-.1v.439Zm-104.768-17.551a.887.887,0,0,0,1.775,0v-5.951a.887.887,0,0,0-1.775,0Zm-2.83-1.166a.914.914,0,1,0,1.829,0v-8.805a.914.914,0,1,0-1.829,0Zm-2.83-.674a.914.914,0,0,0,1.829,0v-9.809a.914.914,0,1,0-1.829,0Zm-2.831.211a.915.915,0,0,0,1.83,0v-7.295a.915.915,0,0,0-1.83,0Zm2.638,8.286a.9.9,0,0,1-.8.5.885.885,0,0,1-.388-.089,7.235,7.235,0,0,1-4.275-6.911v-3.575a.892.892,0,1,1,1.783,0v3.575a5.486,5.486,0,0,0,3.27,5.307.892.892,0,0,1,.413,1.19" fill="#595454"/>
            <path id="Path_159" data-name="Path 159" d="M1263.629,3358.169l3.981-10.388a.305.305,0,0,1,.286-.222h.84a.277.277,0,0,1,.286.19l3.917,10.42c.079.19.048.317-.206.317h-1.015c-.222,0-.317-.063-.381-.253l-1.062-2.982h-4.108l-1.095,2.982c-.063.19-.158.253-.38.253h-.872C1263.582,3358.486,1263.55,3358.359,1263.629,3358.169Zm6.265-4.012-1.633-4.711h-.016l-1.7,4.711Zm3.631.507a3.675,3.675,0,0,1,3.791-4.013,4.686,4.686,0,0,1,2.046.46c.143.08.206.175.143.333l-.175.492c-.047.143-.142.206-.333.127a3.717,3.717,0,0,0-1.618-.365c-1.506,0-2.458,1.126-2.458,2.9,0,1.617.7,3.013,2.4,3.013a4.02,4.02,0,0,0,1.76-.365.216.216,0,0,1,.318.127l.143.444c.063.191.031.286-.175.381a5.041,5.041,0,0,1-2.142.444C1274.731,3358.645,1273.525,3357.027,1273.525,3354.664Zm6.708,0a3.675,3.675,0,0,1,3.791-4.013,4.682,4.682,0,0,1,2.046.46c.143.08.206.175.143.333l-.175.492c-.047.143-.142.206-.333.127a3.716,3.716,0,0,0-1.617-.365c-1.507,0-2.459,1.126-2.459,2.9,0,1.617.7,3.013,2.4,3.013a4.025,4.025,0,0,0,1.761-.365.215.215,0,0,1,.317.127l.143.444c.063.191.031.286-.175.381a5.036,5.036,0,0,1-2.141.444C1281.439,3358.645,1280.233,3357.027,1280.233,3354.664Zm6.677-.016c0-2.315,1.364-4,3.648-4a3.048,3.048,0,0,1,3.108,3.363v.4c0,.365-.063.444-.476.444h-4.868a2.457,2.457,0,0,0,2.442,2.681,5.091,5.091,0,0,0,1.951-.333c.143-.064.285-.064.348.111l.191.523c.063.175.016.254-.159.349a6.167,6.167,0,0,1-2.506.46C1288.179,3358.645,1286.91,3357.027,1286.91,3354.648Zm5.424-.714v-.285a1.769,1.769,0,0,0-1.84-1.951,2.194,2.194,0,0,0-2.141,2.236Zm2.521,4.2c-.142-.079-.206-.174-.142-.317l.2-.539a.2.2,0,0,1,.3-.143,5.092,5.092,0,0,0,1.84.476c.92,0,1.538-.46,1.538-1.205,0-.619-.444-.952-1.189-1.237l-1.063-.413a2.159,2.159,0,0,1-1.586-2c0-1.4,1.237-2.11,2.633-2.11a4.735,4.735,0,0,1,2.046.429.218.218,0,0,1,.142.3l-.19.523c-.048.159-.159.191-.317.127a4.633,4.633,0,0,0-1.65-.38c-.935,0-1.348.475-1.348,1.015s.365.793,1.031,1.078l1.221.524a2.232,2.232,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,1294.855,3358.137Zm6.28,0c-.143-.079-.206-.174-.143-.317l.206-.539a.2.2,0,0,1,.3-.143,5.086,5.086,0,0,0,1.839.476c.921,0,1.539-.46,1.539-1.205,0-.619-.444-.952-1.19-1.237l-1.062-.413a2.159,2.159,0,0,1-1.586-2c0-1.4,1.237-2.11,2.633-2.11a4.735,4.735,0,0,1,2.046.429.218.218,0,0,1,.142.3l-.19.523c-.047.159-.159.191-.317.127a4.633,4.633,0,0,0-1.65-.38c-.936,0-1.348.475-1.348,1.015s.365.793,1.031,1.078l1.222.524a2.232,2.232,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,1301.135,3358.137Zm70.407-32.284c0,.648-.294.951-.81.951s-.811-.3-.811-.951.294-.97.811-.97.81.322.81.97m14.254,6.613c0,1.993-.7,2.642-1.836,2.642s-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643Zm-1.677-4.89a2.021,2.021,0,0,0-1.915,1.171h-.063v-3.7h-1.329v11.076h1.329v-1.013h.063a2.021,2.021,0,0,0,1.915,1.171c2.073,0,3.022-1.424,3.022-3.734v-1.234c0-2.31-.949-3.735-3.022-3.735m-5.956,4.89c0,1.993-.7,2.642-1.835,2.642s-1.836-.649-1.836-2.642v-1.076c0-1.994.7-2.643,1.836-2.643s1.835.649,1.835,2.643Zm-1.677-4.89a2.02,2.02,0,0,0-1.915,1.171h-.063v-3.7h-1.329v11.076h1.329v-1.013h.063a2.02,2.02,0,0,0,1.915,1.171c2.072,0,3.022-1.424,3.022-3.734v-1.234c0-2.31-.95-3.735-3.022-3.735m-6.419.159h1.329v8.386h-1.329Zm-3.036,0h1.329v8.386h-1.329v-1.076h-.063a2.154,2.154,0,0,1-2.057,1.234c-1.566,0-2.532-.886-2.532-2.864v-5.68h1.345v5.49c0,1.345.554,1.931,1.551,1.931.965,0,1.756-.649,1.756-2.279Zm-9.254,7.373c-1.139,0-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643v1.076c0,1.993-.7,2.642-1.836,2.642m1.82-6.361h-.064a2.036,2.036,0,0,0-1.914-1.171c-2.073,0-3.022,1.425-3.022,3.735v1.234c0,2.31.949,3.734,3.022,3.734a2.035,2.035,0,0,0,1.914-1.171h.064v3.7h1.33v-11.076h-1.33Zm-6.005,4.446c0,1.979-1.361,3.086-3.45,3.086-1.962,0-3.576-.949-3.781-3.07h1.471a2.063,2.063,0,0,0,2.294,1.836,1.786,1.786,0,0,0,2.042-1.772c0-3.149-5.633-1.329-5.633-5.459,0-1.772,1.408-2.927,3.37-2.927,1.9,0,3.481.933,3.576,3.117h-1.472a1.909,1.909,0,0,0-2.119-1.883c-1.346,0-1.931.791-1.931,1.629,0,2.785,5.633,1.14,5.633,5.443m-10.564.618c0,1.614-1.2,2.468-2.959,2.468s-2.943-.76-3.038-2.468h1.329c.048,1.028.808,1.361,1.709,1.361s1.63-.4,1.63-1.267c0-2.04-4.573-.632-4.573-3.939,0-1.377,1.013-2.39,2.864-2.39,1.693,0,2.817.839,2.943,2.469H1341.6a1.423,1.423,0,0,0-1.614-1.361c-.965,0-1.567.443-1.567,1.282,0,1.978,4.6.759,4.6,3.845m-7.12-6.076h.411v1.3h-.332c-1.329,0-2.2.665-2.2,2.421v4.668h-1.329v-8.386h1.329v1.5h.064a2.037,2.037,0,0,1,2.057-1.5m-7.95,1.012c1.076,0,1.66.634,1.676,2.564h-3.51c.019-1.93.71-2.564,1.834-2.564m0-1.171c-2.073,0-3.181,1.488-3.181,3.735v1.234c0,2.31,1.108,3.734,3.181,3.734a2.824,2.824,0,0,0,2.975-2.484h-1.361a1.489,1.489,0,0,1-1.614,1.313c-1.139,0-1.836-.649-1.836-2.642v-.111h4.858v-1.044c0-2.247-.949-3.735-3.022-3.735m-4.916.159h1.345l-3.719,11.076h-1.376l.934-2.627-2.722-8.449h1.408l2.01,6.534h.063Zm-8.72-2.69h2.256v11.076h-1.408v-9.541h-.079l-2.833,7.707h-1.725l-2.8-7.707h-.079v9.541h-1.392v-11.076h2.366l2.792,7.693h.079Zm-14.15,0h1.33v11.075h-1.33Zm-2.749,7.421c0,1.993-.7,2.642-1.836,2.642s-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643Zm-1.836-4.89c-2.073,0-3.18,1.425-3.18,3.735v1.234c0,2.31,1.107,3.734,3.18,3.734s3.181-1.424,3.181-3.734v-1.234c0-2.31-1.108-3.735-3.181-3.735m-5.73.159h1.8v1.171h-1.8v4.636c0,1.218.317,1.471,1.124,1.471.221,0,.474-.032.68-.048v1.14a5.03,5.03,0,0,1-.823.079c-1.645,0-2.31-.649-2.31-2.437v-4.841h-1.409v-1.171h1.409v-2.69h1.329Zm-3.067,6.076c0,1.614-1.2,2.468-2.958,2.468-1.773,0-2.944-.76-3.039-2.468h1.33c.047,1.028.806,1.361,1.709,1.361s1.629-.4,1.629-1.267c0-2.04-4.573-.632-4.573-3.939,0-1.377,1.013-2.39,2.864-2.39,1.694,0,2.817.839,2.944,2.469h-1.33a1.423,1.423,0,0,0-1.614-1.361c-.965,0-1.566.443-1.566,1.282,0,1.978,4.6.759,4.6,3.845m-7.226-7.958c0,.648-.295.951-.811.951s-.811-.3-.811-.951.294-.97.811-.97.811.322.811.97m-1.476,1.882h1.329v8.386h-1.329Zm-1.594,0h.412v1.3h-.333c-1.329,0-2.2.665-2.2,2.421v4.668h-1.329v-8.386h1.329v1.5h.063a2.039,2.039,0,0,1,2.057-1.5m-6.113,5.268c0,1.371-1.08,1.883-2.655,1.883h-1.811v-3.993h1.836c1.551,0,2.63.516,2.63,1.936Zm-4.466-6.708h1.628c1.552,0,2.343.587,2.343,1.64v.11c0,1.271-1.1,1.678-2.541,1.678h-1.43Zm3.472,3.905v-.055a2.345,2.345,0,0,0,1.865-2.324v-.19c0-1.419-1.153-2.586-3.506-2.586h-3.256v11.076h3.492c2.287,0,3.857-1.15,3.857-2.99v-.111a2.764,2.764,0,0,0-2.453-2.82m118.074-2.917V3325.3h.6v-.256h-1.487v.256h.6v1.982Zm2.957,0v-2.238h-.474l-.553,1.733h-.016l-.546-1.733h-.5v2.238h.281v-1.928h.016l.608,1.928h.268l.611-1.928h.016v1.928Zm-3.1,14.6a.177.177,0,0,0-.178-.178H1264.5a.177.177,0,1,0,0,.355h122.645A.177.177,0,0,0,1387.319,3341.882Z" fill="#595454"/>
          </g>
        </g>
        <g id="Wireless_Icon" data-name="Wireless Icon">
          <path id="Path_172" data-name="Path 172" d="M1184.965,3342.894c0,.021,0,.042,0,.065a10,10,0,0,0,1.9,5.862,6.845,6.845,0,0,0,.439.571,1.814,1.814,0,0,0,2.7-2.419s-.021-.025-.053-.066l.007-.007.014.014a2.127,2.127,0,0,1-.17-.208,6.609,6.609,0,0,1,0-7.619,2.619,2.619,0,0,1,.171-.21l-.014.014-.007-.007c.032-.041.053-.065.053-.065a1.814,1.814,0,1,0-2.705-2.418,6.958,6.958,0,0,0-.44.572,10.01,10.01,0,0,0-1.9,5.86Z" fill="#267148"/>
          <path id="Path_173" data-name="Path 173" d="M1182.3,3332.628a1.781,1.781,0,0,1,1.413,2.862,13.228,13.228,0,0,0-2.045,7.346,14.553,14.553,0,0,0,2.083,7.641,1.78,1.78,0,0,1-2.9,2.06,17.829,17.829,0,0,1-2.74-9.7,16.512,16.512,0,0,1,2.777-9.508A1.776,1.776,0,0,1,1182.3,3332.628Z" fill="#267148"/>
          <path id="Path_174" data-name="Path 174" d="M1175.764,3329.23a1.782,1.782,0,0,1,1.425,2.847,19.456,19.456,0,0,0-2.94,10.712,21.038,21.038,0,0,0,2.977,11.1,1.781,1.781,0,0,1-2.926,2.03,24.5,24.5,0,0,1-3.612-13.131,22.618,22.618,0,0,1,3.648-12.843A1.779,1.779,0,0,1,1175.764,3329.23Z" fill="#267148"/>
          <path id="Path_175" data-name="Path 175" d="M1169.326,3325.7a1.78,1.78,0,0,1,1.426,2.846,25.7,25.7,0,0,0-3.913,14.189,28.121,28.121,0,0,0,3.952,14.681,1.78,1.78,0,0,1-2.928,2.026,31.155,31.155,0,0,1-4.585-16.707c0-10.019,4.433-16.068,4.621-16.32A1.777,1.777,0,0,1,1169.326,3325.7Z" fill="#267148"/>
        </g>
      </g>
    </svg>


  )
}