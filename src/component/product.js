import React, { Component } from 'react';

class Product extends Component {

  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(){
    alert(this.props.name+'----'+this.props.price);
   }
   onAddToCart2 = () =>{
    alert(this.props.children+'---'+this.props.price);
  }
onClick(txt){
    alert(txt);
}

  render() {
    return (
      <div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={this.props.image} className="img-responsive" alt={this.props.name}/>
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                  {this.props.price}
                  </p>
                  <p>
                
                  </p>
                <p>
                  <a className="btn btn-primary" onClick={this.onAddToCart}> Mua ngay </a>

                </p>
                <p>
                    
                    <button type="button" class="btn btn-warning" onClick={()=>{this.onClick("abc")}}>Click me!</button>
                    

                </p>
                <p>
                    
                    <button type="button" class="btn btn-warning" onClick={this.onAddToCart2}>Click me 2!</button>
                    

                </p>
              </div>
            </div>
          </div>
          
      </div>
     
    );
  }
}

export default Product;
