import Button from "./Button";

function Banner() {
  return (
    <section className="banner">
      <p className="banner-tag">Limited Time Offer</p>
      <h2>Build your dream website with us</h2>
      <p>
        Launch your next project faster with our modern and affordable web
        solutions.
      </p>
      <Button text="Get Started" variant="primary" size="medium" />
    </section>
  );
}

export default Banner;