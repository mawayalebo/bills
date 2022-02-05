import { useEffect, useState } from "react";


function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
    return ( 
        <div>
                <div className="flex flex-col">
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 bg-blue-900 gap-8">
                            <div className="p-2 flex flex-col">
                                <h3 className="text-white text-2xl font-bold mb-2">Contact Us</h3>
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
                            <div>

                            </div>
                    </div>
                    <div className="flex justify-center items-center bg-gray-300 p-5">
                        <p className="text-xs"> Copyright © {year} | Bills hub | Legal Cost Consultants in South Africa | All rights reserved | Powered by Next JS</p>
                    </div>
                </div>
        </div>
     );
}

export default Footer;