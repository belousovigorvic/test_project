import './App.css'
import Header from './components/header/Header'
import MangaList from './components/mangaList/MangaList'
import RegLog from './components/regLog/RegLog'
import { useState } from 'react'

function App() {
  const [activeModal, setActiveModal] = useState(false)
  const [selectMenuData, setSelectMenuData] = useState(null)

  const sendSelectData = data => {
    setSelectMenuData(data)
  }

  return (
    <div className="relative">
      <Header
        handleCLick={() => setActiveModal(true)}
        sendSelectData={sendSelectData}
      />
      <MangaList />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {activeModal && (
          <RegLog
            selectData={selectMenuData}
            handleClick={() => setActiveModal(prev => !prev)}
          />
        )}
      </div>
    </div>
  )
}

export default App
