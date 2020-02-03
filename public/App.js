const element = React.createElement("div", null, React.createElement("header", {
  className: "container make-center",
  id: "home"
}, React.createElement("h1", {
  className: "jumbo"
}, React.createElement("b", null, "Yash Jain")), React.createElement("p", null, "Software Engineer"), React.createElement("img", {
  src: "/../images/Photo.jpg"
}), React.createElement("p", null, React.createElement("i", null, "I revel in improving the functioning of people by applying CS disciplines to different business areas and solving their challenging problems excites me!!")), React.createElement("button", null, React.createElement("a", {
  href: "https://github.com/yashj21/"
}, "GitHub Profile"))));
ReactDOM.render(element, document.getElementById('root'));