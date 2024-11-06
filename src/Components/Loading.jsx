

const Loading = () => {
  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-slate-900/40 backdrop-blur-sm">
        <div className="flex items-center gap-6">
            <div className="w-24 h-24 border-[10px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-solid rounded-full">
                <p className="text-3xl font-lato text-white"> Loading ...</p>
            </div>
        </div>
    </div>
  )
}

export default Loading