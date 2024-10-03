import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ComponentLibrary from '../Components/ComponentLibrary'
import BuilderCanvas from '../Components/BuilderCanvas'
import { useState } from 'react'
import { Layout, Sidebar } from 'lucide-react'

export default function WebBuilder() {
  const [components, setComponents] = useState([])

  const addComponent = (component) => {
    setComponents(prevComponents => [...prevComponents, component])
  }

  const updateComponent = (component) => {
    setComponents(prevComponents => prevComponents.map(comp => 
      comp.id === component.id ? { ...comp, ...component } : comp
    ))
  }

  const removeComponent = (componentId) => {
    setComponents(prevComponents => prevComponents.filter(comp => comp.id !== componentId))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <Layout className="w-6 h-6 mr-2" />
              Website Builder
            </h1>
          </div>
          <nav className="px-4">
            <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200 mb-2 flex items-center">
              <Sidebar className="w-4 h-4 mr-2" />
              Components
            </button>
          </nav>
        </div>
        <div className="flex-1 flex">
          <div className="w-1/4 bg-white p-4 overflow-y-auto border-r">
            <h2 className="text-xl font-bold mb-4">Component Library</h2>
            <ComponentLibrary />
          </div>
          <div className="w-3/4 bg-gray-50 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Builder Canvas</h2>
            <BuilderCanvas 
              components={components}
              addComponent={addComponent}
              updateComponent={updateComponent}
              removeComponent={removeComponent}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  )
}