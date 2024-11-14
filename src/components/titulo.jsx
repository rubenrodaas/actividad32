
function Titulo({ children }) {
    return (
        <h1 className="text-4xl text-blue-500 font-bold py-2 border-b-4 border-blue-500">
            {children}
        </h1>
    );
}

export default Titulo;