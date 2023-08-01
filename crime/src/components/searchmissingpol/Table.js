const Table = ({ data }) => {
    return (
      <>
      <div>
      <h1 className="text-white text-center text-3xl font-bold mt-10">MISSING PERSON DETAILS</h1>
      </div>
      <table className="tablecenter bg-white">
       
     
        <tbody>
      
        
          <tr >
            <th >Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Description</th>
            <th>Aadhar</th>
      
          </tr>
      
          {data.map((item) => (
      
            <tr key={item.id} style={{color:item.found?'green':'red'}}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.place}</td>
              <td>{item.description}</td>
              <td>{item.aadhar}</td>
            </tr>
        
          ))}
        </tbody>
      </table>
      </>
    );
  
  };
  
  export default Table;