import { Instagram } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3" id="bottomMenu">
      <section className="container">
        <section className="row">
          <section className="col">
            <h2 className="footer-heading">VISIT</h2>
            <hr />
            <p className="footer-text mb-0">
              WAYFINDER WAIKIKI <br />
              2375 Ala Wai Blvd <br />
              Honolulu, HI 96815 <br /> <br />
              <a
                href="https://www.google.com/maps/place/Wayfinder+Waikiki/@21.2788087,-157.8232363,15z/data=!4m9!3m8!1s0x7c00731e076f0d51:0xfd3884d37559d0bf!5m2!4m1!1i2!8m2!3d21.2788087!4d-157.8232363!16s%2Fg%2F11k4sl3lgl?sa=X&ved=2ahUKEwjhxuyTk5b9AhUpATQIHTn5DG0Q_BJ6BAhoEAc&coh=164777&entry=tt&shorturl=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
              <br />
              <br />
              <a
                href="https://www.instagram.com/redfishpoke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </p>
          </section>
          <section className="col">
            <h2 className="footer-heading">DINE-IN</h2>
            <hr />
            <p className="footer-text mb-0">
              Reservations are recommended and can be made through OpenTable or by calling (808) 921-3220. <br />{" "}
              <br />
              Validated Parking - 3 Hours for $6 <br /> <br />
              Kama&apos;aina Discount - 10% off your order with valid Hawaii ID
            </p>
          </section>
          <section className="col">
            <h2 className="footer-heading">HOURS</h2>
            <hr />
            <p className="footer-text mb-0">
              Monday - Sunday: <br /> <br />
              Brunch: 7:00 AM - 1:00 PM <br />
              Dinner: 5:00 PM - 10:00 PM <br />
              Happy Hour: 5:00 PM - 6:30 PM Daily <br />
            </p>
          </section>
        </section>
      </section>
    </footer>
  );
}
