import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Banner from "./components/Banner";
import Testimonial from "./components/Testimonial";

function App() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      title: "Web Design",
      description:
        "Modern, responsive layouts that make your brand stand out online.",
      tag: "Popular",
      price: "$20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      title: "Marketing Kit",
      description:
        "Everything you need to launch a product with confidence and style.",
      tag: "New",
      price: "$30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
      title: "E-Commerce Setup",
      description:
        "Sell faster with clean product pages, secure checkout, and analytics.",
      tag: "Best Value",
      price: "$50",
    },
  ];

  const reviews = [
    {
      quote:
        "The design looks amazing and the components are easy to reuse in every page.",
      name: "Shenuli Fernando",
      role: "Small Business Owner",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
      quote:
        "Clean UI, attractive colors, and simple React structure—perfect for learning.",
      name: "Sudam Fernando",
      role: "UI/UX Student",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="app-shell">
        <Greeting />
        <Banner />

        <section className="showcase-section">
          <div className="section-heading">
            <p className="eyebrow"></p>
            <h2>Reusable cards for products and services</h2>
            <p>
              These cards highlight key offerings with an image, title, short
              description, and price.
            </p>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <Card key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-heading">
            <h2>Customizable buttons</h2>
            <p>
              Different variants and sizes make the interface more interactive.
            </p>
          </div>

          <div className="button-row">
            <Button text="Get Started" variant="primary" size="large" />
            <Button text="View Pricing" variant="secondary" size="medium" />
            <Button text="Contact Us" variant="outline" size="medium" />
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-heading">
            <h2>Customer testimonials</h2>
            <p>
              Social proof makes the landing page feel more professional and
              trustworthy.
            </p>
          </div>

          <div className="testimonials-grid">
            {reviews.map((review) => (
              <Testimonial key={review.name} {...review} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;