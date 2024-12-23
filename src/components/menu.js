function Menu() {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // get querystring param isadmin
        const urlParams = new URLSearchParams(window.location.search);
        setIsAdmin(urlParams.get('isadmin') === "1");
    }, []);


    return (
        <div className="Menu">
            <button onClick={() => { window.location = "https://chess.wonderland.social" }}>Play Chess</button>
            <button onClick={() => { window.location = "https://goplay.wonderland.social" }}>GoPlay Outside™</button>
            <button onClick={() => { window.location = "https://search.wonderland.social" }}>Wonderland Search</button>
            {isAdmin && <button onClick={() => setPage("admin")}>Admin</button>}
            <button onClick={() => { setPage("submit"); setMessage("") }}>Submit a site</button>
        </div>
    );
}

export default Menu;

