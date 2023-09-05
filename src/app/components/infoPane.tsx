interface InfoPaneProps {}

export default function InfoPane({}: InfoPaneProps) {
	return (
		<div
			className="
            w-full
            absolute
            top-5
            px-5
            -z-10"
		>
			<div
                className="
                flex
                flex-row-reverse
                flex-nowrap
                gap-x-2
                w-full
                h-screen
                overflow-x-scroll
                overflow-y-visible"
            >
                <div
					className="
                    bg-[#2f3b51]
                    min-w-[100px]
                    min-h-[100px]
                    h-min
                    w-fit
                    rounded-2xl
                    p-2
                    px-4
                    shadow-2xl
                    text-gray-200
                    flex-none"
				>
                    <h1><span className="font-bold">FILENAME:</span> <span className="font-mono">placeholder.png</span></h1>
                </div>
                <div
					className="
                    bg-[#2f3b51]
                    min-w-[100px]
                    min-h-[100px]
                    h-min
                    w-fit
                    rounded-2xl
                    p-2
                    px-4
                    shadow-2xl
                    text-gray-200
                    flex-none"
				>
                    <h1><span className="font-bold">FILENAME:</span> <span className="font-mono">placeholder.png</span></h1>
                </div>
                <div
					className="
                    bg-[#2f3b51]
                    min-w-[100px]
                    min-h-[100px]
                    h-min
                    w-fit
                    rounded-2xl
                    p-2
                    px-4
                    shadow-2xl
                    text-gray-200
                    flex-none"
				>
                    <h1><span className="font-bold">FILENAME:</span> <span className="font-mono">placeholder.png</span></h1>
                </div>
                <div
					className="
                    flex
                    relative
                    h-[100px]"
				>
					<h1
						className="
                        text-[#2f3b51]
                        font-bold
                        -rotate-90
                        origin-center
                        text-xl
                        -right-4
                        top-1/2
                        -translate-y-1/2
                        absolute"
					>
						INFO
					</h1>
				</div>
			</div>
		</div>
	);
}

function InfoPanel(content: any) {
    return(
        <div
					className="
                    bg-[#2f3b51]
                    min-w-[100px]
                    min-h-[100px]
                    h-min
                    w-fit
                    rounded-2xl
                    p-2
                    px-4
                    shadow-2xl
                    text-gray-200
                    flex-none"
				>
                    {content}
                </div>
    )
}