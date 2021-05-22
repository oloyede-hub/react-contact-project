import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, Grid, GridColumn, Header as SemanticHeader, Segment } from "semantic-ui-react"
import Header from "../../components/Header"



const RegisterUI = ({ form:{ onChange, form, registerFromValid, fieldErrors ,onSubmit, loading} }) => {
    return (
        <div>
            <Header />
            <Grid centered>
                <GridColumn style={{ maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader>Signup here</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input value={form.username || ""} onChange={onChange}  error={
                                    fieldErrors.username && {
                                        content: fieldErrors.username,
                                        pointing: "below"
                                    }
                                } name="username" label="Username" placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.firstName || ""} onChange={onChange} error={
                                    fieldErrors.first_name && {
                                        content: fieldErrors.first_name,
                                        pointing: "below"
                                    }
                                }  name="firstName" label="First Name" placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.lastName || ""}  onChange={onChange} error={
                                    fieldErrors.last_name && {
                                        content: fieldErrors.last_name,
                                        pointing: "below"
                                    }
                                }  name="lastName" placeholder='Last Name' label="Last Name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.email || ""}  onChange={onChange} error={
                                    fieldErrors.email && {
                                        content: fieldErrors.email,
                                        pointing: "below"
                                    }
                                } name="email" type="email" placeholder='Email' label="Email" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.password || ""} onChange={onChange} error={
                                    fieldErrors.password && {
                                        content: fieldErrors.password,
                                        pointing: "below"
                                    }
                                }  name="password" type="password" placeholder='Password' label="Password" />
                            </Form.Field>
                            <Button loading={loading}  onClick={onSubmit} disabled={registerFromValid || loading} fluid primary type='submit'>Submit</Button>
                        </Form>
                        <Segment>Already have an account? <Link to="/auth/login" color="red">Login here</Link>.</Segment>
                    </Segment>

                </GridColumn>
            </Grid>

        </div>

    )
}
export default RegisterUI;