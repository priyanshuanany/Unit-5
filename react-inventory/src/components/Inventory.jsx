import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 25,
  });
    // Create add and remove functions here that changes the
    // state.
    if(inv.books<0){
        inv.books=0;
    }
    if(inv.notebooks<0){
        inv.notebooks=0;
    }
    if(inv.pens<0){
        inv.pens=0;
    }
    if(inv.inkpens<0){
        inv.inkpens=0;
    }
    const handleChange = (item, value) => {
        if(item === "books"){
            setInv(prevState => {
                return{...prevState,books: prevState.books + value}
            })
            console.log(inv)
        }
        else if(item === "notebooks"){
            setInv(prevState => {
                return{...prevState,notebooks: prevState.notebooks + value}
            })
            console.log(inv)
        }
        else if(item === "pens"){
            setInv(prevState => {
                return{...prevState,pens: prevState.pens + value}
            })
            console.log(inv)
        }
        else {
            setInv(prevState => {
                return{...prevState, inkpens: prevState.inkpens + value}
            })
            console.log(inv)
        }
    }



  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={() => handleChange("books", 1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("books", -1)} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={() => handleChange("notebooks",1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("notebooks", -1)} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={() => handleChange("pens",1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("pens", -1)} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button onClick={() => handleChange("inkpens", 1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("inkpens", -1)} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};