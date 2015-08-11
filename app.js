const Universal = require("universaljs");

module.exports = Universal.createComponent({
    initialState: {
        clicks: 0
    },
    render() {
    const clickFunc = () =>{
      let clicks=this.state.clicks;
      this.setState({clicks: ++clicks });
    }
    return (<div id="row">
        <div id="app">
            <h3>The Click App</h3>
            <button onClick={clickFunc}>Why not click me?</button>
        </div>
        <div id="time-travel">
            <h3>Click stats</h3>
          <p>You have clicked on the button {this.state.clicks} times</p>
        </div>
    </div>)
    }
});

