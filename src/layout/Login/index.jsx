import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, Grid, GridColumn, Header as SemanticHeader, Message, Segment } from "semantic-ui-react"
import Header from "../../components/Header"



const LoginUI = ({ form:{ onChange, form, error, loginFromValid ,onSubmit, loading} }) => {
    return (
        <div>
            <Header />
            <Grid centered>
                <GridColumn style={{ maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader>Login to your account</SemanticHeader>
                    <Segment>
                        <Form>
                        { error && <Message content={error?.detail} negative  />}
                            <Form.Field>
                                <Form.Input value={form.username || ""} onChange={onChange} name="username" label="Username" placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.password || ""} onChange={onChange}
                              name="password" type="password" placeholder='Password' label="Password" />
                            </Form.Field>
                            <Button loading={loading}  onClick={onSubmit} disabled={loginFromValid || loading} fluid primary type='submit'>Submit</Button>
                        </Form>
                        <Segment>Need an account <Link to="/auth/register" color="red">Register</Link>.</Segment>
                    </Segment>
                    
                </GridColumn>
            </Grid>

        </div>

    )
}
export default LoginUI;