function Task(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <i className="fa-brands fa-github-square"></i>
            <label className="form-check-label" for="flexCheckDefault">
                {props.description}
            </label>
        </div>
    );
}

export default Task