import ContactForm from "./ContactForm";

function Contact() {
    return ( 
        <section id="contact">
            <div className="flex items-center flex-col">
                <div className="px-10 md:px-15 bg-blue-800 rounded-full flex justify-start m-2 flex-1">
                    <h2 className="text-xl font-bold text-white ">Contact Us</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-400 p-5">
                <div className="grid  grid-cols-1 p-5">
                    <div className="p-2 flex flex-col">   
                        <h3 className="text-white text-2xl font-bold mb-2">Call us</h3>  
                        <div>
                            <p className="text-white text-sm">Contact Numbers</p>
                            <p className="text-white text-sm">+27 (0) 78 870 3402</p>
                            <p className="text-white text-sm">+27 (0) 67 921 5085</p>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col">
                        <h3 className="text-white text-2xl font-bold mb-2">Physical address</h3>
                        <div>
                            <p className="text-white text-sm">12 Sirus Road</p>
                            <p className="text-white text-sm">Riverband Gardens</p>
                            <p className="text-white text-sm">Bedwodworth Park Vereeniging</p>
                            <p className="text-white text-sm">Gauteng</p>
                        </div>
                    </div>
                </div>
                <ContactForm/>
            </div>
            <div>
                <iframe width="100%" height="600" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12+Sirius+Rd,+Bedworth+Park,+Vereeniging,+1939/@-26.7156841,27.8825455,743m/data=!3m1!1e3!4m13!1m7!3m6!1s0x1e9458fb925b4355:0xd45fded469c88600!2s12+Sirius+Rd,+Bedworth+Park,+Vereeniging,+1939!3b1!8m2!3d-26.7156889!4d27.8847342!3m4!1s0x1e9458fb925b4355:0xd45fded469c88600!8m2!3d-26.7156889!4d27.8847342&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </section>
     );
}

export default Contact;