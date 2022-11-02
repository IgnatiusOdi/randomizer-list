import { Fragment, useEffect, useState, useRef } from "react";
// import { useTime } from "react-timer-hook";

import "./index.css";

function App() {
  const [randomCategory, setRandomCategory] = useState("");
  const [categoryList, setCategoryList] = useState([
    "Software",
    "Hardware",
    "Perusahaan",
    "Buah",
    "Hewan",
    "Makanan Indonesia",
    "Alat Musik",
    "Benda",
    "Pekerjaan",
    "Sayur",
    "Negara",
    "Bahasa Pemrograman",
    "Lagu Indonesia",
    "Merk Pakaian",
    "Kota",
    "Tumbuhan",
    "Merk Gadget",
    "Mata Pelajaran",
    "Penyakit",
    "Artis",
  ]);

  const inputAnswer = useRef("");
  const [answerList, setAnswerList] = useState([]);

  const [time, setTime] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    inputAnswer.current.value = "";
  }, [answerList]);

  useEffect(() => {
    if (!time) return;

    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const randomHandler = () => {
    const max = categoryList.length;
    const randomNumber = Math.floor(Math.random() * max);
    setRandomCategory(categoryList[randomNumber]);
    setTime(20);
  };

  const answerHandler = () => {
    setError(null);
    let ans = inputAnswer.current.value.toUpperCase();
    if (ans.trim() !== "" && !answerList.includes(ans)) {
      setAnswerList((prev) => {
        return [...prev, ans];
      });
    } else {
      setError("Input Kosong / Kata sudah ada!");
    }
  };

  const clearHandler = () => {
    setError(null);
    inputAnswer.current.value = "";
  };

  const resetHandler = () => {
    setRandomCategory("");
    setError(null);
    inputAnswer.current.value = "";
    setAnswerList([]);
  };

  return (
    <Fragment>
      <div className="navbar bg-warning-content">
        <div className="btn btn-ghost normal-case text-xl">Randomizer List</div>
      </div>
      <div className="card w-auto m-2 bg-blue-300 shadow-xl">
        <div className="card-body">
          <div className="card-title text-black text-3xl">List Kategori</div>
          <div className="columns-3 text-black">
            {categoryList.map((category) => (
              <li key={Math.random()} className="mr-10">
                {category}
              </li>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={randomHandler}>
              Random
            </button>
          </div>
          <div className="text-5xl text-red-700 font-bold underline">
            {randomCategory}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-3xl text-white mr-5">TIME LEFT :</span>
        <span className="text-3xl text-red-400">{time}</span>
      </div>
      {!time && <div className="text-xl text-yellow-500 text-center">WAKTU TELAH HABIS!</div>}
      <div className="card w-auto m-2 bg-blue-300 shadow-xl">
        <div className="card-body">
          <div className="card-title text-black text-3xl">Jawaban</div>
          <input
            className="input w-full text-center text-black bg-white"
            type="text"
            ref={inputAnswer}
          />
          {error && <div className="text-red-600">{error}</div>}
          <div className="columns-2 flex justify-center">
            <button className="btn btn-primary" onClick={answerHandler}>
              Jawab
            </button>
            <button className="btn btn-warning" onClick={clearHandler}>
              Clear
            </button>
          </div>
          <div className="text-black columns-3">
            {answerList.map((answer) => (
              <li key={Math.random()} className="underline">
                {answer}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-error" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </Fragment>
  );
}

export default App;
