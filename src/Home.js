const Home = () => {
  const handleClick = (e) => {
    //should log all properties of event if you want to use them
    console.log("hello,ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello, " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click Me again
      </button>
      {/* This is a jsx comment. Cannot be handleClickAgain("mario") as that is function invocation syntax. It executes right away
You have to create a function that will invoke on click, */}
    </div>
  );
};

export default Home;
