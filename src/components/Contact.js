import React from "react";

function Contact({img, name, phone, email}) {
    // console.log(prop)

    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(212) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name, phone, email} = person

// console.log(phone)
// console.log(name)
// console.log(img)
// console.log(email)


// console.log(name)
// console.log(img)
// console.log(person.phone)
// console.log(person)


export default Contact;