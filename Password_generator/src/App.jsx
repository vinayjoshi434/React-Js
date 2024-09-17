import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("#f0f0f0");
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [character, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const checkedref = useRef(null);
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTVVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      string += "0123456789";
    }
    if (character) {
      string += "!@#$%^&*?~`|";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
    console.log(pass);
  }, [length, numberAllowed, character, setPassword]);

  const copyGenerated = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const bghandel = () => {
    let isChecked = checkedref.current.checked;
    if (isChecked) setColor("#6495ED");

    if (!isChecked) setColor("#f0f0f0");
  };

  const strengthTracker = useCallback(() => {
    let passval = passref.current.value;
    const checknumstr = "0123456789";
    const checksplstr = "!@#$%^&*?~`|";

    let splcount = 0;
    let numcount = 0;

    const Checknumcount = () => {
      for (const char of passval) {
        if (checknumstr.includes(char)) {
          numcount++;
        }
      }
      return numcount;
    };

    const Checksplcount = () => {
      for (const char of passval) {
        if (checksplstr.includes(char)) {
          splcount++;
        }
      }
      return splcount;
    };

    const num = Checknumcount();
    console.log(num);

    const spl = Checksplcount();
    console.log(spl);

    if (passval === "") {
      setStrength("");
      return;
    }

    if (num > 2 && spl >= 2) {
      setStrength("Good");
    } else if (num >= 1 || spl >= 1) setStrength("Moderate");
    else {
      setStrength("Weak");
    }

    //  if(checkstr.test(passval)){
    //       setStrength("Moderate")
    // }
  }, [length, numberAllowed, character, password]);

  useEffect(() => {
    strengthTracker();
  }, [password, strengthTracker]);

  return (
    <>
      <div
        className=" mx-5 shadow-md rounded-lg py-5  px-3 text-teal-900 gap-6"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-5xl text-center m-5 text-amber-600 underline decoration-lime-300 underline-offset-8">
          Password-Generator
        </h1>
        <div className="flex shadow-md hover:shadow-lg rounded-lg mb-8  justify-around items-center bg-light-green-200">
          <div>
            <label htmlFor="passwordfeild" className="text-xl">
              {" "}
              Password :
            </label>
            <input
              id="passwordfeild"
              type="text"
              value={password}
              className="outline-none w-96 py-2 px-2 m-4 rounded-lg my-2 text-brown-600"
              placeholder="password"
              readOnly
              ref={passref}
            />
            Strength: {strength}
          </div>

          <div className="inline-flex gap-4 rounded-lg">
            <div className="inline-flex items-center gap-2">
              <label
                htmlFor="switch-component-on"
                className="text-slate-600  cursor-pointer text-xl"
              >
                Dark:Off
              </label>

              <div className="relative inline-block w-11 h-5">
                <input
                  id="switch-component-on"
                  type="checkbox"
                  ref={checkedref}
                  className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
                  onClick={bghandel}
                />
                <label
                  htmlFor="switch-component-on"
                  className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                ></label>
              </div>

              <label
                htmlFor="switch-component-on"
                className="text-slate-600  cursor-pointer text-xl"
              >
                On
              </label>
            </div>

            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-deep-orange-400 font-bold px-3 h-8 rounded-md"
              onClick={copyGenerated}
            >
              Copy
            </button>

            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-deep-orange-400 font-bold px-3 h-8 rounded-md"
              onClick={() => {
                setPassword("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex text-lg gap-x-4 m-4 justify-around">
          <div className="flex items-center gap-x-2 my-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="" className="text-2xl font-medium px-2">
              length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-2 my-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="" className="text-2xl font-medium px-2">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-2 my-2">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="" className="text-2xl font-medium px-2">
              Characters
            </label>
          </div>

          <button
            type="button"
            className="bg-red-200 hover:bg-fuchsia-300 text-slate-800 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-lg"
            onClick={passwordGenerator}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
