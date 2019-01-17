import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './component/product';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      txtUsername: 'quynq',
      txtPassword: '1234',
      txtDescription: 'ok',
      sltGender: 1,
      rdLang: 'vi',
      chkbState:false
    };

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }


  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type==='checkbox'?target.checked:target.value
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Form</h3>
            </div>
            <div className="panel-body">

              <form action="" method="POST" role="form" onSubmit={this.onHandleSubmit}>
                <legend>Form title</legend>

                <div className="form-group">
                  <label for="">username:</label>
                  <input type="text" name="txtUsername" className="form-control" id="txtUsername" placeholder="Input field"
                    onChange={this.onHandleChange}
                    value={this.state.txtUsername}
                  />
                </div>
                <div className="form-group">
                  <label for="">password:</label>
                  <input type="password" name="txtPassword" className="form-control" id="txtPassword" placeholder="Input field"
                    onChange={this.onHandleChange}
                    value={this.state.txtPassword}
                  />
                </div>
                <div className="form-group">
                  <label for="">Description:</label>
                  <textarea name="txtDescription" id="txtDescription" name="txtDescription" class="form-control" rows="3"
                    value={this.state.txtDescription}
                    required="required"></textarea>
                </div>
                <div className="form-group">
                  <label for="">Gender:</label>

                  <select name="sltGender" id="inputsltGender" className="form-control"
                    onChange={this.onHandleChange}
                    value={this.state.sltGender}>
                    <option value={0} selected={this.state === 0}>-- Male --</option>
                    <option value={1} selected={this.state === 1}>-- Female --</option>
                  </select>

                </div>

                <div className="form-group">
                  <label for="">Languages: </label>
                  <div class="radio-inline">
                    <label>
                      <input type="radio" name="rdLang" id="inputV" value="vi" checked={this.state.rdLang === "vi"}
                        onChange={this.onHandleChange}
                      />
                      Vietnamese
                      </label>
                  </div>
                  <div class="radio-inline">
                    <label>
                      <input type="radio" name="rdLang" id="inputE" value="en" checked={this.state.rdLang === "en"}
                        onChange={this.onHandleChange}
                      />
                      English
                      </label>
                  </div>

                </div>


                <div className="form-group">
                  <label for="">Status: </label>

                 <div className="checkbox">
                   <label>
                     <input name="chkbState" id="chkbState" type="checkbox" value={true}
                     checked={this.state.chkbState===true}
                     onChange={this.onHandleChange}/>
                     married
                   </label>
                 </div>
                 

                </div>



                <button type="submit" className="btn btn-primary" >Lưu</button>
                <button type="submit" className="btn btn-primary">Xóa</button>
              </form>

            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default App;
