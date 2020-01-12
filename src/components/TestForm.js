import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TestForm = (props) => {

  // Example of 'useState'
  const [showSelectMultiple, setShowSelectMultiple] = useState(true);

  //Example of handle change
  const handleChange = (e) => {
    if(e.target.value == 2){
      setShowSelectMultiple(false);
    }
    else{
      setShowSelectMultiple(true);
    }
  }

  const clickHandler = () => {
    alert('Form was submitted')
  }

  return (
    <Form style={{marginTop: '10vmin'}}>
      <FormGroup>
        <Label className='test-label' for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder={`${props.currentName}'s Email Placeholder`} />
      </FormGroup>
      <FormGroup>
        <Label className='test-label' for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder={`${props.currentName}'s Password Placeholder`} />
      </FormGroup>
      <FormGroup>
        <Label className='test-label' for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      {showSelectMultiple && <FormGroup>
        <Label className='test-label' for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>}
      <FormGroup>
        <Label className='test-label' for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label className='test-label' for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label className='test-label' check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label className='test-label' check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label className='test-label' check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label className='test-label' check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button type='submit' onClick={clickHandler}>Submit</Button>
    </Form>
  );
}

export default TestForm;