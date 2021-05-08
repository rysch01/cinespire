import {useState} from 'react'

const useInput = (startValue) => {
    const [value, setValue] = useState(startValue);

    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useInput