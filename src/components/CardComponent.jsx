const CardComponent = ({ obj }) => {
    return (<div className="border border-sky-400 hover: flex flex-col rounded-lg justify-between shadow-card hover:translate-y-[-5px] hover:bg-[#024a7154] hover: duration-[0.5s] hover:bg-icon">
        <div className="flex  ">

            <h3 className="flex text-xl font-medium break-words "><a href={obj.url} className="focus:ring-2 focus:outline-none focus:rounded-sm focus:ring-sky-300 flex items-center gap-2 p-2 hover:underline hover:decoration-1" target="_blank"><span>{obj.title}</span><span className="w-6 h-6">

                <svg class="w-6 h-6 text-white" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                </svg>

            </span></a></h3>

        </div>
        <p className="pt-0 p-2 my-0" dangerouslySetInnerHTML={{ __html: obj.description }}></p>
        {obj.title === 'E-commerce desing' && <a href="https://www.figma.com/proto/TZZeSDoGz8YI69vKW4WYN5/Prototipado-Luana-Beauty?node-id=23-2&p=f&t=bRN1vF5kO45fMe4C-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" className="hover:underline hover:decoration-1 font-bold ps-2 focus:ring-2 focus:outline-none focus:rounded-sm focus:ring-sky-200 ">Prototype</a>}
        <div className="flex flex-wrap p-2">

            {obj.tecnologies.map((tec) => (
                    <div key={tec.name} className="flex m-1  gap-1 items-center justify-center border border-sky-200 p-0.5 rounded-lg">
                        {tec.image && (<p className="h-4 fill-white w-4 flex items-center " dangerouslySetInnerHTML={{ __html: tec.image }}></p>
                        )}
                        <p className="font-medium">{tec.name}</p>
                    </div>

            ))}
        </div>
    </div>)
}
export default CardComponent