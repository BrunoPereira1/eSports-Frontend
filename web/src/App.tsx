interface Buttonprops {
  title: string;
}

function Button(props: Buttonprops) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="send 1" />
      <Button title="send 2" />
      <Button title="send 3" />
      <Button title="React" />
    </div>
  )
}

export default App
