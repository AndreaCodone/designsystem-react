import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";
import { Button } from "./components/buttons";
import {
  InputText,
  InputPassword,
  InputToggle,
  InputSelect,
  DropdownSelect,
} from "./components/form";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };

  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputDropdownValue, setInpuDropdownValue] = useState();

  console.log(inputDropdownValue);

  const options = {
    name: "products",
    id: "products",
    options: [
      {
        id: 1,
        label: "Italy",
        value: "Italy",
      },
      {
        id: 2,
        label: "Spain",
        value: "Spain",
      },
      {
        id: 3,
        label: "France",
        value: "France",
      },
      {
        id: 4,
        label: "Switzerland",
        value: "Switzerland",
      },
      {
        id: 5,
        label: "Estonia",
        value: "Estonia",
      },
      {
        id: 6,
        label: "Croatia",
        value: "Croatia",
      },
      {
        id: 7,
        label: "Algeria",
        value: "Algeria",
      },
    ],
  };

  return (
    <>
      <Header />

      <Hero />

      <InputSelect
        label={"Inserisci la tua nazione"}
        options={options}
        defaultValue={options?.options[0]?.value}
        handleChange={setInputSelectValue}
      />

      <InputText
        id={"name"}
        name="name"
        placeholder="Inserisci il tuo nome"
        label={"Name"}
        // error
        // errorMessage={"Inserisci il tuo nome"}
        handleChange={setInputTextValue}
      />

      <InputPassword
        id={"password"}
        name="password"
        placeholder="Inserisci la tua password"
        label={"Password"}
        // error
        // errorMessage={"Inserisci la tua password"}
        handleChange={setInputPasswordValue}
      />

      <div>
        <Button label="Accedi" icon outline size="sm" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="Accedi" outline size="md" />
        </div>
      )}

      {/* <InputSelect
        options={options}
        defaultValue={options?.options[0]?.value}
        handleChange={setInputSelectValue}
      />

      <DropdownSelect options={options} handleChange={setInpuDropdownValue} /> */}

      {/* <div onClick={() => toggleButtonXl()}>
        <Button label="go to" icon iconLeft size="sm" square />
      </div>
      <div>
        <Button label="go to" icon outline size="md" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="go to" outline size="xl" />
        </div>
      )} */}

      {/* <InputToggle /> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
        </div>
        <div className="row">
          <div className="col-5">col5</div>
          <div className="col-7">col7</div>
        </div>
        <div className="row">
          <div className="col-12">col12</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-6">col6</div>
        </div>
        <div className="row space-between">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-8">col8</div>
        </div>
        <div className="row">
          <div className="col-xs-1">Col-xs-1</div>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />
        <div className="row">
          <div className="col-xs-6 col-sm-2 col-md-4">A</div>
          <div className="col-xs-6 col-sm-6 col-md-4">B</div>
          <div className="col-xs-12 col-sm-4 col-md-4">C</div>
        </div>

        <div className="row-g">
          <div className="col-g-1">A</div>
          <div className="col-g-1">B</div>
        </div>
      </div> */}
    </>
  );
}

export default App;
