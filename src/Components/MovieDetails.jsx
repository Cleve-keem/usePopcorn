
export default function MovieDetails({ selectedID, onClose }){
    return <div className="selected">
        <button className="btn-close" onClick={onClose}>&larr;</button>
        <span>{selectedID}</span>
    </div>
}