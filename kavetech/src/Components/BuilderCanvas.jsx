import { useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Layout, Type, Image, Square, Columns, CreditCard, List, Video, Menu, Home, X } from 'lucide-react'
import html2canvas from 'html2canvas'
import emailjs from 'emailjs-com'

const componentStyles = {
  header1: 'bg-primary text-white p-4 flex justify-between items-center',
  header2: 'bg-white shadow-md p-4 flex justify-between items-center',
  hero1: 'bg-gray-900 text-white py-20 px-4 text-center',
  hero2: 'bg-primary text-white py-20 px-4 flex items-center justify-between',
  content1: 'py-12 px-4 bg-white',
  content2: 'py-12 px-4 bg-gray-100',
  footer1: 'bg-gray-800 text-white p-8',
  footer2: 'bg-white border-t p-8',
  gallery: 'py-12 px-4 bg-white grid grid-cols-3 gap-4',
  testimonials: 'py-12 px-4 bg-gray-100',
  cta: 'bg-primary text-white py-12 px-4 text-center',
  video: 'py-12 px-4 bg-white',
}

function ComponentRenderer({ component, onEdit, onRemove }) {
  const handleEdit = (e) => {
    onEdit(component.id, e.target.innerHTML)
  }

  const renderComponent = () => {
    switch (component.type) {
      case 'header1':
        return (
          <header className={componentStyles.header1}>
            <h1 className="text-2xl font-bold" contentEditable onBlur={handleEdit}>Company Name</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </header>
        )
      case 'header2':
        return (
          <header className={componentStyles.header2}>
            <h1 className="text-2xl font-bold text-primary" contentEditable onBlur={handleEdit}>Company Name</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-primary">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
              </ul>
            </nav>
          </header>
        )
      case 'hero1':
        return (
          <section className={componentStyles.hero1}>
            <h2 className="text-4xl font-bold mb-4" contentEditable onBlur={handleEdit}>Welcome to Our Website</h2>
            <p className="mb-8" contentEditable onBlur={handleEdit}>Discover amazing products and services.</p>
            <button className="bg-white text-primary font-bold py-2 px-4 rounded">Learn More</button>
          </section>
        )
      case 'hero2':
        return (
          <section className={componentStyles.hero2}>
            <div>
              <h2 className="text-4xl font-bold mb-4" contentEditable onBlur={handleEdit}>Innovate with Us</h2>
              <p className="mb-8" contentEditable onBlur={handleEdit}>Leading the way in technology and design.</p>
              <button className="bg-white text-primary font-bold py-2 px-4 rounded">Get Started</button>
            </div>
            <img src="/placeholder.svg" alt="Hero" className="w-1/2 h-64 object-cover rounded" />
          </section>
        )
      case 'content1':
        return (
          <section className={componentStyles.content1}>
            <h2 className="text-3xl font-bold mb-4 text-center" contentEditable onBlur={handleEdit}>Our Services</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2" contentEditable onBlur={handleEdit}>Service 1</h3>
                <p contentEditable onBlur={handleEdit}>Description of service 1 goes here.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" contentEditable onBlur={handleEdit}>Service 2</h3>
                <p contentEditable onBlur={handleEdit}>Description of service 2 goes here.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" contentEditable onBlur={handleEdit}>Service 3</h3>
                <p contentEditable onBlur={handleEdit}>Description of service 3 goes here.</p>
              </div>
            </div>
          </section>
        )
      case 'content2':
        return (
          <section className={componentStyles.content2}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4" contentEditable onBlur={handleEdit}>About Us</h2>
              <p className="mb-4" contentEditable onBlur={handleEdit}>We are a company dedicated to providing the best services to our clients. With years of experience and a team of experts, we strive to exceed expectations in everything we do.</p>
              <p contentEditable onBlur={handleEdit}>Our mission is to innovate and lead in our industry, always putting our customers first.</p>
            </div>
          </section>
        )
      case 'footer1':
        return (
          <footer className={componentStyles.footer1}>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2" contentEditable onBlur={handleEdit}>Company Name</h3>
                <p contentEditable onBlur={handleEdit}>Short description of the company goes here.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                <ul>
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Services</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p contentEditable onBlur={handleEdit}>123 Main St, City, Country</p>
                <p contentEditable onBlur={handleEdit}>Phone: (123) 456-7890</p>
                <p contentEditable onBlur={handleEdit}>Email: info@company.com</p>
              </div>
            </div>
          </footer>
        )
      case 'footer2':
        return (
          <footer className={componentStyles.footer2}>
            <div className="flex justify-between items-center">
              <p contentEditable onBlur={handleEdit}>&copy; 2023 Company Name. All rights reserved.</p>
              <nav>
                <ul className="flex space-x-4">
                  <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
                </ul>
              </nav>
            </div>
          </footer>
        )
      case 'gallery':
        return (
          <section className={componentStyles.gallery}>
            <img src="/placeholder.svg" alt="Gallery 1" className="w-full h-48 object-cover rounded" />
            <img src="/placeholder.svg" alt="Gallery 2" className="w-full h-48 object-cover rounded" />
            <img src="/placeholder.svg" alt="Gallery 3" className="w-full h-48 object-cover rounded" />
            <img src="/placeholder.svg" alt="Gallery 4" className="w-full h-48 object-cover rounded" />
            <img src="/placeholder.svg" alt="Gallery 5" className="w-full h-48 object-cover rounded" />
            <img src="/placeholder.svg" alt="Gallery 6" className="w-full h-48 object-cover rounded" />
          </section>
        )
      case 'testimonials':
        return (
          <section className={componentStyles.testimonials}>
            <h2 className="text-3xl font-bold mb-8 text-center" contentEditable onBlur={handleEdit}>What Our Clients Say</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded shadow">
                <p className="mb-4" contentEditable onBlur={handleEdit}>"Great service! Highly recommended."</p>
                <p className="font-bold" contentEditable onBlur={handleEdit}>- John Doe</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <p className="mb-4" contentEditable onBlur={handleEdit}>"Excellent products and support."</p>
                <p className="font-bold" contentEditable onBlur={handleEdit}>- Jane Smith</p>
              </div>
            </div>
          </section>
        )
      case 'cta':
        return (
          <section className={componentStyles.cta}>
            <h2 className="text-3xl font-bold mb-4" contentEditable onBlur={handleEdit}>Ready to Get Started?</h2>
            <p className="mb-8" contentEditable onBlur={handleEdit}>Join us today and experience the difference.</p>
            <button className="bg-white text-primary font-bold py-2 px-6 rounded-full text-lg">Sign Up Now</button>
          </section>
        )
      case 'video':
        return (
          <section className={componentStyles.video}>
            <h2 className="text-3xl font-bold mb-4 text-center" contentEditable onBlur={handleEdit}>Watch Our Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {renderComponent()}
      <button
        onClick={() => onRemove(component.id)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-200"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default function BuilderCanvas({ components, addComponent, updateComponent, removeComponent }) {
  const canvasRef = useRef(null)
  const [email, setEmail] = useState('')

  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item, monitor) => {
      const newComponent = {
        id: `${item.type}-${Date.now()}`,
        type: item.type,
        content: item.content,
      }
      addComponent(newComponent)
    },
  }))

  const handleEditComponent = (id, newContent) => {
    updateComponent(id, { content: newContent })
  }

  const takeScreenshot = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current)
      const screenshot = canvas.toDataURL('image/png')
      return screenshot
    }
  }

  const sendEmail = async () => {
    const screenshot = await takeScreenshot()
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: email,
          message: 'Here is your website screenshot',
          screenshot_url: screenshot
        },
        'YOUR_USER_ID'
      )
      alert('Email sent successfully!')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send email. Please try again.')
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button onClick={sendEmail} className="px-3 py-1 bg-blue-500 text-white rounded">
            Send Screenshot
          </button>
        </div>
      </div>
      <div
        ref={(node) => {
          drop(node)
          canvasRef.current = node
        }}
        className="flex-grow min-h-0 overflow-y-auto border-2 border-dashed border-gray-300 p-4 bg-gray-50 rounded-lg"
      >
        {components.map((component) => (
          <div key={component.id} className="mb-4">
            <ComponentRenderer
              component={component}
              onEdit={handleEditComponent}
              onRemove={removeComponent}
            />
          </div>
        ))}
      </div>
    </div>
  )
}