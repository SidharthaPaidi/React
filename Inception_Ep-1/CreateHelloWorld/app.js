const heading = React.createElement("h1", {id : "heading"}, "Hello from Sidhu by REACT")

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, 
    [React.createElement("h1", {}, "Hii from nest"), React.createElement("h1", {}, "Hii from nest")]),
    React.createElement("div", { id: "child2" }, 
    [React.createElement("h1", {}, "Hii from nest"), React.createElement("h1", {}, "Hii from nest")])]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
root.render(parent)

console.log(parent)