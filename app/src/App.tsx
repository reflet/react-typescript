import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // String型
  let str: string = 'A';
  str = 'B';
  console.log(str);

  // Number型
  let num: number = 10;
  num = 20;
  console.log(num);

  // Number型
  let bool: boolean = true;
  bool = false;
  console.log(bool);

  // Array型
  const arr1: Array<number> = [0, 1, 2];
  const arr2: number[] = [0, 1, 2];
  arr1.push(10);
  arr2.push(12);
  console.log(arr1, arr2);

  // 関数
  const funcA = (num: number): void => {
    console.log('funcA', num);
  };
  funcA(10);

  // オブジェクト
  const obj1: { str: string, num: number } = {
    str: 'A',
    num: 10,
  };
  obj1.str = 'B';
  obj1.num = 20;
  console.log(obj1);

  // 複合的な型 / intersection(交差)型
  const obj2: { str: string } & { num: number } = {
    str: 'A',
    num: 10,
  };
  obj2.str = 'C';
  obj2.num = 30;
  console.log(obj2)

  // 複合的な型 / intersection(交差)型
  type TypeA = {
    str: string;
    num: number;
  }
  type TypeB = {
    num: number;
    bool: boolean;
  }
  type TypeC = TypeA & TypeB;
  const obj3: TypeC = {
    str: 'A',
    num: 10,
    bool: true,
  }
  console.log(obj3);

  // union(合併、共用体)型
  let val1: string | number = '';
  val1 = 'A';
  console.log(val1);
  val1 = 10;
  console.log(val1);

  // Generics (ジェネリクス)
  type CustomType<T> = {
    val: T;
  }
  const strObj: CustomType<string> = { val: 'A' };
  console.log(strObj);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
