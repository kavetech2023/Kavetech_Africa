import { useDrag } from 'react-dnd'
import { Layout, Type, Image, Square, Columns, CreditCard, List, Video, Menu, Home } from 'lucide-react'

const componentTypes = [
  { type: 'header1', content: 'Header 1', icon: Layout },
  { type: 'header2', content: 'Header 2', icon: Menu },
  { type: 'hero1', content: 'Hero Section 1', icon: Home },
  { type: 'hero2', content: 'Hero Section 2', icon: Image },
  { type: 'content1', content: 'Content Section 1', icon: Type },
  { type: 'content2', content: 'Content Section 2', icon: Columns },
  { type: 'footer1', content: 'Footer 1', icon: Layout },
  { type: 'footer2', content: 'Footer 2', icon: CreditCard },
  { type: 'gallery', content: 'Image Gallery', icon: Image },
  { type: 'testimonials', content: 'Testimonials', icon: List },
  { type: 'cta', content: 'Call to Action', icon: Square },
  { type: 'video', content: 'Video Section', icon: Video },
]

function DraggableComponent({ type, content, icon: Icon }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`p-4 bg-white rounded-lg shadow-md cursor-move transition-all duration-200 ease-in-out transform hover:scale-105 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <Icon className="w-8 h-8 text-primary" />
        <span className="text-sm font-medium text-gray-700">{content}</span>
      </div>
    </div>
  )
}

export default function ComponentLibrary() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {componentTypes.map((component) => (
        <DraggableComponent
          key={component.type}
          type={component.type}
          content={component.content}
          icon={component.icon}
        />
      ))}
    </div>
  )
}