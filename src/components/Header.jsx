import logo from "../assets/logo.png";

export function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
