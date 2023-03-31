import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';

import { setAuthToken } from './Auth';
function SignIn() {

   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const url = "http://localhost:3004/blog/signin/user"



    function getSigninData(e) {

        e.preventDefault()
     
        console.log(email,password)
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
             "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        }).then((result) => {
            result.json().then((resp) => {
                console.log("resp   :: ", resp.accessToken)
                if(resp.status==='false'){
                    alert("Please fill all required fields: title, content, and imageUrl")
                }
                else{
                     setAuthToken(resp.accessToken);
                    alert("Signin Successfully")
                }
                navToPsge()

            })
        })
    }

    const navigate = useNavigate()
    const navToPsge = () => {
        navigate("/")
    }

    return (


        <Container style={{padding:"120px" }}>
          
                    <Form onSubmit={getSigninData}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your password" style={{ height: '100px' }} onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
        

        </Container>

    );
}

export default SignIn;

