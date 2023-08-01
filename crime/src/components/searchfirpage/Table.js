const Table = ({ data }) => {
    return (
        <table className="tablecenter">
            <tbody className="center">
            <h1 className="text-white text-3xl font-bold text-center mt-16">F.I.R. DETAILS</h1>
                <div className="flex bg-white justify-center">
                
                <tr>
                <div className="flex flex-row mr-20 mt-10 mb-10">

                <div className="flex flex-col">
                
                    <th>State</th>
                    <th>District</th>
                    <th>Police Station</th>
                    <th>FIRno</th>
                    <th>Date</th>
                    <th>Acts</th>
                    <th>OccurenceDay</th>
                    <th>OccurenceDate</th>
                    <th>OccurenceTime</th>
                    <th>InformationReceivedDate</th>
                    <th>InformationReceivedDay</th>
                    <th >InformationReceivedTime</th>
                    <th>DiaryReferenceEntryNo</th>
                    <th>DiaryReferenceTime</th>
                    <th>DirectionAndDistancefromPS</th>
                    <th>BeatNo</th>
                    <th>Address</th>
                    <th>ComplainantName</th>
                    <th>ComplainantFatherorHusbandName</th>
                    <th>ComplainantDateOfBirth</th>
                    <th>ComplainantNationality</th>
                    <th>ComplainantOccupation</th>
                    <th>ComplainantPassportNo</th>
                    <th>ComplainantDateofIssue</th>
                    <th>ComplainantPlaceOfIssue</th>
                    <th>ComplainantAddress</th>
                    <th>DetailsOfSuspected</th>
                    <th>Cadre</th>
                    <th>ReasonsforDelay</th>
                    <th>ParticularsOfPropertiesStolenInvolved</th>
                    </div>
                    </div>
                </tr>
                
                {/* {data.map((item) => (
            <tr key={item.id}>
              <td>{item.State}</td>
              <td>{item.District}</td>
              <td>{item.PoliceStation}</td>
            </tr>
          ))} */}
          
                <tr key={data.id} className="firdatatable">
                <div className="flex-row mt-10 mb-10">
                
                    <div className="flex flex-col">
                        <td>{data.State}</td>
                        <td>{data.District}</td>
                        <td>{data.PoliceStation}</td>
                        <td>{data.FIRno}</td>
                        <td>{data.Date}</td>
                        <td>{data.Acts}</td>
                        <td>{data.OccurenceDay}</td>
                        <td>{data.OccurenceDate}</td>
                        <td>{data.OccurenceTime}</td>
                        <td>{data.InformationReceivedDate}</td>
                        <td>{data.InformationReceivedDay}</td>
                        <td>{data.InformationReceivedTime}</td>
                        <td>{data.DiaryReferenceEntryNo}</td>
                        <td>{data.DiaryReferenceTime}</td>
                        <td>{data.DirectionAndDistancefromPS}</td>
                        <td>{data.BeatNo}</td>
                        <td>{data.Address}</td>
                        <td>{data.ComplainantName}</td>
                        <td>{data.ComplainantFatherorHusbandName}</td>
                        <td>{data.ComplainantDateOfBirth}</td>
                        <td>{data.ComplainantNationality}</td>
                        <td>{data.ComplainantOccupation}</td>
                        <td>{data.ComplainantPassportNo}</td>
                        <td>{data.ComplainantDateofIssue}</td>
                        <td>{data.ComplainantPlaceOfIssue}</td>
                        <td>{data.ComplainantAddress}</td>
                        <td>{data.DetailsOfSuspected}</td>
                        <td>{data.cadre}</td>
                        <td>{data.ReasonsforDelay}</td>
                        <td>{data.ParticularsOfPropertiesStolenInvolved}</td>
                        </div>
                        </div>
                </tr>
                </div>
                

            </tbody>
        </table>
    );
};

export default Table;