// import React,{Component} from "react";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./video.css"
// export default class Videos extends Component{
//     constructor()
//     {
//         super();
//         this.state={
//             Embdata:[]
//         };
//     }
//     componentDidMount=()=>{
//         let dataArray;
//         axios.get("/video").then(res=>{
//             dataArray=res.data.data;
//             console.log(dataArray);
//             this.setState({
//               Embdata: dataArray,
//             });
//         });
//         console.log(this.state.Embdata)
//     }
//     render(){
//             console.log(this.state.Embdata)
//             const displayVideos = this.state.Embdata.forEach((videos) => {
//                 <iframe
//                   src={
//                     videos.link +
//                     "?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=216824"
//                   }
//                   width="900"
//                   height="800"
//                   allow="picture-in-picture"
//                   frameborder="0"
//                   title={videos.name}
//                 ></iframe>;
//                 console.log(videos.link);
//                 console.log(videos)
//             });
//         return(
//             <div>Video Data
//                 {displayVideos}
//             </div>
//         );
//     }
// }
export default function Videos() {
  let dataArray;
  const [videos, Embdata] = useState([]);
  const getVideos = async () => {
    try {
      axios.get("/video").then((res) => {
        dataArray = res.data;
        console.log(dataArray);
        Embdata(dataArray);
      });
    } catch (err) {}
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.log(videos);
  const displayVideos = videos.map((video,index) => {
    return (
      // <iframe
      //   src={video.link}
      //   width="900"
      //   height="800"
      //   allow=" autoplay; picture-in-picture"
      //   frameborder="0"
      //   allowFullscreen
      //   title={video.name}
      // ></iframe>
      // <iframe
      //   key={index}
      //   src={video.link }
      //   width="900"
      //   height="800"
      //   frameBorder="0"
      //   allow="autoplay; fullscreen; picture-in-picture;encrypted-media"
      //   title={video.name}
      // ></iframe>
      <div className="player-wrapper">
        <ReactPlayer
          key={index}
          url={
            video.link +
            "?badge=0&amp;autopause=0&amp;output=embed&amp;player_id=0&amp;app_id=216824"
          }
          className="react-player"
          width="500px"
          height="400px"
          // frameBorder="0"
          // allow="autoplay; fullscreen; picture-in-picture;encrypted-media"
          // title={video.name}
        />
      </div>
    );
  });
  return (<div>{displayVideos}</div>);
}
