import React from "react";
import user from "../images/user2.png";
import { useParams,Link } from "react-router-dom";

const ContactDetail = (props) => {
    const { id } = useParams();
    const contact = props.contacts.find((contact) => contact.id === id);
    const { name, email } = contact;
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
        <div className="center-div">
            <Link to="/"><button className="ui button blue center"style={{marginLeft:"475px",marginTop:"40px"}}>Back to Contact List</button></Link>
        </div>
    </div>
  );
};

export default ContactDetail;
