import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacteristcPage = () => {
    const params = useParams()

    useEffect(()=>{
        console.log(params.characteristPath)
        console.log(params)

    }, [])


    return ( <>
        <div className="container bg-light">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome da Asa</th>
                    <th>Especie</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Asinha</td>
                    <td>Arthrophodinha</td>
                </tr>
                <tr>
                    <td>Asona</td>
                    <td>{params.characteristPath}</td>
                </tr>
            </tbody>
            </table>

        </div>
    </> );
}
 
export default CharacteristcPage;