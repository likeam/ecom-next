import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/strip";

const Home = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(products);
  return (
    <div>
      <section>
        <div className="">
          <div className="">
            <h2>Wecome to My Ecommrece</h2>
            <p>Discover the latest product at the best prices</p>
            <Button asChild variant="default">
              Browse All Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
