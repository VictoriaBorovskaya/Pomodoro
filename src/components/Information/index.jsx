const Information = (props) => {
    const {isOpen, setIsOpen} = props

    const closeModal = (element) => {
        element.stopPropagation()
    }

    return(
        <div className={isOpen ? "bg-neutral-900/75 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" : "hidden"} onClick={() => setIsOpen(false)}>
            <div className="max-w-3xl m-auto bg-white p-8 relative" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 absolute top-2 right-2 text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-4xl font-bold text-red-900 py-5 text-center">Oнлайн-таймер для повышения вашей продуктивности</h1>
                <p className="text-3xl font-bold text-red-600 py-3">Что такое Pomodoro?</p>
                <p className="text-lg text-justify">Цель этого приложения — помочь вам сосредоточиться на любой задаче, над которой вы работаете, например, на учебе, письме или программировании. 
                    Это приложение вдохновлено
                    <a className="text-red-600 font-bold hover:underline underline-offset-4 decoration-2" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noreferrer"> Техникой Pomodoro</a>, 
                    которая представляет собой метод тайм-менеджмента, разработанный Франческо Чирилло.
                </p>
                <p className="text-3xl font-bold text-red-600 py-3">Что такое техника Pomodoro?</p>
                <p className="text-lg text-justify">Техника помидора создана Франческо Чирилло для более продуктивного способа работы и учебы. 
                    В этом методе используется таймер для разбивки работы на интервалы, обычно по 25 минут, разделенные короткими перерывами. 
                    Каждый интервал известен как помидоро, от итальянского слова «помидор», в честь кухонного таймера в форме помидора, 
                    который Чирилло использовал, когда был студентом университета.
                </p>
                <p className="text-3xl font-bold text-red-600 py-3">Как использовать таймер Pomodoro?</p>
                <div className="text-lg pb-5 text-justify">
                    <li>Определитесь с поставленной задачей.</li>
                    <li>Запустите таймер и сосредоточьтесь на задаче на 25 минут.</li>
                    <li>Сделайте короткий перерыв на 5 минут, когда прозвенит будильник.</li>
                    <li>Через каждые четыре «Pomodoro» делайте длинный перерыв (15 минут).</li>
                </div>
            </div>
        </div>
    )
}

export default Information