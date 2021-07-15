import '../styles/DataRecord.css'

export const DataRecord = ({entry}) => {

    return (
        <div className="entry-root">
        <div className="entry-component">
            Name: {entry.firstName+" "+entry.lastName}
            <br/>
            Profession: {entry.profession}
            <br/>
            Date Created: {entry.date.slice(0,10)}
            <br/>
             Unique Identifier: {entry._id}
        </div>
        </div>
    )
}