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
    <svg  width="277.719" height="363.511" viewBox="0 0 277.719 363.511">
      <g id="Access" transform="translate(-432.519 -3017.102)">
        <g id="Background">
          <g id="Group_100" data-name="Group 100">
            <g id="Group_99" data-name="Group 99">
              <path id="Path_139" data-name="Path 139" d="M696.529,3380.613h-250.3a13.708,13.708,0,0,1-13.709-13.709V3030.812a13.71,13.71,0,0,1,13.709-13.71h250.3a13.709,13.709,0,0,1,13.709,13.71V3366.9a13.708,13.708,0,0,1-13.709,13.709ZM533.459,3033.5a7.955,7.955,0,0,0,0,15.911H609.3a7.955,7.955,0,0,0,0-15.911Z" fill="#fff"/>
            </g>
          </g>
        </g>
        <text id="Access_Reimbursement_Support" data-name="Access &amp; Reimbursement Support" transform="translate(456.696 3188.093)" fill="#453939" fontSize="30"  fontWeight="700"><tspan x="0" y="32">Access &amp; </tspan><tspan x="0" y="65.609">Reimbursement </tspan><tspan x="0" y="99.219">Support</tspan></text>
        <path id="Accent" d="M0,0H277.277a0,0,0,0,1,0,0V60.067a14.256,14.256,0,0,1-14.256,14.256H14.256A14.256,14.256,0,0,1,0,60.067V0A0,0,0,0,1,0,0Z" transform="translate(432.519 3305.796)" fill="#feeec4" opacity="0.6"/>
        <g id="AccessIcon">
          <path id="Path_147" data-name="Path 147" d="M594.393,3093.422h-6.158a18.318,18.318,0,0,0-35.312,0h-6.17a1.832,1.832,0,0,0-1.833,1.832v14.694a1.833,1.833,0,0,0,1.833,1.832h6.725a7.438,7.438,0,0,0,7.426,7.294h1.118v1.222a1.222,1.222,0,0,0,1.221,1.222h9.773a1.222,1.222,0,0,0,1.221-1.222v-6.108a1.221,1.221,0,0,0-1.221-1.221h-9.773a1.221,1.221,0,0,0-1.221,1.221v2.443H560.9a5,5,0,0,1-4.99-4.988h-.009v-13.335h.015a14.659,14.659,0,0,1,29.318,0h0v11.64a1.833,1.833,0,0,0,1.833,1.832h7.32a1.832,1.832,0,0,0,1.832-1.832v-14.694A1.832,1.832,0,0,0,594.393,3093.422Zm-29.928,21.988h7.329v3.664h-7.329Zm-12.225-7.294h-3.655v-11.029h3.655Zm40.321,0h-3.656v-11.029h3.656Z" fill="#453838"/>
          <path id="Path_148" data-name="Path 148" d="M543.09,3160.607a1.217,1.217,0,0,1-1.211-1.383,51.26,51.26,0,0,1,7.938-21.238c5.546-8.153,13.072-12.827,20.651-12.827h.032c7.612.014,15.168,4.631,20.733,12.669a49.362,49.362,0,0,1,8.035,21.408,1.218,1.218,0,0,1-1.213,1.371h-1.244a1.224,1.224,0,0,1-1.208-1.06c-2.421-17.02-13.1-30.7-25.109-30.723h-.027c-11.841,0-22.423,13.657-24.949,30.731a1.222,1.222,0,0,1-1.206,1.052Z" fill="#c06005"/>
        </g>
        <g id="BmsLogo">
          <g id="Group_110" data-name="Group 110">
            <path id="Path_154" data-name="Path 154" d="M607.03,3358.2a.293.293,0,0,1-.207-.4l.207-.713c.063-.206.222-.238.412-.159a6.191,6.191,0,0,0,2.252.46c1.079,0,2.221-.507,2.221-1.761,0-.888-.523-1.348-1.4-1.808l-2.015-1.078a2.868,2.868,0,0,1-1.744-2.569c0-1.824,1.7-2.808,3.362-2.808a5.8,5.8,0,0,1,2.586.508c.19.095.238.206.174.381l-.238.634c-.063.19-.206.238-.412.143a5.131,5.131,0,0,0-2.03-.46c-.889,0-1.92.412-1.92,1.475,0,.824.476,1.237,1.238,1.633l1.7.9c1.269.667,2.157,1.46,2.157,2.934,0,2.078-1.729,3.125-3.68,3.125A8.314,8.314,0,0,1,607.03,3358.2Zm7.612-2.427v-4.631a.278.278,0,0,1,.317-.317h.73c.206,0,.3.095.3.317v4.425c0,1.126.254,1.919,1.523,1.919a3.524,3.524,0,0,0,2.093-.935v-5.409a.278.278,0,0,1,.317-.317h.73c.206,0,.3.095.3.317v7.026c0,.222-.079.317-.3.317h-.7c-.19,0-.3-.079-.3-.285l-.016-.508a3.828,3.828,0,0,1-2.506.952C615.308,3358.645,614.642,3357.471,614.642,3355.774Zm8.1,5.789v-10.42c0-.222.079-.317.3-.317h.651c.19,0,.3.079.3.285l.016.555a3.235,3.235,0,0,1,2.363-1.015c2.252,0,3.251,1.888,3.251,3.934,0,2.109-1.142,4.06-3.442,4.06a2.742,2.742,0,0,1-2.093-.888v3.806a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,622.746,3361.563Zm5.472-6.947c0-1.379-.46-2.886-2.11-2.886a2.666,2.666,0,0,0-2.014,1.015v3.727a2.3,2.3,0,0,0,1.919,1.11C627.647,3357.582,628.218,3356.028,628.218,3354.616Zm2.838,6.947v-10.42c0-.222.079-.317.3-.317h.651c.19,0,.3.079.3.285l.016.555a3.235,3.235,0,0,1,2.363-1.015c2.252,0,3.251,1.888,3.251,3.934,0,2.109-1.142,4.06-3.442,4.06a2.742,2.742,0,0,1-2.093-.888v3.806a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,631.056,3361.563Zm5.471-6.947c0-1.379-.459-2.886-2.109-2.886a2.666,2.666,0,0,0-2.014,1.015v3.727a2.3,2.3,0,0,0,1.919,1.11C635.956,3357.582,636.527,3356.028,636.527,3354.616Zm2.474.016c0-2.236,1.284-3.981,3.648-3.981,2.458,0,3.568,1.7,3.568,4,0,2.237-1.3,4-3.664,4C640.095,3358.645,639,3356.9,639,3354.632Zm5.821.032c0-1.475-.54-2.966-2.189-2.966-1.714,0-2.237,1.507-2.237,2.9,0,1.459.492,3,2.173,3S644.822,3356.139,644.822,3354.664Zm2.758,3.489v-7.01c0-.222.08-.317.3-.317h.7c.19,0,.3.079.3.285l.016.54a2.208,2.208,0,0,1,1.855-1c.349,0,.587.048.555.286l-.111.714a.2.2,0,0,1-.222.19,4.031,4.031,0,0,0-.46-.048,2.077,2.077,0,0,0-1.586.952v5.408a.29.29,0,0,1-.317.333H647.9A.29.29,0,0,1,647.58,3358.153Zm5.678-2.014v-4.362h-.873c-.174,0-.237-.063-.237-.238v-.475c0-.175.063-.238.237-.238h.873v-1.792c0-.206.047-.3.238-.333l.793-.111c.222-.032.317.063.317.269v1.967h1.856c.174,0,.237.063.237.238v.475c0,.175-.063.238-.237.238h-1.856v4.267c0,1.031.19,1.538,1.126,1.538a2.923,2.923,0,0,0,.967-.174c.159-.064.286-.032.334.143l.142.475c.048.175-.016.254-.206.333a4.526,4.526,0,0,1-1.491.286C653.639,3358.645,653.258,3357.757,653.258,3356.139Zm10.311,3.447,5.156-5.157a.619.619,0,0,0,0-.879l-5.156-5.157a.622.622,0,1,0-.88.88l4.717,4.717-4.717,4.717a.622.622,0,0,0,.88.879Zm-6.179-10.14a1.259,1.259,0,0,1,2.518,0,1.259,1.259,0,0,1-2.518,0Zm2.288,0a1.029,1.029,0,1,0-1.029,1.025A.984.984,0,0,0,659.678,3349.45Zm-1.385.575v-1.14c0-.035.014-.046.046-.046h.254c.255,0,.454.087.454.367a.361.361,0,0,1-.241.341l.286.478c.014.024.018.045-.024.045h-.119a.059.059,0,0,1-.059-.031l-.262-.457h-.146v.443c0,.035-.014.045-.042.045h-.1C658.307,3350.07,658.293,3350.06,658.293,3350.025Zm.311-.593c.147,0,.251-.076.251-.223s-.1-.216-.276-.216h-.1v.439Zm-104.767-17.551a.887.887,0,0,0,1.774,0v-5.951a.887.887,0,0,0-1.774,0Zm-2.83-1.166a.914.914,0,1,0,1.829,0v-8.805a.914.914,0,1,0-1.829,0Zm-2.831-.674a.915.915,0,0,0,1.83,0v-9.809a.915.915,0,1,0-1.83,0Zm-2.83.211a.914.914,0,1,0,1.829,0v-7.295a.914.914,0,1,0-1.829,0Zm2.637,8.286a.9.9,0,0,1-.8.5.881.881,0,0,1-.388-.089,7.235,7.235,0,0,1-4.275-6.911v-3.575a.891.891,0,1,1,1.782,0v3.575a5.487,5.487,0,0,0,3.271,5.307.891.891,0,0,1,.412,1.19" fill="#595454"/>
            <path id="Path_155" data-name="Path 155" d="M559.327,3358.169l3.981-10.388a.305.305,0,0,1,.285-.222h.841a.278.278,0,0,1,.286.19l3.917,10.42c.079.19.047.317-.206.317h-1.015c-.222,0-.317-.063-.381-.253l-1.063-2.982h-4.108l-1.094,2.982c-.063.19-.158.253-.38.253h-.873C559.279,3358.486,559.248,3358.359,559.327,3358.169Zm6.265-4.012-1.634-4.711h-.016l-1.7,4.711Zm3.631.507a3.674,3.674,0,0,1,3.79-4.013,4.691,4.691,0,0,1,2.047.46c.142.08.206.175.142.333l-.174.492c-.048.143-.143.206-.333.127a3.721,3.721,0,0,0-1.618-.365c-1.507,0-2.459,1.126-2.459,2.9,0,1.617.7,3.013,2.4,3.013a4.025,4.025,0,0,0,1.761-.365.215.215,0,0,1,.317.127l.143.444c.063.191.032.286-.174.381a5.04,5.04,0,0,1-2.142.444C570.428,3358.645,569.223,3357.027,569.223,3354.664Zm6.708,0a3.674,3.674,0,0,1,3.791-4.013,4.69,4.69,0,0,1,2.046.46c.142.08.206.175.142.333l-.174.492c-.048.143-.143.206-.333.127a3.718,3.718,0,0,0-1.618-.365c-1.507,0-2.459,1.126-2.459,2.9,0,1.617.7,3.013,2.4,3.013a4.02,4.02,0,0,0,1.76-.365.215.215,0,0,1,.317.127l.143.444c.063.191.032.286-.174.381a5.04,5.04,0,0,1-2.142.444C577.136,3358.645,575.931,3357.027,575.931,3354.664Zm6.676-.016c0-2.315,1.365-4,3.648-4a3.048,3.048,0,0,1,3.109,3.363v.4c0,.365-.064.444-.476.444h-4.869a2.458,2.458,0,0,0,2.442,2.681,5.085,5.085,0,0,0,1.951-.333c.143-.064.286-.064.349.111l.19.523c.064.175.016.254-.158.349a6.17,6.17,0,0,1-2.506.46C583.876,3358.645,582.607,3357.027,582.607,3354.648Zm5.425-.714v-.285a1.769,1.769,0,0,0-1.84-1.951,2.194,2.194,0,0,0-2.141,2.236Zm2.521,4.2c-.143-.079-.207-.174-.143-.317l.206-.539a.2.2,0,0,1,.3-.143,5.1,5.1,0,0,0,1.84.476c.92,0,1.539-.46,1.539-1.205,0-.619-.444-.952-1.19-1.237l-1.062-.413a2.157,2.157,0,0,1-1.586-2c0-1.4,1.237-2.11,2.632-2.11a4.735,4.735,0,0,1,2.046.429.218.218,0,0,1,.143.3l-.19.523c-.048.159-.159.191-.318.127a4.628,4.628,0,0,0-1.649-.38c-.936,0-1.348.475-1.348,1.015s.365.793,1.031,1.078l1.221.524a2.233,2.233,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,590.553,3358.137Zm6.279,0c-.142-.079-.206-.174-.142-.317l.206-.539a.2.2,0,0,1,.3-.143,5.1,5.1,0,0,0,1.84.476c.92,0,1.539-.46,1.539-1.205,0-.619-.444-.952-1.19-1.237l-1.063-.413a2.159,2.159,0,0,1-1.586-2c0-1.4,1.237-2.11,2.633-2.11a4.735,4.735,0,0,1,2.046.429.218.218,0,0,1,.143.3l-.19.523c-.048.159-.159.191-.317.127a4.634,4.634,0,0,0-1.65-.38c-.936,0-1.348.475-1.348,1.015s.364.793,1.031,1.078l1.221.524a2.233,2.233,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,596.832,3358.137Zm70.408-32.284c0,.648-.295.951-.811.951s-.811-.3-.811-.951.3-.97.811-.97.811.322.811.97m14.254,6.613c0,1.993-.7,2.642-1.836,2.642s-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643Zm-1.677-4.89a2.021,2.021,0,0,0-1.915,1.171h-.063v-3.7H676.51v11.076h1.329v-1.013h.063a2.021,2.021,0,0,0,1.915,1.171c2.072,0,3.022-1.424,3.022-3.734v-1.234c0-2.31-.95-3.735-3.022-3.735m-5.956,4.89c0,1.993-.7,2.642-1.836,2.642s-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643Zm-1.678-4.89a2.02,2.02,0,0,0-1.914,1.171h-.064v-3.7h-1.328v11.076h1.328v-1.013h.064a2.02,2.02,0,0,0,1.914,1.171c2.073,0,3.023-1.424,3.023-3.734v-1.234c0-2.31-.95-3.735-3.023-3.735m-6.418.159h1.329v8.386h-1.329Zm-3.036,0h1.329v8.386h-1.329v-1.076h-.063a2.156,2.156,0,0,1-2.058,1.234c-1.566,0-2.531-.886-2.531-2.864v-5.68h1.345v5.49c0,1.345.554,1.931,1.55,1.931.966,0,1.757-.649,1.757-2.279Zm-9.254,7.373c-1.139,0-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.836.649,1.836,2.643v1.076c0,1.993-.7,2.642-1.836,2.642m1.82-6.361h-.065a2.035,2.035,0,0,0-1.913-1.171c-2.073,0-3.022,1.425-3.022,3.735v1.234c0,2.31.949,3.734,3.022,3.734a2.035,2.035,0,0,0,1.913-1.171h.065v3.7h1.329v-11.076h-1.329Zm-6.006,4.446c0,1.979-1.36,3.086-3.449,3.086-1.962,0-3.576-.949-3.782-3.07h1.472a2.063,2.063,0,0,0,2.294,1.836,1.786,1.786,0,0,0,2.041-1.772c0-3.149-5.633-1.329-5.633-5.459,0-1.772,1.408-2.927,3.371-2.927,1.9,0,3.481.933,3.576,3.117h-1.472a1.91,1.91,0,0,0-2.12-1.883c-1.346,0-1.931.791-1.931,1.629,0,2.785,5.633,1.14,5.633,5.443m-10.564.618c0,1.614-1.2,2.468-2.959,2.468s-2.942-.76-3.037-2.468h1.329c.047,1.028.807,1.361,1.708,1.361s1.63-.4,1.63-1.267c0-2.04-4.572-.632-4.572-3.939,0-1.377,1.012-2.39,2.863-2.39,1.693,0,2.817.839,2.944,2.469H637.3a1.422,1.422,0,0,0-1.614-1.361c-.965,0-1.566.443-1.566,1.282,0,1.978,4.6.759,4.6,3.845m-7.12-6.076h.412v1.3h-.333c-1.328,0-2.2.665-2.2,2.421v4.668h-1.329v-8.386h1.329v1.5h.064a2.037,2.037,0,0,1,2.056-1.5m-7.95,1.012c1.077,0,1.66.634,1.676,2.564h-3.509c.018-1.93.71-2.564,1.833-2.564m0-1.171c-2.072,0-3.18,1.488-3.18,3.735v1.234c0,2.31,1.108,3.734,3.18,3.734a2.822,2.822,0,0,0,2.975-2.484h-1.361a1.488,1.488,0,0,1-1.614,1.313c-1.139,0-1.835-.649-1.835-2.642v-.111h4.857v-1.044c0-2.247-.949-3.735-3.022-3.735m-4.916.159h1.345l-3.718,11.076H614.99l.933-2.627-2.722-8.449h1.408l2.01,6.534h.064Zm-8.719-2.69h2.256v11.076h-1.409v-9.541h-.079l-2.833,7.707h-1.724l-2.8-7.707h-.08v9.541h-1.392v-11.076h2.366l2.792,7.693h.079Zm-14.15,0H597.2v11.075H595.87Zm-2.75,7.421c0,1.993-.7,2.642-1.835,2.642s-1.835-.649-1.835-2.642v-1.076c0-1.994.7-2.643,1.835-2.643s1.835.649,1.835,2.643Zm-1.835-4.89c-2.073,0-3.18,1.425-3.18,3.735v1.234c0,2.31,1.107,3.734,3.18,3.734s3.18-1.424,3.18-3.734v-1.234c0-2.31-1.107-3.735-3.18-3.735m-5.73.159h1.8v1.171h-1.8v4.636c0,1.218.316,1.471,1.123,1.471.221,0,.475-.032.68-.048v1.14a5.016,5.016,0,0,1-.822.079c-1.646,0-2.31-.649-2.31-2.437v-4.841h-1.409v-1.171h1.409v-2.69h1.329Zm-3.067,6.076c0,1.614-1.2,2.468-2.959,2.468-1.772,0-2.943-.76-3.038-2.468h1.329c.048,1.028.807,1.361,1.709,1.361s1.63-.4,1.63-1.267c0-2.04-4.573-.632-4.573-3.939,0-1.377,1.012-2.39,2.864-2.39,1.693,0,2.816.839,2.943,2.469h-1.329a1.423,1.423,0,0,0-1.614-1.361c-.965,0-1.566.443-1.566,1.282,0,1.978,4.6.759,4.6,3.845m-7.227-7.958c0,.648-.294.951-.811.951s-.811-.3-.811-.951.3-.97.811-.97.811.322.811.97m-1.475,1.882h1.329v8.386h-1.329Zm-1.594,0h.411v1.3h-.332c-1.329,0-2.2.665-2.2,2.421v4.668h-1.329v-8.386h1.329v1.5h.064a2.037,2.037,0,0,1,2.057-1.5M566.078,3333c0,1.371-1.079,1.883-2.655,1.883h-1.81v-3.993h1.836c1.551,0,2.629.516,2.629,1.936Zm-4.465-6.708h1.628c1.551,0,2.342.587,2.342,1.64v.11c0,1.271-1.1,1.678-2.54,1.678h-1.43Zm3.471,3.905,0-.055a2.346,2.346,0,0,0,1.865-2.324v-.19c0-1.419-1.154-2.586-3.507-2.586h-3.255v11.076h3.491c2.287,0,3.857-1.15,3.857-2.99v-.111a2.763,2.763,0,0,0-2.453-2.82m118.074-2.917V3325.3h.6v-.256h-1.486v.256h.594v1.982Zm2.957,0v-2.238h-.473l-.553,1.733h-.016l-.547-1.733h-.495v2.238h.281v-1.928h.016l.607,1.928h.269l.61-1.928h.016v1.928Zm-3.1,14.6a.178.178,0,0,0-.178-.178H560.193a.177.177,0,0,0,0,.355H682.839A.178.178,0,0,0,683.017,3341.882Z" fill="#595454"/>
          </g>
        </g>
        <g id="RadioWavesIcon">
          <path id="Path_164" data-name="Path 164" d="M478.262,3342.894c0,.021,0,.042,0,.065a10.01,10.01,0,0,0,1.9,5.862,6.725,6.725,0,0,0,.44.571,1.814,1.814,0,0,0,2.7-2.419l-.054-.066.008-.007.014.014a1.978,1.978,0,0,1-.17-.208,6.6,6.6,0,0,1,0-7.619,2.4,2.4,0,0,1,.171-.21l-.014.014-.008-.007c.033-.041.054-.065.054-.065a1.814,1.814,0,0,0-2.7-2.418,6.943,6.943,0,0,0-.44.572,10.01,10.01,0,0,0-1.9,5.86Z" fill="#c06005"/>
          <path id="Path_165" data-name="Path 165" d="M475.592,3332.628a1.781,1.781,0,0,1,1.413,2.862,13.228,13.228,0,0,0-2.045,7.346,14.569,14.569,0,0,0,2.082,7.641,1.78,1.78,0,0,1-2.9,2.06,17.843,17.843,0,0,1-2.739-9.7,16.525,16.525,0,0,1,2.776-9.508A1.777,1.777,0,0,1,475.592,3332.628Z" fill="#c06005"/>
          <path id="Path_166" data-name="Path 166" d="M469.061,3329.23a1.782,1.782,0,0,1,1.425,2.847,19.452,19.452,0,0,0-2.941,10.712,21.048,21.048,0,0,0,2.977,11.1,1.781,1.781,0,0,1-2.926,2.03,24.513,24.513,0,0,1-3.612-13.131,22.615,22.615,0,0,1,3.649-12.843A1.779,1.779,0,0,1,469.061,3329.23Z" fill="#c06005"/>
          <path id="Path_167" data-name="Path 167" d="M462.623,3325.7a1.78,1.78,0,0,1,1.425,2.846,25.7,25.7,0,0,0-3.912,14.189,28.11,28.11,0,0,0,3.952,14.681,1.78,1.78,0,0,1-2.928,2.026,31.151,31.151,0,0,1-4.586-16.707c0-10.019,4.433-16.068,4.622-16.32A1.776,1.776,0,0,1,462.623,3325.7Z" fill="#c06005"/>
        </g>
      </g>
    </svg>

  )
}
