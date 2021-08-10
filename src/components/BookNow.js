import React from 'react'
import {Form,Button,Row} from 'react-bootstrap';
import {firestore} from "./firebase"


class BookNow extends React.Component {
  state={
    Name:"",
    Phone:"",
    Address:"",
    City:"",
    Zip:""
  }

  addUser = event => {
    event.preventDefault()
    firestore.collection("users").add({
      Name: this.state.Name,
      Phone: this.state.Phone,
      Address: this.state.Address,
      City: this.state.City,
      Zip: this.state.Zip
    })  
  }
  onChangeName = event => {
    this.setState({ Name: event.target.value })
  }
  onChangePhone = event => {
    this.setState({ Phone: event.target.value })
  }
  onChangeAddress = event => {
    this.setState({ Address: event.target.value })
  }
  onChangeCity = event => {
    this.setState({ City: event.target.value })
  }
  onChangeZip = event => {
    this.setState({ Zip: event.target.value })
  }
  
  render(){
    
    // const { Name,Phone,Address,City,Zip } = this.state
    // console.log(Name)
    
    return (
        <div className='booknow'>
            <div className="booknow__head">Fill this form , our designer will call you within hours</div>

              <div className="booknow__container">

              <Form onSubmit={this.addUser}>

                  <Form.Group  as={Row} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="lg" type="text"  onChange={this.onChangeName}/>
                  </Form.Group>

                  <Form.Group  as={Row} controlId="formGridNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size="lg" type="number"  onChange={this.onChangePhone}/>
                  </Form.Group>


                <Form.Group as={Row} controlId="formGridAddress1">
                  <Form.Label size="sm">Address</Form.Label>
                  <Form.Control size="lg"   onChange={this.onChangeAddress}/>
                </Form.Group>


                  <Form.Group as={Row} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control size='lg'  onChange={this.onChangeCity} />
                  </Form.Group>

                  
                  <Form.Group as={Row} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control size='lg' type='number'  onChange={this.onChangeZip} />
                  </Form.Group>


                <Button className='booknow__button' variant="primary" type="submit">
                  Book 
                </Button>
              </Form>
              </div>
            </div>
    )
}
}

export default BookNow