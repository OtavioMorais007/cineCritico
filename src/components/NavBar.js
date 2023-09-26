export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>CineCritíco</h1>
    </div>
  );
}

export function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Pesquisar filmes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export function NumResults({ movies }) {
  return (
    <p className="num-results">
      Foram encontrados <strong>{movies.length}</strong> resultados
    </p>
  );
}
