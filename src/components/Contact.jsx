import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
        <h1>contact us</h1>
        <form>
            <div>
            <label>Name</label>
            <input type="text" placeholder='abc'/>
            </div>
            <div>
            <label>Email</label>
            <input type="email" placeholder='abc@gmail.com'/>
            </div>
            <div>
            <label>Message</label>
            <input type="text" placeholder='tell your query'/>
            </div>
            <button type='submit'>Send</button>    
        </form>
        </main>
    </div>
  )
}

export default Contact