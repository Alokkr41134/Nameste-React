// const parent=React.createElement("h1",{class:"heading"},'first react project');


const parent=React.createElement("div",{class:"parent"},React.createElement("div",{class:"child"},
  [React.createElement("h1",{class:"heading"},"I m heading"),
    React.createElement("h2",{class:"2nd heading"},"I m 2nd heading")  // array of two tag h1 and h2
  ]
));

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
