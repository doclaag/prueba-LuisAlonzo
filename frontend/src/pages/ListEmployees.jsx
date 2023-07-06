import { useState, useEffect } from 'react';

const ListEmployees = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                
                const response = await fetch('http://127.0.0.1:8000/api/empleados/');
                console.log(response)
                if (!response.ok) {
                    throw new Error('Hubo un error al cargar los empleados. Por favor, inténtelo de nuevo más tarde.');
                }
                const data = await response.json();
                setEmpleados(data);
                console.log(data)
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Hubo un error al cargar los empleados. Por favor, inténtelo de nuevo más tarde.');
                setLoading(false);
            }
        };

        fetchEmpleados();
    }, []);


    if (loading) {
        return <p>Cargando empleados...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container">
            <h1 className="mt-4">Listado de Empleados</h1>
            {empleados.map((empleado) => (
                <div className="card my-4" key={empleado.id_empleado}>
                    <div className="card-body">
                        <h2 className="card-title">{empleado.nombre}</h2>
                        <p className="card-text">ID: {empleado.id_empleado}</p>
                        <p className="card-text">Salario Base: {empleado.salario_base}</p>
                        <p className="card-text">Horas Trabajadas: {empleado.horas_trabajadas}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListEmployees;
