export default function Home() {
  return (
    <main className="flex md:flex-row flex-col min-h-screen">
        <div className="bg-zinc-300 md:min-h-screen p-5">
            <h1 className="text-5xl mb-5">WFC Rule Builder v1.0</h1>
            <div className="flex flex-row  flex-wrap">
                <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mr-2 mb-2">
                    <button className="bg-orange-100 p-2 px-4 rounded-lg w-fit whitespace-nowrap hover:bg-orange-400 hover:text-white " onClick="importSpriteSheet()">Import Sprite Sheet</button>
                    <input type="number" id="tilesize-input" placeholder="16" className="w-16 rounded-md text-center"/>
                </div>

                <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mb-2">
                    <button className="bg-orange-100 p-2 rounded-lg whitespace-nowrap" onClick="importRules()">Import Rules</button>
                    <button className="bg-orange-100 p-2 rounded-lg whitespace-nowrap" onClick="exportRules()">Export Rules</button>
                </div>
            </div>

            <div id="tiles-container"></div>
        </div>
        <div className="bg-neutral-400 md:min-h-screen min-h-full">
            {/* <div id="menu">
                <div id="sprite-container">
                  {}
                    <div className="outer-tile" id ="ul"></div>
                    <div className="outer-tile" id ="u"></div>
                    <div className="outer-tile" id ="ur"></div>
                    <div className="outer-tile" id ="l"></div>
                    <img className="middle-tile" id="selected-tile" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"/>
                    <div className="outer-tile" id ="r"></div>
                    <div className="outer-tile" id ="dl"></div>
                    <div className="outer-tile" id ="d"></div>
                    <div className="outer-tile" id ="dr"></div>
                </div>

                <div id="drop-zone" onDrop="drop(event)" ondragover="allowDrop(event)">
                </div>
                
            </div> */}
        </div>
    </main>
  )
}
