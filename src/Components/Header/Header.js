import React from "react";
import { 
  Navbar,
  Container, 
  FormControl, 
  Dropdown, 
  Nav, 
  Badge,
  Button,
  } from "react-bootstrap";
import {Link} from 'react-router-dom'

import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from "../../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import '../Header/header.css'
const Header = () => {
  const{state: {cart}, dispatch} = CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" >JhaJi Store</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color='white' fontSize='25px'/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:370}}>

              {
                cart.length > 0 ? (
                  <>
                    {
                      cart.map((prod) => (
                        <span className="cartItem" key={prod.id}>
                          <img
                           src={prod.image}
                           className="cardItemImage"
                           alt={prod.name}
                          />
                          <div className="cardItemDetails">
                            <span>{prod.name}</span>
                            <span>$ {prod.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                          fontSize='20px'
                          style={{cursor: 'pointer'}}
                          onClick={()=>dispatch({
                            type:'REMOVE_FROM_CART',
                            payload: prod,
                          })}
                          />
                        </span>
                      ))
                    }
                    <Link to='/cart'>
                      <Button style={{width: '95%', margin: '0 10px'}}>
                        Go to Cart
                      </Button>
                    
                    </Link>
                  </>

                ) : (<span style={{padding:10}}>cart is empty</span>)
              }


              
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
