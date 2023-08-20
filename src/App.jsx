import './App.css'
import Header from './components/header/Header'
import RegLog from './components/regLog/RegLog'
import { useState } from 'react'

function App() {
  const [activeModal, setActiveModal] = useState(false)
  const [selectMenuData, setSelectMenuData] = useState(null)

  const sendSelectData = data => {
    setSelectMenuData(data)
  }

  return (
    <div className="container m-auto">
      <Header
        handleCLick={() => setActiveModal(true)}
        sendSelectData={sendSelectData}
      />
      {activeModal && (
        <RegLog
          selectData={selectMenuData}
          handleClick={() => setActiveModal(prev => !prev)}
        />
      )}
    </div>
  )
}

export default App
