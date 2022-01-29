function Documments() {
    return ( 
        <div>
            <div className="bg-white rounded-3xl">
                <div>
                    <h2>What documens do we need?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative p-5 bg-black rounded-3xl">
                        <div className="absolute top-0 bg-blue-900">
                            <h3>Drawing a Bill of Cost</h3>
                        </div>
                        <ol className="text-white">
                            <li>A detailed instruction letter.</li>
                            <li>Your complete file contents.</li>
                            <li>Court orders, settlement agreement, notice of withdrawal, letter or any other document in which costs are tendered.</li>
                            <li>All disbursement vouchers that should be included in the Bill of Cost.</li>
                            <li>Your time billing and/or general ledger.</li>
                        </ol>
                    </div>
                    <div>
                        <div>
                            <h3>Attending to Taxation</h3>
                        </div>
                        <ol>
                            <li>A detailed instruction letter.</li>
                            <li>Your complete file contents</li>
                            <li>Court orders, settlement agreement, notice of withdrawal, letter or any other document in which costs are tendered.</li>
                            <li>All disbursement vouchers included in the Bill of Cost.</li>
                            <li>Proof of all the consultations and other time-based attendances reflected in the Bill of Cost.</li>
                        </ol>
                    </div>
                    <div>
                        <div>
                            <h3>Opposing a Bill of Cost</h3>
                        </div>
                        <ol>
                            <li>A detailed instruction letter.</li>
                            <li> Your complete file contents.</li>
                            <li> The notice of intention to tax or the notice of taxation together with the Bill of Cost received from your opponent.</li>
                            <li> Court orders, settlement agreement, notice of withdrawal, any document in which costs are tendered.</li>
                            <li>Your time billing and/or general ledger.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Documments;