import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact</h1>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Your Name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Your Email' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" placeholder='Please tell us about query..' />
                </div>
            </form>
        </main>
    </div>
  )
}

export default Contact