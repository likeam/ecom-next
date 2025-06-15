import { Button } from "@/components/ui/button";
import{ stripe} from "@/lib/strip";

const Home = async () => {
  const products = await stripe.products.list({
    expand: 
  })
  return (
    <div>
      <h1>Home</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
