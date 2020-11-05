class Login extends React.Component {
    constructor(props) {
        super(props);
         this.state = { //============setting an object of the Input data=================
            fname:'',
            email:'',
            password:'',
         };
        //  ============== Binding this.state with the handle ===================== 
         this.handleFullName = this.handleFullName.bind(this);
         this.handleEmail = this.handleEmail.bind(this);
         this.handlePass = this.handlePass.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // ============Get Values of  Each Handles =======================
    handleFullName(e) {
        this.setState({fname: e.target.value})
    }

    handleEmail(event) {
        this.setState({email: event.target.value})
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
                <h1>Register Here</h1>
            <form onSubmit={this.handleSubmit}>
            {/* { ShowRegister ? <Register /> : null } */}
            <label className='float-left mt-3'>Full Name:</label>
            <input type="text" name="name" placeholder="Full Name"
					onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Full Name'" required
					className="single-input form-control py-4 px-3"
                    value={this.state.fname} onChange = {this.handleFullName} />
                           

            <label className='float-left mt-3'>E-Mail:</label>
            <input type="email" name="email" placeholder="E-mail"
					onFocus="this.placeholder = ''" onBlur="this.placeholder = ''" required
					className="single-input form-control py-4 px-3"
                    value={this.state.email} onChange = {this.handleEmail}/>

            <label className='float-left mt-3'>Password:</label>
            <input type="password" name="password" placeholder="Password"
					onFocus="this.placeholder = ''" onBlur="this.placeholder = 'password'" required
					className="single-input form-control py-4 px-3"
                    value={this.state.password} onChange={this.handlePass} />        

            <button type="submit" value="Submit"
                    className='button btn btn-default rounded my-4 float-left '
                    onClick= {this.handleButton}>
             Register Now
            </button> 


          </form>
          <br/> 
           </div>

            

         );
    }
}
 ReactDOM.render(<Login />, document.getElementById("Form-Register"));

//  All Code Written by Adams_Albarka