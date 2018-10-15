# Generic Tile
`react-generic-tile` is a **KPI tiles** built for React

## Installation
```
npm install react-generic-tile
```
or
```
yarn add react-generic-tile
```

## Demo
![](https://i.imgur.com/BMsecOs.png)

## Example
```
import React from "react";
import ReactDOM from "react-dom";

import GenericTile from "react-generic-tile";

function App() {
  return (
    <div className="App">
      <GenericTile
        header={"Jessica Daniell"}
        subheader={"Senior Consultant, Department Sales & Distribution"}
        loading={false}
        number={"65.5"}
        scale={"MM"}
        color={"Good"}
        indicator={"Up"}
        footer={"This is only example.."}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Avaible tile props

| **Property** | **Type** | **Default** | **Description** |
| --- | :---: | :---: | --- |
| `header` | `String` | '' | Header text |
| `subheader` | `String` | '' | Subheader text |
| `footer` | `String` | '' | Footer text |
| `number` | `String` | '' | Displayed number (could be text also) |
| `scale` | `String` | '' |  Scale text |
| `indicator` | `String` | null | "Up" or "Down" |
| `icon` | `Object` | '' | Icon object |
| `color` | `String` | '' | Hex Color or : "Good", "Warning" or "Bad" |
| `loading` | `Boolean` | false | Loading state |

