class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='Students' from='Ellie' bangs={4} />
        <Hello to='World' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
