import Link from "next/link";

export default function Header() {
  return (
    <header id="topMenu">
      <section className="px-0 justify-content-center pb-2">
        <section className="navbar">
          <section className="container">
            <ul className="nav justify-content-start">
              <li>
                <Link className="navbar-brand" href="/">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5cfa1d34745eb00001f70cc3/1598312556787-0ZU09ML6D5AOX9BNCQDB/Redfish-Logotype.png?format=500w"
                    width="200"
                    alt="Redfish logo"
                  />
                </Link>
              </li>
            </ul>
            <ul className="nav justify-content-end">
              <li className="nav-item nav-link">Menus</li>
              <li className="nav-item nav-link">Reservations</li>
              <li className="nav-item nav-link">Order Online</li>
              <li className="nav-item nav-link">Specials</li>
              <li className="nav-item nav-link">Events</li>
              <li className="nav-item nav-link">Our Poke</li>
              <li className="nav-item nav-link">About</li>
            </ul>
          </section>
        </section>
      </section>
    </header>
  );
}
