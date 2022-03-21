const Contact = () => {
  return (
    <div class="contactPage">
      <div className="contacts">
        <h1>
          <strong>Contact Us</strong>
        </h1>
        <br />
        <p>
          <b>
            We would love to hear from you, please provide the information
            below.
          </b>
        </p>
      </div>
      <br />
      <hr />
      <br />
      <div className="form-wrapper">
        <form className="contact-form">
          {/* <!-- IMPORTANT--> */}
          <table>
            <tr>
              <td>First Name :</td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="First Name" pattern="[A-Za-z]*" required />
              </td>
            </tr>
            <tr>
              <td>Last Name :</td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Last Name" pattern="[A-Za-z]*" required />
              </td>
            </tr>
            <tr>
              <td>Phone Number</td>
            </tr>
            <tr>
              <td>
                <input type="tel" placeholder="704-234-2354" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </td>
            </tr>
            <tr>
              <td>Email :</td>
            </tr>
            <tr>
              <td>
                <input type="email" placeholder="Email" required />
              </td>
            </tr>
            <tr>
              <td>Have any questions?</td>
            </tr>
            <tr>
              <td>
                <textarea
                  placeholder="Leave Message Here..."
                  rows="6"
                  cols="30"
                  required
                ></textarea>
                {/* <!-- IMPORTANT ATTRIBUTES--> */}
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" class="submit-button" />
                {/* <!-- IMPORTANT--> */}
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Contact;
