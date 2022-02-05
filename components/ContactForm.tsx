function ContactForm() {
    //contact us form component
    return ( 
        <form >
            <div className="flex p-5">
                <div>
                    <h2>Contact us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                </div>
            </div>
            <div className="flex p-5">
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows={10} cols={50}></textarea>
                </div>
            </div>
            <div className="flex p-5">
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>

        </form>
     );
}

export default ContactForm;