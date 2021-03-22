import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-description">
          <h1>EasyTrip</h1>
          <p>
            Naplánujte si svůj další výlet krok po kroku a mějte všechny
            potřebné informace vždy po ruce!
          </p>
        </div>
        <button className="sign-in">
          <Link href="/list">
            <a>Přihlásit se</a>
          </Link>
        </button>
      </div>
    </>
  );
}
