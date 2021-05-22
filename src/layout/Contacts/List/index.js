import React, { useState , useEffect} from 'react'
import { Container, Header, List, Placeholder } from 'semantic-ui-react'

const ContactsListUI = ({ contactsInfo:{ contacts:{contactList, error, loading}}}) => {
     const [color, setColor] = useState(null)
    

    useEffect(() => {
        setColor(null)
    },[])
    console.error("contact: ", contactList);
    return (
        <div>
            <Header />
            <Container>
            {loading && (<>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </>)}
            <List>
                {contactList.length && contactList.map((contact) => (
                    <List.Item key={contact.id}>
                        <List.Content floated="right"> 
                                <span>{contact.phone_number}</span>
                        </List.Content>
                        <List.Content style={{ display: "flex", alignItems: "center"}} >
                           
                            <img  style={{color: "yellow",display: "flex",alignItems: "center", justifyContent: "center" ,width: "100px", height: "100px", borderRadius: "50%"}} src={contact.contact_picture} alt="" />
                             <span style={{padding: 10}}>{contact.first_name}</span> 
                        </List.Content>
                    </List.Item>
                ) )}
            </List> 
</Container>
        </div>
    )
}

export default ContactsListUI
