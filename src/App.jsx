import logo from "./assets/logo.png";

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src={logo} height="68" width="68" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">NewFactForm</form>;
}

function CategoryFilter() {
  return <aside>CategoryFilter</aside>;
}

function FactList() {
  return <section>FactList</section>;
}
