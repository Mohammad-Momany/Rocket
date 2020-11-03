import React ,{useState}from 'react'

 const AddTrips=(props)=>{

    const [title, settitle] = useState([title])


    onChange=(e)=> settitle({[e.target.name]:e.target.value})


    onSubmit=(e)=>{
        e.preventDefault();
        AddTrips(title)
        settitle({title: ''})
    }

   
        return (
            <form onSubmit={onSubmit} id="form">
            <input 
            type="text" 
            name="title" 
            placeholder="Add Trip"
            style={{flex:10,padding: "5px"}}
            value={title}
            onChange={onChange}
            />
            <input
             type="submit"
              value="Add"
              className="inp-btn"

            />
          </form>      
          )
    
}


export default AddTrips