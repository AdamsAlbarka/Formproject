class Login extends React.Component {
    constructor(props) {
        super(props);
         this.state = { //============setting an object of the Input data=================
            username:'',
            password:'',
         };
        //  ============== Binding this.state with the handle ===================== 
         this.handleUserName = this.handleUserName.bind(this);
         this.handlePass = this.handlePass.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // ============Get Values of  Each Handles =======================
    handleUserName(e) {
        this.setState({username: e.target.value})
    }

    handlePass(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(this.props.state)
        console.log(this.state);
        
     }
     handleButton(ev) {
        alert("Your file is an Object in the Browser Console!")
    }
    render() { 
        // ============== Set Login to Hide And be replaced By Register ========

        return ( 
            <div className='form-group'>
                   <h1>Sign Up Now</h1>
            <form onSubmit={this.handleSubmit}>
            {/* { ShowRegister ? <Register /> : null } */}
            <label className='float-left mt-3'>Username:</label>
            <input type="text" name="name" placeholder="Username"
					onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Username'" required
					className="single-input form-control py-4 px-3"
                    value={this.state.username} onChange = {this.handleUserName} />
                           
            <label className='float-left mt-3'>Password:</label>
            <input type="password" name="password" placeholder="Password"
					onFocus="this.placeholder = ''" onBlur="this.placeholder = 'password'" required
					className="single-input form-control py-4 px-3"
                    value={this.state.password} onChange={this.handlePass} />        

            <button type="submit" value="Submit"
                    className='button btn btn-default rounded my-4 float-left'
                    onClick={this.handleButton}>
            Login Now
            </button> 
          </form>
          <br/> 
           </div>

            

         );
    }
}
 ReactDOM.render(<Login />, document.getElementById("Form-Login"));

//  All Code Written by Adams_Albarka