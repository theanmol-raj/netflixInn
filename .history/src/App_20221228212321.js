

function App() {
  const user = null ;

  return (
    <div className="App">
        {
          !user ? <LoginScreen /> : <HomeScreen />
        }
    </div>
  );
}

export default App;
