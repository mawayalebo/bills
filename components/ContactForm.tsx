function ContactForm() {
    //contact us form component
    return ( 
        <form >
            <div className="flex flex-col p-5 md:p-10 rounded-3xl shadow-md w-full">
                <div className="flex flex-1 items-center rounded-full ring ring-black px-3 md:px-10 py-2  m-2  md:space-x-5 overflow-hidden">
                    <label htmlFor="email" className="font-semibold whitespace-nowrap">Email : </label>
                    <input type="text" name="email" id="email" className="form-input px-2 focus:ring-0 focus:border-0 flex-grow bg-transparent" placeholder="mawayalebo@gmail.com "/>
                </div>
                <div className="flex flex-1 flex-col rounded-3xl ring ring-black  py-2  m-2 space-x-5 ">
                    <textarea name="message" id="message" cols={30} rows={10} className="form-textarea focus:ring-0 focus:border-0 flex-grow bg-transparent border-0" placeholder="Message here"></textarea>
                </div>
                <div className="flex  justify-end">
                        <div className="bg-blue-900 rounded-full px-10 py-2">
                            <span className="text-white">Send Message</span>
                        </div>
                </div>
                
            </div>
        </form>
     );
}

export default ContactForm;