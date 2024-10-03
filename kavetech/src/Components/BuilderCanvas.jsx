import { useDrop } from 'react-dnd'
import { Heading1, TextIcon, Image, Square, Columns, CreditCard, List, Video } from 'lucide-react'

const componentStyles = {
  heading: 'text-3xl font-bold text-primary mb-4',
  paragraph: 'text-gray-700 mb-4',
  image: 'w-full h-64 object-cover rounded-lg mb-4',
  button: 'bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200',
  columns: 'grid grid-cols-2 gap-4 mb-4',
  card: 'bg-white rounded-lg shadow-md p-6 mb-4',
  list: 'list-disc list-inside mb-4',
  video: 'w-full aspect-video rounded-lg mb-4',
}

function ComponentRenderer({ component }) {
  switch (component.type) {
    case 'heading':
      return <h2 className={componentStyles.heading}>{component.content}</h2>
    case 'paragraph':
      return <p className={componentStyles.paragraph}>{component.content}</p>
    case 'image':
      return <img src="/placeholder.svg" alt="Placeholder" className={componentStyles.image} />
    case 'button':
      return <button className={componentStyles.button}>{component.content}</button>
    case 'columns':
      return (
        <div className={componentStyles.columns}>
          <div className="bg-gray-100 p-4 rounded">Column 1</div>
          <div className="bg-gray-100 p-4 rounded">Column 2</div>
        </div>
      )
    case 'card':
      return (
        <div className={componentStyles.card}>
          <h3 className="text-xl font-bold mb-2">Card Title</h3>
          <p>This is a sample card content.</p>
        </div>
      )
    case 'list':
      return (
        <ul className={componentStyles.list}>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      )
    case 'video':
      return (
        <video className={componentStyles.video} controls>
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    default:
      return null
  }
}

export default function BuilderCanvas({ components, addComponent }) {
  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
      addComponent({
        id: `${item.type}-${Date.now()}`,
        type: item.type,
        content: item.content,
      })
    },
  }))

  return (
    <div ref={drop} className="min-h-full border-2 border-dashed border-gray-300 p-4 bg-gray-50 rounded-lg">
      {components.map((component) => (
        <div key={component.id} className="mb-4">
          <ComponentRenderer component={component} />
        </div>
      ))}
    </div>
  )
}