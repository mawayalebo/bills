
function Fees() {
    return ( 
        <div  className="p-1 sm:p-5 ">
            <div className="ring-2 ring-yellow-400 flex items-center justify-center flex-col p-5">
                <div className="p-5 ">
                    <h2 className="text-2xl">Legal Cost Consultants Fee Structure?</h2>
                </div>
                {/* fee structures */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* structure1 */}
                    <div>
                        {/* heading */}
                        <div>
                            <h3 className="font-bold p-1">Fees for drawing a Bill of Cost</h3>
                        </div>
                        {/* description*/}
                        <div className="p-2">
                            <ul className="list-disc">
                                <li>11% for drawing the Bill of Cost.</li>
                            </ul>
                        </div>
                    </div>

                    {/* structure2 */}
                    <div>
                        {/* heading */}
                        <div>
                            <h3 className="font-bold p-1">Fees for attending Taxation</h3>
                        </div>
                        {/* description*/}
                        <div className="p-2">
                            <ul className="list-disc">
                                <li>11% of the first R10 000-00.</li>
                                <li>6% of the second R10 000-00.</li>
                                <li>3% of the balance.</li>
                            </ul>
                        </div>
                    </div>

                    {/* structure3 */}
                    <div>
                        {/* heading */}
                        <div>
                            <h3 className="font-bold p-1">Fees for opposing a Bill of Cost</h3>
                        </div>
                        {/* description*/}
                        <div className="p-2">
                            <ul className="list-disc">
                                <li>10% of what was taxed-off from the Bill of Cost.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* overall description */}
                <div className="p-5 text-center">
                    <p>Our fee structure as indicated above is in accordance with the provisions and fee 
                        structures of the Uniform Rules of Court of the Magistrates’ Court and the High Court. Our 
                        fee structures is subject to change in accordance with any amendments to the Uniform 
                        Rules of Court of the Magistrates’ Court and the High Court
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Fees;