import App from "../App";

const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "assets",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "react.svg",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"5",
            // element:<App/>,
            name: "App.jsx",
            isFolder: false,
            items: []
          },
          {
            id:"6",
            name: "main.jsx",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"7",
        // path:"",
        name: "index.html",
        isFolder: false,
        items: []
      },
     
    ]
  };
  
  export default explorer;