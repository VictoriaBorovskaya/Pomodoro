const Settings = (props) => {
    const {isActive, setIsActive } = props
    const closeModal = (element) => {
        element.stopPropagation()
    }

    return(
        <div className={isActive ? "bg-neutral-900/75 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" : "hidden"} onClick={() => setIsActive(false)}>
            <div className="max-w-3xl m-auto bg-white p-8 relative max-h-full overflow-auto" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 absolute top-2 right-2 text-red-900 cursor-pointer" onClick={() => setIsActive(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Здесь будут настройки для Pomodoro и перерывов</p>
            </div>
        </div>
    )
}

export default Settings