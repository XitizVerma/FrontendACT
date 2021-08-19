import React from "react";

class LoginComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
          uid:"",
          pass:"",
          check:""
      }
      this.handleInputChange=this.handleInputChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.onValueChange = this.onValueChange.bind(this);
  }
  handleInputChange(event){
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
  }
  onValueChange(event) {
      this.setState({
        check: event.target.value
      });
    }
  handleSubmit(event){
      event.preventDefault();
      var uid=this.state.uid;
      var pass=this.state.pass;
      var check=this.state.check;
      var win;
      if (uid ==="yafet")
      {
          if (pass==="12345678") 
          {
              if(check==="tlogin")
              {
                  win = window.open('/admin', '_self');
                  win.focus();
              }
              else if (check==="slogin")
              {
                  win = window.open('/student', '_self');
                  win.focus();
              }
          }      
      }
      else
          alert("UID and Password do not match.Please try again!");
  }
  render(){
  return (
    <div className="flex items-center justify-center pt-20 pb-60">
      <div className="w-full max-w-md">
        <form onSubmit={this.handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="username"
            >
              Unique Access Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.email"
              name="uid" 
              value={this.state.uid} onChange={this.handleInputChange}
              required
              autoFocus
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              name ="pass"
              value={this.state.pass} onChange={this.handleInputChange}
              placeholder="Password"
              required
              autoComplete="current-password" style={{marginBottom:"0px"}}
            />
          </div>
          <div className="inline-flex justify-evenly pb-8" >
                 <div className="pl-4">
                    <input type="radio" name="check" value="tlogin" 
                        checked={this.state.check === "tlogin"}
                        onChange={this.onValueChange} required/>
                    <label for="tlogin">Admin's Login</label>
                  </div>
                
                  <div className="pl-8" >
                      <input type="radio" name="check" value="slogin" 
                        checked={this.state.check === "slogin"}
                        onChange={this.onValueChange}/>
                    <label for="slogin">Student's Login</label>
                  </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-gray-600 hover:bg-gray-700 focus:bg-gray-700"
              type="submit">
              Sign In
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
  }
}

export default LoginComponent;
