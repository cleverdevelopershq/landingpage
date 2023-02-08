import React from 'react'

function Footer() {
  return (
    <section>
            <div className="flex justify-between items-center flex-col md:flex-row md:px-20 px-10 text-white">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Contact Us</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex mt-5">
                        <div className="flex flex-col mr-5">
                            <p className="text-sm font-bold">Address</p>
                            <p className="text-sm">1234 Street Name, City Name, United States</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Phone</p>
                            <p className="text-sm">+1 234 567 890</p>
                        </div>
                    </div>
                </div>
                </div>
    </section>
  )
}

export default Footer
