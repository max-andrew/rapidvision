import { useState, useEffect } from "react"

function App(): JSX.Element {
  const [currentStyle, setCurrentStyle] = useState<string>("A")
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [dPopUp, setDPopUp] = useState<boolean>(false)
  const [isSettingFunction, setIsSettingFunction] = useState<boolean>(false)
  const [hasFunctions, setHasFunctions] = useState<number[]>([])

  useEffect(() => {
    setIsSettingFunction(false)
  }, [dPopUp])

  function addFunction(number): boolean {
    if (!dPopUp) {
      return false
    }

    if (hasFunctions.includes(number)) {
      setIsSettingFunction(true)
      return false
    } else {
      setHasFunctions([number, ...hasFunctions])
      return true
    }
  }

  function ToolBar(props) {
    return (
      <>
        <div className="h-full w-1/8 bg-gray-200 flex flex-col items-center justify-between border-4 border-gray-200">

          <div className="w-full space-y-2">
            <div className="w-full h-14 bg-gray-400 text-white flex items-center justify-center border-2 border-black mb-1">Logo</div>
            <button onClick={() => setCurrentStyle("A")} className="w-full bg-orange-700 text-white border-2 border-black py-2">Style A</button>
            <button onClick={() => setCurrentStyle("B")} className="w-full bg-blue-700 text-white border-2 border-black py-2">Style B</button>
            <button onClick={() => setCurrentStyle("C")} className="w-full bg-green-800 text-white border-2 border-black py-2">Style C</button>
            <button onClick={() => {
              setCurrentStyle("D")
              setDPopUp("")
            }}
              className="w-full bg-purple-800 text-white border-2 border-black py-2">Style D</button>
          </div>

          <div className="w-full flex flex-col items-center space-y-2">
            <div className="flex w-full justify-evenly m-2 text-xs">
              <button className="w-1/4 bg-yellow-300 border-2 border-black py-2">Dim</button>
              <button className="w-1/4 bg-yellow-300 border-2 border-black py-2">Bright</button>
            </div>

            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 w-8 h-8 border-2 border-black">←</button>
              <div className="flex flex-col space-y-12">
                <button className="bg-blue-500 w-8 h-8 border-2 border-black">↑</button>
                <button className="bg-blue-500 w-8 h-8 border-2 border-black">↓</button>
              </div>
              <button className="bg-blue-500 w-8 h-8 border-2 border-black">→</button>
            </div>

            <div className="flex w-full justify-evenly text-xs">
              <button className="w-1/4 bg-yellow-500 border-2 border-black py-2">Out</button>
              <button className="w-1/4 bg-yellow-500 border-2 border-black py-2">In</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center space-y-2 mt-2">
            <div className="grid grid-cols-2 gap-2 w-full px-1 text-xs">
              <button className="bg-gray-300 border-2 border-black py-2">Manual</button>
              <button className="bg-gray-300 border-2 border-black py-2">Scan</button>
              <button onClick={() => addFunction(1)} className="bg-gray-300 border-2 border-black py-2">1</button>
              <button onClick={() => addFunction(2)} className="bg-gray-300 border-2 border-black py-2">2</button>
              <button onClick={() => addFunction(3)} className="bg-gray-300 border-2 border-black py-2">3</button>
              <button onClick={() => addFunction(4)} className="bg-gray-300 border-2 border-black py-2">4</button>
            </div>
          </div>

          <button
            className="text-lg bg-black text-white w-full border-2 border-black my-2 py-2"
            onClick={() => setShowSettings(!showSettings)}
            >
            SETTINGS
          </button>

          <div className="w-full flex justify-between items-center">
            <div className="h-full bg-blue-700 text-white w-2/3 flex items-center justify-center border-2 border-black">Info Area</div>
            <button className="bg-blue-700 text-white w-12 h-12 rounded-full border-2 border-black mx-1">i</button>
          </div>
        </div>
      </>
    )
  }

  function StyleA(props) {
    return (
      <>
        <div className="w-full h-full bg-orange-100 border-2 border-black flex flex-col">
          <h2 className="text-orange-700 self-start m-1 text-lg">View Image Mode A</h2>
          { showSettings && (
            <div className="flex-grow flex items-center">
              <div className="h-5/6 w-2/12 bg-gray-400 text-white flex flex-col justify-center space-y-2 border-2 border-black pl-2 mb-1">
                <p>Job Setup</p>
                <p>Load Job</p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                  setCurrentStyle("D")
                  setDPopUp("setModes")
                }}>Set Mode(s)</p>
                <p>Take Master</p>
                <p>Configuration</p>
                <p>Diagnostics</p>
                <p>Remote Service</p>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }

  function StyleD(props) {
    function DPopUp(props) {
      return (
        <div className="col-span-2 bg-gray-200 flex flex-col justify-center items-center">
          <div className="h-2/6" />
          <h2 className="w-3/6 text-gray-700 text-center">{!isSettingFunction ? "← Which mode would you like to edit?" : "Are you sure you want to overwrite the mode already here?"}</h2>
          <button onClick={() => setDPopUp(false)} className="text-gray-400 mt-5">Cancel</button>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-5 h-full">
        <div className="col-span-2  bg-purple-300 border-2 border-black">
          <h2 className="text-purple-900">View Repeat Style D</h2>
        </div>
        <div className="col-span-3" />
        { dPopUp ? (
          <DPopUp />
          ) : (
          <div className="col-span-2" />
        )}
        <div className="col-span-3 bg-purple-300 border-2 border-black">
          <h2 className="text-purple-900">View Image Style D</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex w-screen h-screen">

        <ToolBar />

        <div className="flex w-screen flex-col p-1">
          { (currentStyle === "A") &&
            <StyleA />
          }
          { (currentStyle === "D") &&
            <StyleD />
          }
          { (currentStyle !== "A" && currentStyle !== "D") &&
            <p>Error loading style</p>
          }
        </div>
      </div>
    </>
  )
}

export default App
