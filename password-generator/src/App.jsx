import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) string += "0123456789";
    if (char) string += "!@#$%&+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);
    }
    setPassword(password);
  }, [length, num, char, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <div className="w-[1000px] m-auto shadow-3xl rounded-2xl p-5 my-10 bg-blue-900 text-yellow-400 text-2xl mt-40">
      <h1 className="text-5xl font-bold underline text-center text-yellow-500 my-1">
        Password - Generator
      </h1>

      <div className=" flex shadow-white shadow-md  rounded-full mb-7 p-5">
        <input
          type="text"
          value={password}
          className="outline-none w-full bg-white text-black font-bold text-2xl rounded-2xl py-5 px-3 my-3"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="outline-none bg-green-500 hover:text-white text-black px-3 py-0.5 shrink-0 text-3xl font-bold rounded-3xl"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-20">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-3xl font-bold text-yellow-400">
            Length:{length}
          </label>
        </div>
        <div className="flex items-center gap-x-1 text-lg">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numInput"
            onChange={() => {
              setNum((prevValue) => !prevValue);
            }}
          />
          <label className="text-3xl font-bold text-yellow-400">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label className="text-3xl font-bold text-yellow-400">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
