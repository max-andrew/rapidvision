function App(): JSX.Element {
  function ToolBar(props) {
    return (
      <>
        <div className="h-full w-1/8 bg-gray-200 flex flex-col items-center justify-between border-4 border-gray-200">

          <div className="w-full space-y-2">
            <div className="w-full h-14 bg-gray-400 text-white flex items-center justify-center border-2 border-black mb-1">Logo</div>
            <button className="w-full bg-orange-700 text-white border-2 border-black py-2">Style A</button>
            <button className="w-full bg-blue-700 text-white border-2 border-black py-2">Style B</button>
            <button className="w-full bg-green-800 text-white border-2 border-black py-2">Style C</button>
            <button className="w-full bg-purple-800 text-white border-2 border-black py-2">Style D</button>
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
              <button className="bg-gray-300 border-2 border-black py-2">1</button>
              <button className="bg-gray-300 border-2 border-black py-2">2</button>
              <button className="bg-gray-300 border-2 border-black py-2">3</button>
              <button className="bg-gray-300 border-2 border-black py-2">4</button>
            </div>
          </div>

          <button className="text-lg bg-black text-white w-full border-2 border-black my-2 py-2">SETTINGS</button>

          <div className="w-full flex justify-between items-center">
            <div className="h-full bg-blue-600 text-white w-2/3 flex items-center justify-center border-2 border-black">Info Area</div>
            <button className="bg-blue-600 text-white w-12 h-12 rounded-full border-2 border-black mx-1">i</button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex w-screen h-screen">
        <ToolBar />

        <div className="flex w-screen flex-col p-1">
          <div className="flex w-2/5 h-2/5 bg-purple-300 border-2 border-black">
            <h2 className="text-purple-900">View Repeat Style D</h2>
          </div>
          <div className="flex w-3/5 h-3/5 bg-purple-300 border-2 border-black place-self-end">
            <h2 className="text-purple-900">View Image Style D</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
