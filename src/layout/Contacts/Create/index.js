import React from 'react'
import "./index.css"
import { Button, Card, CardContent, Form, Grid,Header as SemanticHeader, Select } from 'semantic-ui-react'
import Header from '../../../components/Header'
import countries from '../../../utils/countries';
import { Prompt } from "react-router-dom";

const CreateContact = ({ formHalfFilled, onChange,onSubmit , loading,error,formValid}) => {
    return (
        <div>

            <Prompt when={formHalfFilled} message={`You have an unsaved changes. Are you sure you want to leave ?` } />
            <Header />
            <Grid centered>
                <Grid.Column className="form-column">
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <CardContent>
                            <Form unstackable>
                                <div className="contact-picture">
                                    Choose picture
                                </div>
                                <Form.Group widths={2}>
                                    <Form.Input
                                        name="firstName"
                                        onChange={onChange}
                                        label='First name'
                                        placeholder='First name'
                                    />
                                    <Form.Input
                                        name="lastName"
                                        onChange={onChange}
                                        label='Last name'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                                 <Form.Group widths={2}>
                                    <Form.Input
                                        name="countryCode"
                                        control={Select}
                                        options={countries}
                                        onChange={onChange}
                                        label='Country'
                                        placeholder='Country'
                                    />
                                    <Form.Input
                                        name="PhoneNumber"
                                        onChange={onChange}
                                        label='Phone Number'
                                        placeholder='Phone Number'
                                    />
                                </Form.Group>
                                <Form.Checkbox
                                    name="isFavourite"
                                    onChange={(e, data) => {
                                        onChange(e,{name:"isFavourite", value: data.checked })  
                                    }}
                                    label='Add favourite'
                                />
                                <Button primary loading={loading}  onClick={onSubmit} >Submit</Button>
                            </Form>
                        </CardContent>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CreateContact
