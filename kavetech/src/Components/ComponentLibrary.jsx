import { useDrag } from 'react-dnd'
import { Heading1, Text, Image, Square, Columns, CreditCard, List, Video } from 'lucide-react'

const componentTypes = [
  { type: 'heading', content: 'Heading', icon: Heading1 },
  { type: 'paragraph', content: 'Paragraph', icon: Text },
  { type: 'image', content: 'Image', icon: Image },
  { type: 'button', content: 'Button', icon: Square },
  { type: 'columns', content: 'Columns', icon: Columns },
  { type: 'card', content: 'Card', icon: CreditCard },
  { type: 'list', content: 'List', icon: List },
  { type: 'video', content: 'Video', icon: Video },
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