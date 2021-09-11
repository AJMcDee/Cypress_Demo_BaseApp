export function NavBar(){
    return (
        <nav style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#63535B', padding: '1rem'}}>
        <div><h1 style={{color: 'white'}}>My Cool MadLibs</h1></div>
        <div><a href="http://www.google.com" style={{color: 'white'}}>Exit Site</a></div>
        </nav>
    )
}