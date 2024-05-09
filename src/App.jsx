function MyComponent() {
  //최상위 컴포넌트 사용하지 않을 때 -> fragment <> </>
  return (
    <>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum.</p>
    </>
  );
}

function MyComp() {
  //최상위 컴포넌트는 1개
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Fugiat, magni.</p>
    </div>
  );
}

function MyTag() {
  //jsx 코드가 여러 줄일때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Natus, numquam?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
