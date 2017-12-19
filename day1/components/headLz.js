import React from 'react';


var styLz = {
    position: "absolute",
    top: "50%",
    right: "2px",
    width: "35px",
    marginTop: "-61px"
}
var sLz = {
    position: "relative",
    width: "35px",
    height: "35px",
    marginBottom: "1px",
    cursor: "pointer",
    backgroundColor: "#7a6e6e",
    borderRadius: "3px 0 0 3px"
}
var slz1 = {
    position: "absolute",
    top: "8px",
    right: "10px",
    width: "6px",
    height: '6px',
    display: " inline-block",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundPosition: '-150px -150px',
    zIndex: ' 999'
}
var sLzc = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-88px -175px"
}
var sLzc1 = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-50px 0"
}
var sLzc2 = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-50px -50px"
}
var sLzc3 = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-50px -100px"
}
var sLzc4 = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-190px -150px"
}
var sLzc5 = {
    display: " inline-block",
    width: "34px",
    height: "35px",
    marginLeft: "1px",
    position: "relative",
    zIndex: "2",
    backgroundImage: "url(//static.360buyimg.com/devfe/toolbar/1.0.0/css/i/toolbars.png)",
    backgroundRrepeat: "no-repeat",
    backgroundColor: "#7a6e6e",
    backgroundPosition: "-50px -150px"
}
var aLZ = {
    display: "block",
    overflow: 'hidden',
    position: ' absolute',
    left: '-225px',
    top: '50%',
    width: '350px',
    height: '480px',
    marginTop: "-240px"
}
var imgLz = {
    float: "right",
    border: "0",
    verticalAlign: "middle"
}
class HeadLz extends React.Component {

        render() {
            return ( <
                div className = "boxLz" >


                <
                a href = "#"
                style = { aLZ } >

                <
                img src = "https://img14.360buyimg.com/da/jfs/t14584/6/171502270/50219/f1e459f9/5a2573acNd913ebfc.png"
                style = { imgLz }
                /> < /
                a >






















                <
                ul className = "ulLz"
                style = { styLz } >
                <
                li style = { sLz } >
                <
                i style = { sLzc } > < /i> < /
                li >
                <
                li style = { sLz } >
                <
                i style = { sLzc1 } > < /i> < /
                li >
                <
                li style = { sLz } >
                <
                i style = { sLzc2 } > < /i> < /
                li >
                <
                li style = { sLz } >
                <
                i style = { sLzc3 } > < /i> < /
                li >
                <
                li style = { sLz } >
                <
                i style = { sLzc4 } > < /i> < /
                li >
                <
                li style = { sLz } >
                <
                i style = { sLzc5 } > < /i> < /
                li >
                <
                /
                ul >

                <
                /div>)
            }
        }


        export default HeadLz;