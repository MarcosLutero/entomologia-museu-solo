import React from 'react'
import FormAddCharacteristics from '../FormAddCharacteristics/FormAddCharacteristics';
const HandleCharacteristcsPage = ({ finalPath, field, title}) => {
    return ( <>
        <FormAddCharacteristics finalPath={finalPath} field={field} title={title} />
        <h1 className='text-white'>ALO ALO</h1>
    </> );
}
 
export default HandleCharacteristcsPage;