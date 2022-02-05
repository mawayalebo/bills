
function Documments() {
    return ( 
        <section id="documents">
            <div className="bg-white rounded-3xl">
                <div className="flex m-5 justify-center">
                    <h2 className="text-gray-600 font-black text-md">What documens do we need?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
                    <div className="relative p-5 bg-black flex justify-center flex-col">
                        <div className="absolute -top-3 bg-blue-900 rounded-full px-10">
                            <h3 className="text-white whitespace-nowrap">Drawing a Bill of Cost</h3>
                        </div>
                        <ol className="text-white list-disc p-2">
                            <li>A detailed instruction letter.</li> 
                            <li>Your complete file contents.</li>
                            <li>Court orders, settlement agreement, notice of withdrawal, letter or any other document in which costs are tendered.</li>
                            <li>All disbursement vouchers that should be included in the Bill of Cost.</li>
                            <li>Your time billing and/or general ledger.</li>
                        </ol>
                    </div>
                    <div className="relative p-5 bg-black flex justify-center flex-col">
                        <div className="absolute -top-3 bg-blue-900 rounded-full px-10">
                            <h3 className="text-white whitespace-nowrap">Attending to Taxation</h3>
                        </div>
                        <ol className="text-white list-disc p-2">
                            <li>A detailed instruction letter.</li>
                            <li>Your complete file contents</li>
                            <li>Court orders, settlement agreement, notice of withdrawal, letter or any other document in which costs are tendered.</li>
                            <li>All disbursement vouchers included in the Bill of Cost.</li>
                            <li>Proof of all the consultations and other time-based attendances reflected in the Bill of Cost.</li>
                        </ol>
                    </div>
                    <div className="relative p-5 bg-black flex justify-center flex-col">
                        <div className="absolute -top-3 bg-blue-900 rounded-full px-10">
                            <h3 className="text-white whitespace-nowrap">Opposing a Bill of Cost</h3>
                        </div>
                        <ol className="text-white  list-disc p-2">
                            <li>A detailed instruction letter.</li>
                            <li> Your complete file contents.</li>
                            <li> The notice of intention to tax or the notice of taxation together with the Bill of Cost received from your opponent.</li>
                            <li> Court orders, settlement agreement, notice of withdrawal, any document in which costs are tendered.</li>
                            <li>Your time billing and/or general ledger.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Documments;